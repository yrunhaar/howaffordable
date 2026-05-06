"use client";

import { useDictionary } from "./LanguageProvider";
import { GLOBAL_ANCHORS, COUNTRIES, COUNTRY_CODES } from "@/data/housing-data";

void useDictionary;

/**
 * Compact ticker-style stat strip rendered above the calculator on /.
 * Anchors that contextualize the user's eventual price-to-income result.
 */
export default function StatisticsSection() {
  const ratios = COUNTRY_CODES.map((c) => ({
    code: c,
    name: COUNTRIES[c].name,
    ratio: COUNTRIES[c].medianHomePrice / COUNTRIES[c].medianHouseholdIncome,
  }));
  const sorted = [...ratios].sort((a, b) => b.ratio - a.ratio);
  const mostUnaffordable = sorted[0];
  const mostAffordable = sorted[sorted.length - 1];

  const cells = [
    { label: "OECD avg", value: `${GLOBAL_ANCHORS.oecdAveragePriceToIncome}×`, color: "var(--accent-periwinkle)" },
    { label: "Historical avg (90-10)", value: `${GLOBAL_ANCHORS.historicalPriceToIncome}×`, color: "var(--accent-sage)" },
    { label: "Most unaffordable", value: `${mostUnaffordable.name} ${mostUnaffordable.ratio.toFixed(1)}×`, color: "var(--accent-rose)" },
    { label: "Most affordable", value: `${mostAffordable.name} ${mostAffordable.ratio.toFixed(1)}×`, color: "var(--accent-amber)" },
  ];
  return (
    <section className="px-4 sm:px-6 lg:px-8 mt-8" aria-label="Global housing affordability">
      <div className="max-w-4xl mx-auto rounded-2xl border border-border-subtle bg-bg-card shadow-card overflow-hidden">
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {cells.map((c, i) => (
            <div
              key={c.label}
              className={`p-4 text-center ${i > 0 ? "border-l border-border-subtle/50" : ""}`}
            >
              <div className="text-[10px] uppercase tracking-wider text-text-muted">{c.label}</div>
              <div className="font-[family-name:var(--font-heading)] text-base font-bold mt-1" style={{ color: c.color }}>
                {c.value}
              </div>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-text-muted text-center pb-3">
          Country median home price / median household income.
        </p>
      </div>
    </section>
  );
}
