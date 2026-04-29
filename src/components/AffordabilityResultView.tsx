"use client";

import { useDictionary, useLanguage } from "./LanguageProvider";
import { GLOBAL_ANCHORS, type CountryHousingData } from "@/data/housing-data";
import { interpolate } from "@/lib/i18n";
import { formatCurrency, formatNumber } from "@/lib/format";
import type { AffordabilityInputs, AffordabilityResult } from "@/lib/affordability";

interface Props {
  readonly country: CountryHousingData;
  readonly inputs: AffordabilityInputs;
  readonly result: AffordabilityResult;
  readonly onRecalculate: () => void;
}

export default function AffordabilityResultView({ country, result, onRecalculate }: Props) {
  const t = useDictionary();
  const { locale } = useLanguage();

  const verdictColor: Record<AffordabilityResult["verdict"], string> = {
    affordable: "var(--accent-sage)",
    stretch: "var(--accent-periwinkle)",
    unaffordable: "var(--accent-amber)",
    out_of_reach: "var(--accent-rose)",
  };

  return (
    <section className="max-w-3xl mx-auto px-4 mt-10 space-y-8">
      <div className="rounded-2xl border border-border-subtle bg-bg-card shadow-card p-6 text-center">
        <p className="text-sm uppercase tracking-wider text-text-muted">{t.result.heading}</p>
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

      <div className="rounded-2xl border border-border-subtle bg-bg-card shadow-card p-6 grid sm:grid-cols-2 gap-5">
        <Stat
          label={t.result.priceToIncomeLabel}
          value={interpolate(t.result.priceToIncomeYears, { ratio: formatNumber(result.priceToIncomeRatio, locale) })}
          sub={`${formatCurrency(country.medianHomePrice, country.currency, locale)} median`}
        />
        <Stat
          label={t.result.downPaymentLabel}
          value={formatCurrency(country.medianHomePrice * country.minDownPaymentFraction, country.currency, locale)}
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

      <div className="rounded-2xl border border-border-subtle bg-bg-card shadow-card p-6">
        <h3 className="text-xl mb-4">{t.result.compareHeading}</h3>
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

function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider text-text-muted">{label}</div>
      <div className="text-2xl font-semibold text-text-primary mt-1">{value}</div>
      {sub && <div className="text-sm text-text-muted mt-0.5">{sub}</div>}
    </div>
  );
}

function Comparison({ label, value, color }: { label: string; value: number; color: string }) {
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
