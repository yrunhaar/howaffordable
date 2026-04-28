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
    affordable: "var(--good)",
    stretch: "var(--accent)",
    unaffordable: "var(--warn)",
    out_of_reach: "var(--over)",
  };

  return (
    <section className="max-w-3xl mx-auto px-4 mt-10 space-y-8">
      <div className="card text-center">
        <p className="text-sm uppercase tracking-wider text-[var(--muted)]">{t.result.heading}</p>
        <p className="text-4xl md:text-5xl font-bold my-3 text-[var(--fg)]">
          {formatCurrency(result.maxAffordableHomePrice, country.currency, locale)}
        </p>
        <p className="text-[var(--muted)]">{t.result.maxPriceLabel}</p>
        <div
          className="mt-4 inline-block px-4 py-1.5 rounded-full text-white text-sm font-semibold"
          style={{ background: verdictColor[result.verdict] }}
        >
          {t.result.verdict[result.verdict]}
        </div>
      </div>

      <div className="card grid sm:grid-cols-2 gap-5">
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

      <div className="card">
        <h3 className="text-xl mb-4">{t.result.compareHeading}</h3>
        <Comparison
          label={interpolate(t.result.compareCountry, { country: country.name })}
          value={result.priceToIncomeRatio}
          color="var(--accent)"
        />
        <Comparison
          label={t.result.compareOECD}
          value={GLOBAL_ANCHORS.oecdAveragePriceToIncome}
          color="var(--muted)"
        />
        <Comparison
          label={t.result.compareHistoric}
          value={GLOBAL_ANCHORS.historicalPriceToIncome}
          color="var(--good)"
        />
      </div>

      <div className="text-center">
        <button
          type="button"
          onClick={onRecalculate}
          className="px-5 py-2 rounded-lg border border-[var(--border)] text-[var(--fg)] hover:border-[var(--accent)]"
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
      <div className="text-xs uppercase tracking-wider text-[var(--muted)]">{label}</div>
      <div className="text-2xl font-semibold text-[var(--fg)] mt-1">{value}</div>
      {sub && <div className="text-sm text-[var(--muted)] mt-0.5">{sub}</div>}
    </div>
  );
}

function Comparison({ label, value, color }: { label: string; value: number; color: string }) {
  const max = 12;
  const pct = Math.min(100, (value / max) * 100);
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-0.5">
        <span className="text-[var(--fg)]">{label}</span>
        <span className="text-[var(--muted)]">{value.toFixed(1)}× income</span>
      </div>
      <div className="h-3 rounded-full bg-[var(--border)] overflow-hidden">
        <div className="h-full" style={{ width: `${pct}%`, background: color }} />
      </div>
    </div>
  );
}
