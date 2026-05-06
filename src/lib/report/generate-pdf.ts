/**
 * Client-side PDF report generator for howaffordable.org.
 *
 * Builds a multi-page personal housing-affordability report. All work
 * happens in the browser; nothing leaves the device.
 */

import jsPDF from "jspdf";
import QRCode from "qrcode";
import {
  COUNTRIES,
  COUNTRY_CODES,
  GLOBAL_ANCHORS,
  type CountryCode,
  type CountryHousingData,
} from "@/data/housing-data";
import { HISTORICAL_PRICE_TO_INCOME } from "@/data/historical-affordability";
import { computeAffordability } from "@/lib/affordability";
import { formatCurrency } from "@/lib/format";
import { getDictionary } from "@/lib/i18n";
import { interpolate } from "@/lib/i18n/dictionary";
import { localizedCountryName } from "@/lib/i18n/country-names";
import type { ReportInputs } from "./types";

const KOFI_URL = "https://ko-fi.com/yrunhaar";
const PAGE_W = 210;
const PAGE_H = 297;
const M = 18;
const W = PAGE_W - M * 2;

const C = {
  ink: [28, 25, 23] as const,
  body: [68, 64, 60] as const,
  muted: [120, 113, 108] as const,
  rule: [214, 207, 199] as const,
  bandSoft: [245, 240, 235] as const,
  amber: [153, 119, 0] as const,
  amberSoft: [255, 247, 220] as const,
  rose: [165, 64, 78] as const,
  sage: [45, 142, 122] as const,
  sageSoft: [222, 240, 235] as const,
  periwinkle: [49, 112, 160] as const,
  periwinkleSoft: [222, 235, 247] as const,
  lavender: [123, 58, 150] as const,
};
type Color = readonly [number, number, number];

interface DrawContext {
  readonly doc: jsPDF;
  readonly t: ReturnType<typeof getDictionary>;
  readonly country: CountryHousingData;
  readonly localeName: string;
  readonly locale: string;
  cursorY: number;
  pageNumber: number;
}

function setText(d: jsPDF, c: Color): void { d.setTextColor(c[0], c[1], c[2]); }
function setFill(d: jsPDF, c: Color): void { d.setFillColor(c[0], c[1], c[2]); }
function setStroke(d: jsPDF, c: Color): void { d.setDrawColor(c[0], c[1], c[2]); }

function ensureSpace(ctx: DrawContext, needed: number): void {
  if (ctx.cursorY + needed > PAGE_H - M - 14) {
    drawFooter(ctx);
    ctx.doc.addPage();
    ctx.pageNumber += 1;
    ctx.cursorY = M;
  }
}

function newPage(ctx: DrawContext): void {
  drawFooter(ctx);
  ctx.doc.addPage();
  ctx.pageNumber += 1;
  ctx.cursorY = M;
}

function drawFooter(ctx: DrawContext): void {
  const { doc, t, pageNumber } = ctx;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  setText(doc, C.muted);
  doc.text(t.report.pdfFooterAttribution, M, PAGE_H - 9);
  doc.text(`${t.report.pdfPageLabel} ${pageNumber}`, PAGE_W - M, PAGE_H - 9, {
    align: "right",
  });
}

function sectionHeading(ctx: DrawContext, number: string, text: string, accent: Color = C.periwinkle): void {
  ensureSpace(ctx, 22);
  ctx.cursorY += 4;
  const { doc } = ctx;
  setFill(doc, accent);
  const chipW = 7;
  const chipH = 7;
  const chipY = ctx.cursorY;
  doc.roundedRect(M, chipY, chipW, chipH, 1.4, 1.4, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  setText(doc, [255, 255, 255]);
  doc.text(number, M + chipW / 2, chipY + chipH / 2 + 1.4, { align: "center" });
  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  setText(doc, C.ink);
  doc.text(text, M + chipW + 4, chipY + chipH / 2 + 1.6);
  ctx.cursorY = chipY + chipH + 6;
}

function paragraph(ctx: DrawContext, text: string, marginBottom = 4, color: Color = C.body): void {
  const { doc } = ctx;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10.5);
  setText(doc, color);
  const lines = doc.splitTextToSize(text, W) as string[];
  ensureSpace(ctx, lines.length * 4.6 + marginBottom);
  doc.text(lines, M, ctx.cursorY + 3.2);
  ctx.cursorY += lines.length * 4.6 + marginBottom;
}

// ─── pages ─────────────────────────────────────────────────────────────────

function drawCover(ctx: DrawContext, inputs: ReportInputs): void {
  const { doc, t, country, localeName, locale } = ctx;
  const date = new Date().toISOString().split("T")[0];

  setFill(doc, C.periwinkleSoft);
  doc.rect(0, 0, PAGE_W, 118, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(30);
  setText(doc, C.ink);
  const titleLines = doc.splitTextToSize(t.report.title, PAGE_W - M * 2 - 70) as string[];
  doc.text(titleLines, M, 38);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(13);
  setText(doc, C.body);
  doc.text(
    interpolate(t.report.preparedFor, { country: localeName, date }),
    M,
    38 + titleLines.length * 9 + 4,
  );

  doc.setFontSize(9);
  setText(doc, C.muted);
  doc.text(`${t.report.pdfCoverGeneratedLabel}: ${date}`, M, 78);

  setText(doc, C.periwinkle);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text(t.report.pdfMaxPriceLeadIn, M, 92);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(48);
  doc.text(formatCurrency(inputs.result.maxAffordableHomePrice, country.currency, locale as never), M, 116);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  setText(doc, C.body);
  doc.text(t.report.pdfYourPriceLabel, M, 124);

  // Right card with median home
  const cardW = 70;
  const cardH = 32;
  const cardX = PAGE_W - M - cardW;
  const cardY = 84;
  setFill(doc, [255, 255, 255]);
  setStroke(doc, C.rule);
  doc.setLineWidth(0.4);
  doc.roundedRect(cardX, cardY, cardW, cardH, 3, 3, "FD");
  setText(doc, C.muted);
  doc.setFontSize(8.5);
  doc.text("Country median home", cardX + 4, cardY + 8);
  setText(doc, C.ink);
  doc.setFontSize(15);
  doc.setFont("helvetica", "bold");
  doc.text(formatCurrency(country.medianHomePrice, country.currency, locale as never), cardX + 4, cardY + 22);

  ctx.cursorY = 140;

  // Cover narrative
  doc.setFont("helvetica", "italic");
  doc.setFontSize(10.5);
  setText(doc, C.body);
  const lines = doc.splitTextToSize(t.report.pdfCoverNarrative, W) as string[];
  doc.text(lines, M, ctx.cursorY);
  ctx.cursorY += lines.length * 5.5 + 6;

  // Snapshot strip
  type Cell = { readonly label: string; readonly value: string };
  const cells: readonly Cell[] = [
    { label: "Median income", value: formatCurrency(country.medianHouseholdIncome, country.currency, locale as never) },
    { label: "P/I ratio", value: `${(country.medianHomePrice / country.medianHouseholdIncome).toFixed(1)}×` },
    { label: "Mortgage rate", value: `${country.mortgageRatePct.toFixed(2)}%` },
    { label: "Min down", value: `${Math.round(country.minDownPaymentFraction * 100)}%` },
  ];
  const stripY = ctx.cursorY;
  const stripH = 28;
  const cellW = W / cells.length;
  setFill(doc, [255, 255, 255]);
  setStroke(doc, C.rule);
  doc.setLineWidth(0.4);
  doc.roundedRect(M, stripY, W, stripH, 2.5, 2.5, "FD");
  for (let i = 0; i < cells.length; i++) {
    const x = M + i * cellW;
    if (i > 0) {
      setStroke(doc, C.rule);
      doc.setLineWidth(0.3);
      doc.line(x, stripY + 4, x, stripY + stripH - 4);
    }
    setText(doc, C.muted);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text(cells[i].label, x + 4, stripY + 7);
    setText(doc, C.ink);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(cells[i].value, x + 4, stripY + 18);
  }
  ctx.cursorY = stripY + stripH + 6;
}

function drawSnapshot(ctx: DrawContext, inputs: ReportInputs): void {
  const { doc, t, country, locale } = ctx;
  newPage(ctx);
  sectionHeading(ctx, "1", t.report.pdfSection1Title, C.periwinkle);
  paragraph(ctx, t.report.pdfSection1Body, 8);

  const r = inputs.result;

  type Stat = { readonly label: string; readonly value: string };
  const stats: readonly Stat[] = [
    { label: "Max affordable", value: formatCurrency(r.maxAffordableHomePrice, country.currency, locale as never) },
    { label: "Country median", value: formatCurrency(country.medianHomePrice, country.currency, locale as never) },
    { label: "Monthly mortgage", value: formatCurrency(r.monthlyMortgage, country.currency, locale as never) },
    { label: "DTI burden", value: `${r.mortgageBurdenPct}%` },
    { label: "P/I ratio", value: `${r.priceToIncomeRatio.toFixed(1)}×` },
    { label: "Years to down", value: Number.isFinite(r.yearsToDownPayment) ? `${r.yearsToDownPayment.toFixed(1)}` : "—" },
  ];

  const cols = 3;
  const rows = Math.ceil(stats.length / cols);
  const cellW = W / cols;
  const cellH = 24;
  const startY = ctx.cursorY;
  setFill(doc, [255, 255, 255]);
  setStroke(doc, C.rule);
  doc.setLineWidth(0.4);
  doc.roundedRect(M, startY, W, cellH * rows, 2.5, 2.5, "FD");

  for (let i = 0; i < stats.length; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    const x = M + col * cellW;
    const y = startY + row * cellH;
    if (col > 0) {
      setStroke(doc, C.rule);
      doc.setLineWidth(0.2);
      doc.line(x, y + 3, x, y + cellH - 3);
    }
    if (row > 0) {
      setStroke(doc, C.rule);
      doc.setLineWidth(0.2);
      doc.line(x + 3, y, x + cellW - 3, y);
    }
    setText(doc, C.muted);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.text(stats[i].label, x + 4, y + 7);
    setText(doc, C.ink);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text(stats[i].value, x + 4, y + 18);
  }
  ctx.cursorY = startY + cellH * rows + 8;
}

function pickCrossCountries(userCode: CountryCode): readonly CountryCode[] {
  const baseline: CountryCode[] = ["US", "GB", "DE", "FR", "JP", "AU", "CA"];
  const filtered = baseline.filter((c) => c !== userCode);
  return [userCode, ...filtered.slice(0, 6)];
}

function drawCrossCountry(ctx: DrawContext, inputs: ReportInputs): void {
  const { doc, t, country, locale } = ctx;
  newPage(ctx);
  sectionHeading(ctx, "2", t.report.pdfSection3Title, C.lavender);
  paragraph(ctx, t.report.pdfSection3Body, 8);

  const incomeRatio = inputs.inputs.annualIncome / country.medianHouseholdIncome;
  const savingsRatio = country.medianHomePrice > 0 ? inputs.inputs.savings / country.medianHomePrice : 0;
  const codes = pickCrossCountries(country.code);

  const tableY = ctx.cursorY + 2;
  const colCountry = M;
  const colMax = M + 80;
  const colRatio = M + W;
  const rowH = 11;
  const chipW = 11;
  const chipH = 6;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  setText(doc, C.muted);
  doc.text("COUNTRY", colCountry, tableY);
  doc.text("MAX AFFORDABLE", colMax, tableY);
  doc.text("P/I", colRatio, tableY, { align: "right" });
  setStroke(doc, C.rule);
  doc.setLineWidth(0.3);
  doc.line(M, tableY + 2, M + W, tableY + 2);

  for (let i = 0; i < codes.length; i++) {
    const code = codes[i];
    const c = COUNTRIES[code];
    const isYou = code === country.code;
    const projectedIncome = Math.round(c.medianHouseholdIncome * incomeRatio);
    const projectedSavings = Math.round(c.medianHomePrice * savingsRatio);
    const projectedInputs = { ...inputs.inputs, annualIncome: projectedIncome, savings: projectedSavings };
    const result = computeAffordability(projectedInputs, c);

    const y = tableY + 8 + i * rowH;
    const chipY = y - chipH + 0.5;
    setFill(doc, isYou ? C.amberSoft : C.bandSoft);
    setStroke(doc, isYou ? C.amber : C.rule);
    doc.setLineWidth(0.3);
    doc.roundedRect(colCountry, chipY, chipW, chipH, 1.2, 1.2, "FD");
    setText(doc, isYou ? C.amber : C.muted);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.text(code, colCountry + chipW / 2, chipY + chipH - 1.6, { align: "center" });

    setText(doc, C.ink);
    doc.setFont("helvetica", isYou ? "bold" : "normal");
    doc.setFontSize(10);
    doc.text(c.name, colCountry + chipW + 3, y);

    setText(doc, C.body);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.text(formatCurrency(result.maxAffordableHomePrice, c.currency, locale as never), colMax, y);

    setText(doc, isYou ? C.amber : C.ink);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text(`${result.priceToIncomeRatio.toFixed(1)}×`, colRatio, y, { align: "right" });

    setStroke(doc, C.rule);
    doc.line(M, y + 3, M + W, y + 3);
  }
  ctx.cursorY = tableY + 8 + codes.length * rowH + 8;
  void GLOBAL_ANCHORS;
  void COUNTRY_CODES;
}

function drawHistorical(ctx: DrawContext): void {
  const { doc, t, country, localeName } = ctx;
  newPage(ctx);
  sectionHeading(ctx, "3", t.report.pdfHistoricalTitle, C.amber);

  const series = HISTORICAL_PRICE_TO_INCOME[country.code] ?? [];
  if (series.length < 2) {
    paragraph(ctx, t.report.pdfHistoricalNoData, 4);
    return;
  }

  paragraph(ctx, t.report.pdfHistoricalBody, 6);

  const chartX = M;
  const chartY = ctx.cursorY;
  const chartW = W;
  const chartH = 80;
  const padL = 18;
  const padB = 12;

  const minYear = series[0].year;
  const maxYear = series[series.length - 1].year;
  const maxValue = Math.max(...series.map((p) => p.priceToIncome));
  const yMax = Math.ceil(maxValue) + 1;

  setFill(doc, [255, 255, 255]);
  setStroke(doc, C.rule);
  doc.setLineWidth(0.3);
  doc.roundedRect(chartX, chartY, chartW, chartH, 1.5, 1.5, "FD");

  const xScale = (yr: number) =>
    chartX + padL + ((yr - minYear) / Math.max(1, maxYear - minYear)) * (chartW - padL - 4);
  const yScale = (val: number) =>
    chartY + chartH - padB - (val / yMax) * (chartH - padB - 6);

  setStroke(doc, C.rule);
  doc.setLineWidth(0.2);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7);
  setText(doc, C.muted);
  for (let v = 0; v <= yMax; v += 2) {
    const y = yScale(v);
    doc.line(chartX + padL, y, chartX + chartW - 4, y);
    doc.text(`${v}×`, chartX + padL - 2, y + 1.5, { align: "right" });
  }
  for (const yr of [minYear, Math.round((minYear + maxYear) / 2), maxYear]) {
    doc.text(`${yr}`, xScale(yr), chartY + chartH - 2, { align: "center" });
  }
  setStroke(doc, C.periwinkle);
  doc.setLineWidth(1.2);
  for (let i = 1; i < series.length; i++) {
    const a = series[i - 1];
    const b = series[i];
    doc.line(xScale(a.year), yScale(a.priceToIncome), xScale(b.year), yScale(b.priceToIncome));
  }
  ctx.cursorY = chartY + chartH + 6;

  const first = series[0];
  const last = series[series.length - 1];
  const delta = last.priceToIncome - first.priceToIncome;
  const direction = delta > 0.2 ? "+" : delta < -0.2 ? "−" : "≈";
  paragraph(
    ctx,
    interpolate(t.report.pdfHistoricalInsightTemplate, {
      country: localeName,
      firstYear: first.year,
      firstValue: first.priceToIncome.toFixed(1),
      lastYear: last.year,
      lastValue: last.priceToIncome.toFixed(1),
      direction,
      magnitude: Math.abs(delta).toFixed(1),
    }),
    4,
  );
}

function drawTakeaways(ctx: DrawContext, inputs: ReportInputs): void {
  const { t } = ctx;
  newPage(ctx);
  sectionHeading(ctx, "4", t.report.pdfTakeawaysTitle, C.sage);
  paragraph(ctx, t.report.pdfTakeawaysIntro, 8);

  const v = inputs.result.verdict;
  const bullet =
    v === "affordable" ? t.report.pdfTakeawaysAffordable
    : v === "stretch" ? t.report.pdfTakeawaysStretch
    : v === "unaffordable" ? t.report.pdfTakeawaysUnaffordable
    : t.report.pdfTakeawaysOutOfReach;

  paragraph(ctx, "• " + bullet, 6);
  paragraph(ctx, "• " + t.report.pdfTakeawaysBuyVsRent, 6);
}

async function drawClosing(ctx: DrawContext): Promise<void> {
  const { doc, t } = ctx;
  newPage(ctx);
  sectionHeading(ctx, "5", t.report.pdfMethodologyTitle, C.muted);
  paragraph(ctx, t.report.pdfMethodologyBody, 8);

  const ribbonH = 26;
  const ribbonY = PAGE_H - M - 14 - ribbonH;
  const ribbonX = M;
  const ribbonW = W;
  setFill(doc, C.periwinkleSoft);
  setStroke(doc, C.periwinkle);
  doc.setLineWidth(0.4);
  doc.roundedRect(ribbonX, ribbonY, ribbonW, ribbonH, 2.5, 2.5, "FD");

  setText(doc, C.ink);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text(t.report.pdfTipTitle, ribbonX + 6, ribbonY + 8);

  setText(doc, C.body);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  const tipLines = doc.splitTextToSize(t.report.pdfTipBody, ribbonW - 36) as string[];
  doc.text(tipLines.slice(0, 2), ribbonX + 6, ribbonY + 13);

  try {
    const qrDataUrl = await QRCode.toDataURL(KOFI_URL, {
      margin: 0,
      scale: 4,
      color: { dark: "#1c1917", light: "#dee5f5" },
    });
    const qrSize = ribbonH - 6;
    const qrX = ribbonX + ribbonW - qrSize - 4;
    const qrY = ribbonY + 3;
    doc.addImage(qrDataUrl, "PNG", qrX, qrY, qrSize, qrSize);
  } catch {
    // non-fatal
  }
}

export async function generateReportPdf(inputs: ReportInputs): Promise<void> {
  const { locale, countryCode } = inputs;
  const t = getDictionary(locale);
  const country = COUNTRIES[countryCode];
  if (!country) throw new Error(`Unknown country: ${countryCode}`);
  const localeName = localizedCountryName(countryCode, locale, country.name);

  const doc = new jsPDF({ unit: "mm", format: "a4" });
  doc.setProperties({
    title: t.report.title,
    subject: interpolate(t.report.preparedFor, {
      country: localeName,
      date: new Date().toISOString().split("T")[0],
    }),
    creator: "howaffordable.org",
    author: "howaffordable.org",
  });

  const ctx: DrawContext = {
    doc,
    t,
    country,
    localeName,
    locale,
    cursorY: M,
    pageNumber: 1,
  };

  drawCover(ctx, inputs);
  drawSnapshot(ctx, inputs);
  drawCrossCountry(ctx, inputs);
  drawHistorical(ctx);
  drawTakeaways(ctx, inputs);
  await drawClosing(ctx);
  drawFooter(ctx);

  const dateStr = new Date().toISOString().split("T")[0];
  const filename = interpolate(t.report.pdfFilenameTemplate, {
    country: countryCode.toLowerCase(),
    date: dateStr,
  });
  doc.save(filename);
}
