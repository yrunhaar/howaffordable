"use client";

import { useDictionary } from "./LanguageProvider";
import AffordabilityCalculator from "./AffordabilityCalculator";
import { GLOBAL_ANCHORS, type CountryCode } from "@/data/housing-data";

interface Props {
  readonly initialCountry: CountryCode;
}

export default function HomeClient({ initialCountry }: Props) {
  const t = useDictionary();
  return (
    <>
      <section className="max-w-3xl mx-auto px-4 pt-12 md:pt-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">{t.home.headline}</h1>
        <p className="mt-4 text-lg text-text-muted">{t.home.subheadline}</p>
        <div className="mt-6 inline-flex flex-wrap justify-center gap-2 text-xs text-text-muted">
          <span className="px-2 py-1 rounded-full bg-accent-periwinkle/15">
            🌍 OECD avg price-to-income {GLOBAL_ANCHORS.oecdAveragePriceToIncome}×
          </span>
          <span className="px-2 py-1 rounded-full bg-accent-periwinkle/15">
            📉 Historical (90-10): {GLOBAL_ANCHORS.historicalPriceToIncome}×
          </span>
        </div>
      </section>
      <AffordabilityCalculator initialCountry={initialCountry} />
    </>
  );
}
