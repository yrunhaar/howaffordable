"use client";

import {
  COUNTRIES,
  COUNTRY_CODES,
  GLOBAL_ANCHORS,
  type CountryCode,
  type CountryHousingData,
} from "@/data/housing-data";
import {
  HISTORICAL_PRICE_TO_INCOME,
  OECD_AVERAGE,
} from "@/data/historical-affordability";
import { formatCurrency } from "@/lib/format";
import { useLanguage } from "./LanguageProvider";
import AffordabilityCalculator from "./AffordabilityCalculator";

interface Props {
  readonly country: CountryHousingData;
}

/**
 * Country-specific landing page. Used at `/{country}` and `/{locale}/{country}`.
 *
 * Above the fold: per-country headline (median home, median income,
 * price-to-income ratio, mortgage rate), affordability verdict, a 2-3
 * sentence narrative, then the calculator pre-selected for that country.
 */
export default function CountryHome({ country }: Props) {
  const { locale } = useLanguage();

  // Rank vs all countries by price-to-income (1 = most expensive)
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
      ? { color: "var(--accent-sage)", label: "Affordable by historical standards" }
      : ratio < 6
        ? { color: "var(--accent-periwinkle)", label: "A stretch — above the historical norm" }
        : ratio < 10
          ? { color: "var(--accent-amber)", label: "Unaffordable — by Demographia's classification" }
          : { color: "var(--accent-rose)", label: "Out of reach for the median household" };

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

  return (
    <main className="min-h-screen pt-14">
      <section className="px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-wider text-text-muted">
            {country.flag} {country.name}
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-2">
            Can you afford a house in {country.name}?
          </h1>

          <div className="mt-6 inline-flex flex-col items-center gap-3">
            <div
              className="inline-block px-4 py-1.5 rounded-full text-white text-sm font-semibold"
              style={{ background: verdict.color }}
            >
              {verdict.label}
            </div>
            <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              The country median home in {country.name} costs{" "}
              <strong className="text-text-primary">
                {formatCurrency(country.medianHomePrice, country.currency, locale)}
              </strong>{" "}
              and the median household earns{" "}
              <strong className="text-text-primary">
                {formatCurrency(country.medianHouseholdIncome, country.currency, locale)}
              </strong>{" "}
              — a price-to-income ratio of{" "}
              <strong className="text-text-primary">{ratio.toFixed(1)}×</strong>. Ranked{" "}
              <strong className="text-text-primary">{rank}</strong> of {total} for housing
              cost relative to income.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-10 grid sm:grid-cols-3 gap-4">
          <StatCard
            label="Median home price"
            value={formatCurrency(country.medianHomePrice, country.currency, locale)}
            sub={country.anchorCity}
          />
          <StatCard
            label="Median household income"
            value={formatCurrency(country.medianHouseholdIncome, country.currency, locale)}
            sub="after tax"
          />
          <StatCard
            label="Avg mortgage rate"
            value={`${country.mortgageRatePct.toFixed(2)}%`}
            sub={`min down ${Math.round(country.minDownPaymentFraction * 100)}%`}
          />
        </div>

        {histSeries.length > 0 && oldestPoint && peakPoint && (
          <div className="max-w-4xl mx-auto mt-10 rounded-2xl border border-border-subtle bg-bg-card shadow-card p-6">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">
              How {country.name}&apos;s housing affordability evolved
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Price-to-income peaked at{" "}
              <strong className="text-text-primary">{peakPoint.priceToIncome.toFixed(1)}×</strong>{" "}
              in {peakPoint.year}. Today: {ratio.toFixed(1)}×.
              {shiftPct !== null && (
                <>
                  {" "}If you had today&apos;s income in {oldestPoint.year}, you could have
                  afforded <strong className="text-text-primary">{shiftPct}%</strong> of today&apos;s
                  purchasing power for the country median home.
                </>
              )}{" "}
              The OECD average over the same period went from{" "}
              {OECD_AVERAGE[0].priceToIncome.toFixed(1)}× in {OECD_AVERAGE[0].year} to{" "}
              {OECD_AVERAGE[OECD_AVERAGE.length - 1].priceToIncome.toFixed(1)}× today.
            </p>
            <HistoricalSparkline
              series={histSeries}
              countryName={country.name}
              currentRatio={ratio}
            />
          </div>
        )}
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pt-2 pb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold mb-2 text-center">
            How affordable is {country.name} for you?
          </h2>
          <p className="text-text-secondary text-center max-w-2xl mx-auto leading-relaxed mb-8">
            Enter your income and savings to see your personal max-affordable price,
            years to a down payment, and how that compares to {country.name}&apos;s median.
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
      <line
        x1={PAD.left}
        x2={W - PAD.right}
        y1={H - PAD.bottom}
        y2={H - PAD.bottom}
        stroke="var(--border-subtle)"
        strokeWidth={1}
      />
      <text x={PAD.left} y={H - 4} fontSize="10" fill="var(--text-muted)">
        {minYear}
      </text>
      <text
        x={W - PAD.right}
        y={H - 4}
        fontSize="10"
        textAnchor="end"
        fill="var(--text-muted)"
      >
        {maxYear}
      </text>
      <path d={path} fill="none" stroke="var(--accent-periwinkle)" strokeWidth={2} />
      <circle
        cx={xScale(series[series.length - 1].year)}
        cy={yScale(series[series.length - 1].priceToIncome)}
        r={4}
        fill="var(--accent-periwinkle)"
        stroke="var(--bg-card)"
        strokeWidth={2}
      />
    </svg>
  );
}
