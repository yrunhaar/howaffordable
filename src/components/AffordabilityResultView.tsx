"use client";

import { useDictionary, useLanguage } from "./LanguageProvider";
import { GLOBAL_ANCHORS, type CountryHousingData } from "@/data/housing-data";
import { HISTORICAL_PRICE_TO_INCOME } from "@/data/historical-affordability";
import { interpolate } from "@/lib/i18n";
import { formatCurrency, formatNumber } from "@/lib/format";
import type { AffordabilityInputs, AffordabilityResult } from "@/lib/affordability";
import HistoricalChart from "./HistoricalChart";
import MortgageBurdenChart from "./MortgageBurdenChart";
import CrossCountrySnapshot from "./CrossCountrySnapshot";

interface Props {
  readonly country: CountryHousingData;
  readonly inputs: AffordabilityInputs;
  readonly result: AffordabilityResult;
  readonly onRecalculate: () => void;
}

export default function AffordabilityResultView({
  country,
  inputs,
  result,
  onRecalculate,
}: Props) {
  const t = useDictionary();
  const { locale } = useLanguage();

  const verdictColor: Record<AffordabilityResult["verdict"], string> = {
    affordable: "var(--accent-sage)",
    stretch: "var(--accent-periwinkle)",
    unaffordable: "var(--accent-amber)",
    out_of_reach: "var(--accent-rose)",
  };

  const burdenLabel =
    result.mortgageBurdenPct < 28
      ? t.result.burdenComfortable
      : result.mortgageBurdenPct < 36
      ? t.result.burdenManageable
      : result.mortgageBurdenPct < 43
      ? t.result.burdenStretched
      : t.result.burdenOverLimit;

  const monthlyRent = country.medianRentMonthly;
  const monthlyMortgage = result.monthlyMortgage;
  const rentBuyDiff = monthlyMortgage - monthlyRent;

  // Historical context — affordability shift over the country's macro
  // price-to-income ratio (NOT the user's personal ratio). Same income
  // today buys X% of what it bought in 1990 in country-median terms.
  const histSeries = HISTORICAL_PRICE_TO_INCOME[country.code] ?? [];
  const historic1990 = histSeries.find((p) => p.year <= 1995);
  const macroToday =
    histSeries.length > 0 ? histSeries[histSeries.length - 1].priceToIncome : null;
  const shiftPct =
    historic1990 && macroToday && macroToday > 0
      ? Math.round((historic1990.priceToIncome / macroToday) * 100)
      : null;

  const takeaways = buildTakeaways({
    burdenPct: result.mortgageBurdenPct,
    yearsToDown: result.yearsToDownPayment,
    minDownFrac: country.minDownPaymentFraction,
    priceToIncome: result.priceToIncomeRatio,
    maxPrice: result.maxAffordableHomePrice,
    medianPrice: country.medianHomePrice,
  });

  return (
    <section className="w-full space-y-8">
      {/* HERO */}
      <div className="rounded-2xl border border-border-subtle bg-bg-card shadow-card p-6 text-center">
        <p className="text-sm uppercase tracking-wider text-text-muted">
          {t.result.heading}
        </p>
        <p className="text-4xl md:text-5xl font-bold my-3 text-text-primary">
          {formatCurrency(result.maxAffordableHomePrice, country.currency, locale)}
        </p>
        <p className="text-text-muted">{t.result.maxPriceLabel}</p>
        <div
          className="mt-4 inline-block px-4 py-1.5 rounded-full text-white text-sm font-semibold"
          style={{ background: verdictColor[result.verdict] }}
        >
          {t.result.verdict[result.verdict]}
        </div>
      </div>

      {/* NARRATIVE */}
      <div className="rounded-2xl border border-border-subtle bg-bg-card shadow-card p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">
          {t.result.narrativeHeading}
        </h3>
        <p className="text-text-secondary leading-relaxed">{t.result.narrativeBody}</p>
      </div>

      {/* STATS GRID */}
      <div className="rounded-2xl border border-border-subtle bg-bg-card shadow-card p-6 grid sm:grid-cols-2 gap-5">
        <Stat
          label={t.result.priceToIncomeLabel}
          value={interpolate(t.result.priceToIncomeYears, {
            ratio: formatNumber(result.priceToIncomeRatio, locale),
          })}
          sub={`${formatCurrency(country.medianHomePrice, country.currency, locale)} median`}
        />
        <Stat
          label={t.result.downPaymentLabel}
          value={formatCurrency(
            country.medianHomePrice * country.minDownPaymentFraction,
            country.currency,
            locale,
          )}
          sub={`${Math.round(country.minDownPaymentFraction * 100)}% of median`}
        />
        <Stat
          label={t.result.yearsToDownPaymentLabel}
          value={
            Number.isFinite(result.yearsToDownPayment)
              ? interpolate(t.result.yearsToDownPaymentTemplate, {
                  years: formatNumber(result.yearsToDownPayment, locale),
                })
              : "—"
          }
          sub=""
        />
        <Stat
          label={t.result.mortgageMonthlyLabel}
          value={formatCurrency(result.monthlyMortgage, country.currency, locale)}
          sub={`${result.mortgageBurdenPct}% ${t.result.burdenLabel}`}
        />
      </div>

      {/* MORTGAGE BURDEN */}
      <div className="rounded-2xl border border-border-subtle bg-bg-card shadow-card p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">
          {t.result.burdenHeading}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-5">
          {t.result.burdenIntro}
        </p>
        <MortgageBurdenChart
          burdenPct={result.mortgageBurdenPct}
          youLabel={t.result.burdenYouLabel}
        />
        <p className="mt-4 text-sm text-text-secondary leading-relaxed">{burdenLabel}</p>
      </div>

      {/* COMPARE BARS */}
      <div className="rounded-2xl border border-border-subtle bg-bg-card shadow-card p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-4">
          {t.result.compareHeading}
        </h3>
        <Comparison
          label={interpolate(t.result.compareCountry, { country: country.name })}
          value={result.priceToIncomeRatio}
          color="var(--accent-periwinkle)"
        />
        <Comparison
          label={t.result.compareOECD}
          value={GLOBAL_ANCHORS.oecdAveragePriceToIncome}
          color="var(--text-muted)"
        />
        <Comparison
          label={t.result.compareHistoric}
          value={GLOBAL_ANCHORS.historicalPriceToIncome}
          color="var(--accent-sage)"
        />
      </div>

      {/* HISTORICAL CHART */}
      {histSeries.length > 0 && (
        <div className="rounded-2xl border border-border-subtle bg-bg-card shadow-card p-6">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">
            {t.result.historyHeading}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed mb-5">
            {interpolate(t.result.historyIntro, { country: country.name })}
          </p>
          <HistoricalChart countryCode={country.code} countryName={country.name} />
          {shiftPct !== null && historic1990 && (
            <p className="mt-4 text-sm text-text-secondary leading-relaxed">
              {interpolate(t.result.historyAffordabilityShiftTemplate, {
                year: historic1990.year,
                pct: `${shiftPct}%`,
              })}
            </p>
          )}
        </div>
      )}

      {/* CROSS COUNTRY */}
      <div className="rounded-2xl border border-border-subtle bg-bg-card shadow-card p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">
          {t.result.crossHeading}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-5">
          {t.result.crossIntro}
        </p>
        <CrossCountrySnapshot
          userCountry={country}
          userInputs={inputs}
          locale={locale}
          verdictLabels={t.result.verdict}
          columnCountry={t.result.crossColumnCountry}
          columnAffordable={t.result.crossColumnAffordable}
          columnRatio={t.result.crossColumnRatio}
          columnVerdict={t.result.crossColumnVerdict}
        />
      </div>

      {/* RENT VS BUY */}
      <div className="rounded-2xl border border-border-subtle bg-bg-card shadow-card p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">
          {t.result.rentHeading}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-5">
          {t.result.rentIntro}
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          <Stat
            label={t.result.rentMonthlyLabel}
            value={formatCurrency(monthlyRent, country.currency, locale)}
            sub={t.common.perMonth}
          />
          <Stat
            label={t.result.mortgageMonthlyOnMedianLabel}
            value={formatCurrency(monthlyMortgage, country.currency, locale)}
            sub={`${result.mortgageBurdenPct}% ${t.result.burdenLabel}`}
          />
        </div>
        <p className="mt-4 text-sm text-text-secondary leading-relaxed">
          {rentBuyDiff > 0
            ? interpolate(t.result.rentBuyDiffMore, {
                amount: formatCurrency(rentBuyDiff, country.currency, locale),
              })
            : interpolate(t.result.rentBuyDiffLess, {
                amount: formatCurrency(Math.abs(rentBuyDiff), country.currency, locale),
              })}
        </p>
      </div>

      {/* TAKEAWAYS */}
      <div className="rounded-2xl border border-border-subtle bg-bg-card shadow-card p-6">
        <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">
          {t.result.takeawaysHeading}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          {t.result.takeawaysIntro}
        </p>
        <ul className="list-disc list-inside text-text-secondary leading-relaxed space-y-2 ml-2">
          {takeaways.map((tk, i) => (
            <li key={i}>{tk}</li>
          ))}
        </ul>
      </div>

      <div className="text-center">
        <button
          type="button"
          onClick={onRecalculate}
          className="px-5 py-2 rounded-lg border border-border-subtle text-text-primary hover:border-accent-periwinkle"
        >
          ↺ {t.calculator.recalculate}
        </button>
      </div>
    </section>
  );
}

function buildTakeaways({
  burdenPct,
  yearsToDown,
  minDownFrac,
  priceToIncome,
  maxPrice,
  medianPrice,
}: {
  burdenPct: number;
  yearsToDown: number;
  minDownFrac: number;
  priceToIncome: number;
  maxPrice: number;
  medianPrice: number;
}): string[] {
  const items: string[] = [];

  if (burdenPct >= 36 && burdenPct < 43) {
    items.push(
      "Buying 10-15% below the country median price drops you back under the 36% DTI threshold and gives a real safety cushion for emergencies, repairs, and rate hikes.",
    );
  } else if (burdenPct >= 43) {
    items.push(
      "At this debt-to-income most banks will not lend. Consider a cheaper home, a larger down payment, or a longer term to bring the monthly payment under the 36% mark.",
    );
  } else if (burdenPct < 28) {
    items.push(
      "You have meaningful headroom under the 36% DTI cap. That margin is worth keeping for repairs, savings, and the inevitable rate hikes over a 30-year term.",
    );
  }

  if (priceToIncome >= 6 && priceToIncome < 10) {
    items.push(
      "A 6-10× price-to-income market is a stretched market by Demographia's classification. Your country's housing supply has not kept pace with income growth and global capital flows. Buying typically requires either family help, dual income, or accepting smaller / further-out homes.",
    );
  } else if (priceToIncome >= 10) {
    items.push(
      "Above 10× price-to-income, owning the country median is effectively out of reach without significant outside capital. Watch local rent-to-price ratios — renting may be the better long-term move depending on hold period.",
    );
  }

  if (yearsToDown > 10) {
    items.push(
      "It would take more than a decade at your current savings rate to put down a typical deposit. Worth modeling what changes with a higher savings rate, a partner's income, family help, or a different country.",
    );
  } else if (yearsToDown > 0 && yearsToDown <= 3) {
    items.push(
      "A short runway to the down payment. Once saved, the bigger constraint becomes the monthly burden, not the deposit.",
    );
  }

  if (minDownFrac <= 0.05) {
    items.push(
      "This is a low-down-payment market — banks lend up to 95-100% LTV on first homes. Easy to enter, but a small price drop can put you in negative equity. Keep an emergency buffer separate from the down payment.",
    );
  } else if (minDownFrac >= 0.20) {
    items.push(
      "A high-down-payment market — banks expect 20%+ equity. Higher entry barrier but mortgages are typically more conservative, and price corrections hit equity less hard.",
    );
  }

  if (maxPrice > 0 && medianPrice > 0) {
    const gap = (maxPrice - medianPrice) / medianPrice;
    if (gap > 0.15) {
      items.push(
        "Your borrowing ceiling sits comfortably above the country median. Likely options include nicer neighborhoods, more space, or buying with significant headroom for rate moves.",
      );
    } else if (gap < -0.10) {
      items.push(
        "Your borrowing ceiling is meaningfully below the country median. Plan around smaller / further-out homes, or model what changes with a partner's income or a longer mortgage term.",
      );
    }
  }

  return items;
}

function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider text-text-muted">{label}</div>
      <div className="text-2xl font-semibold text-text-primary mt-1">{value}</div>
      {sub && <div className="text-sm text-text-muted mt-0.5">{sub}</div>}
    </div>
  );
}

function Comparison({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  const max = 12;
  const pct = Math.min(100, (value / max) * 100);
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-0.5">
        <span className="text-text-primary">{label}</span>
        <span className="text-text-muted">{value.toFixed(1)}× income</span>
      </div>
      <div className="h-3 rounded-full bg-border-subtle overflow-hidden">
        <div className="h-full" style={{ width: `${pct}%`, background: color }} />
      </div>
    </div>
  );
}
