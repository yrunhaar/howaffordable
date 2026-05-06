"use client";

import {
  COUNTRIES,
  COUNTRY_CODES,
  type CountryHousingData,
} from "@/data/housing-data";
import {
  HISTORICAL_PRICE_TO_INCOME,
  OECD_AVERAGE,
} from "@/data/historical-affordability";
import { formatCurrency } from "@/lib/format";
import { useDictionary, useLanguage } from "./LanguageProvider";
import { interpolate } from "@/lib/i18n";
import { localizedCountryName } from "@/lib/i18n/country-names";
import AffordabilityCalculator from "./AffordabilityCalculator";

interface Props {
  readonly country: CountryHousingData;
}

/**
 * Country-specific landing page rendered at `/{country}` and
 * `/{locale}/{country}`. All copy reads from `t.country.*` so each locale
 * presents native text and Google indexes it as a real translated page.
 */
export default function CountryHome({ country }: Props) {
  const t = useDictionary();
  const { locale } = useLanguage();

  const ratio = country.medianHomePrice / country.medianHouseholdIncome;
  const ranked = [...COUNTRY_CODES]
    .map((c) => ({
      code: c,
      ratio: COUNTRIES[c].medianHomePrice / COUNTRIES[c].medianHouseholdIncome,
    }))
    .sort((a, b) => b.ratio - a.ratio);
  const rank = ranked.findIndex((r) => r.code === country.code) + 1;
  const total = ranked.length;

  const verdict =
    ratio < 4
      ? { color: "var(--accent-sage)", label: t.country.verdictAffordable }
      : ratio < 6
        ? { color: "var(--accent-periwinkle)", label: t.country.verdictStretch }
        : ratio < 10
          ? { color: "var(--accent-amber)", label: t.country.verdictUnaffordable }
          : { color: "var(--accent-rose)", label: t.country.verdictOutOfReach };

  const localeName = localizedCountryName(country.code, locale, country.name);

  const histSeries = HISTORICAL_PRICE_TO_INCOME[country.code] ?? [];
  const oldestPoint = histSeries[0] ?? null;
  const peakPoint =
    histSeries.length > 0
      ? histSeries.reduce(
          (peak, p) => (p.priceToIncome > peak.priceToIncome ? p : peak),
          histSeries[0],
        )
      : null;
  const shiftPct =
    oldestPoint && ratio > 0
      ? Math.round((oldestPoint.priceToIncome / ratio) * 100)
      : null;
  const shiftNarrative = oldestPoint && shiftPct !== null
    ? interpolate(t.country.historyShiftTemplate, {
        startYear: oldestPoint.year,
        pct: shiftPct,
      })
    : "";

  return (
    <main className="min-h-screen pt-14">
      <section className="px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-wider text-text-muted">
            {country.flag} {localeName}
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-2">
            {interpolate(t.country.headlineTemplate, { country: localeName })}
          </h1>

          <div className="mt-6 inline-flex flex-col items-center gap-3">
            <div
              className="inline-block px-4 py-1.5 rounded-full text-white text-sm font-semibold"
              style={{ background: verdict.color }}
            >
              {verdict.label}
            </div>
            <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              {interpolate(t.country.bodyTemplate, {
                country: localeName,
                price: formatCurrency(country.medianHomePrice, country.currency, locale),
                income: formatCurrency(country.medianHouseholdIncome, country.currency, locale),
                ratio: ratio.toFixed(1),
                rank,
                total,
              })}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-10 grid sm:grid-cols-3 gap-4">
          <StatCard
            label={t.country.statMedianHomeLabel}
            value={formatCurrency(country.medianHomePrice, country.currency, locale)}
            sub={interpolate(t.country.statMedianHomeSub, { anchor: country.anchorCity })}
          />
          <StatCard
            label={t.country.statMedianIncomeLabel}
            value={formatCurrency(country.medianHouseholdIncome, country.currency, locale)}
            sub={t.country.statMedianIncomeSub}
          />
          <StatCard
            label={t.country.statMortgageLabel}
            value={`${country.mortgageRatePct.toFixed(2)}%`}
            sub={interpolate(t.country.statMortgageSub, { pct: Math.round(country.minDownPaymentFraction * 100) })}
          />
        </div>

        {histSeries.length > 0 && oldestPoint && peakPoint && (
          <div className="max-w-4xl mx-auto mt-10 rounded-2xl border border-border-subtle bg-bg-card shadow-card p-6">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">
              {interpolate(t.country.historyHeading, { country: localeName })}
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {interpolate(t.country.historyBodyTemplate, {
                peakValue: peakPoint.priceToIncome.toFixed(1),
                peakYear: peakPoint.year,
                todayValue: ratio.toFixed(1),
                shift: shiftNarrative,
                oecdStart: OECD_AVERAGE[0].priceToIncome.toFixed(1),
                oecdYear: OECD_AVERAGE[0].year,
                oecdToday: OECD_AVERAGE[OECD_AVERAGE.length - 1].priceToIncome.toFixed(1),
              })}
            </p>
            <HistoricalSparkline
              series={histSeries}
              countryName={localeName}
              currentRatio={ratio}
            />
          </div>
        )}
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pt-2 pb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold mb-2 text-center">
            {interpolate(t.country.calculatorHeadingTemplate, { country: localeName })}
          </h2>
          <p className="text-text-secondary text-center max-w-2xl mx-auto leading-relaxed mb-8">
            {interpolate(t.country.calculatorSubheadingTemplate, { country: localeName })}
          </p>
          <AffordabilityCalculator initialCountry={country.code} />
        </div>
      </section>
    </main>
  );
}

function StatCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-2xl border border-border-subtle bg-bg-card shadow-card p-5">
      <div className="text-xs uppercase tracking-wider text-text-muted">{label}</div>
      <div className="font-[family-name:var(--font-heading)] text-2xl font-bold text-text-primary mt-1">
        {value}
      </div>
      <div className="text-sm text-text-muted mt-1">{sub}</div>
    </div>
  );
}

function HistoricalSparkline({
  series,
  countryName,
  currentRatio,
}: {
  series: ReadonlyArray<{ year: number; priceToIncome: number }>;
  countryName: string;
  currentRatio: number;
}) {
  if (series.length === 0) return null;
  const W = 600;
  const H = 140;
  const PAD = { top: 8, right: 8, bottom: 18, left: 28 };

  const minYear = series[0].year;
  const maxYear = series[series.length - 1].year;
  const maxV = Math.max(...series.map((p) => p.priceToIncome), currentRatio);

  const xScale = (y: number) =>
    PAD.left + ((y - minYear) / (maxYear - minYear)) * (W - PAD.left - PAD.right);
  const yScale = (v: number) =>
    PAD.top + (1 - v / (maxV * 1.1)) * (H - PAD.top - PAD.bottom);

  const path = series
    .map((p, i) => `${i === 0 ? "M" : "L"} ${xScale(p.year)} ${yScale(p.priceToIncome)}`)
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-auto mt-4"
      role="img"
      aria-label={`${countryName} price-to-income over time`}
    >
      <line x1={PAD.left} x2={W - PAD.right} y1={H - PAD.bottom} y2={H - PAD.bottom} stroke="var(--border-subtle)" strokeWidth={1} />
      <text x={PAD.left} y={H - 4} fontSize="10" fill="var(--text-muted)">{minYear}</text>
      <text x={W - PAD.right} y={H - 4} fontSize="10" textAnchor="end" fill="var(--text-muted)">{maxYear}</text>
      <path d={path} fill="none" stroke="var(--accent-periwinkle)" strokeWidth={2} />
      <circle cx={xScale(series[series.length - 1].year)} cy={yScale(series[series.length - 1].priceToIncome)} r={4} fill="var(--accent-periwinkle)" stroke="var(--bg-card)" strokeWidth={2} />
    </svg>
  );
}
