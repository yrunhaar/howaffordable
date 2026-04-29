"use client";

/**
 * Take the user's relative income position (their income / country median
 * income) and apply it to a fixed reference set of countries. For each,
 * compute affordability with proportional income + savings.
 *
 * This lets users see "what does my position in society buy in other
 * places?" — a fairer comparison than raw FX-converted income, since cost
 * of living and wages drift together.
 */

import {
  COUNTRIES,
  type CountryCode,
  type CountryHousingData,
} from "@/data/housing-data";
import {
  computeAffordability,
  type AffordabilityInputs,
  type AffordabilityResult,
} from "@/lib/affordability";
import { formatCurrency, formatNumber } from "@/lib/format";
import type { LocaleCode } from "@/lib/i18n";

interface Props {
  readonly userCountry: CountryHousingData;
  readonly userInputs: AffordabilityInputs;
  readonly locale: LocaleCode;
  readonly verdictLabels: {
    readonly affordable: string;
    readonly stretch: string;
    readonly unaffordable: string;
    readonly out_of_reach: string;
  };
  readonly columnCountry: string;
  readonly columnAffordable: string;
  readonly columnRatio: string;
  readonly columnVerdict: string;
}

const REFERENCE_SET: CountryCode[] = ["US", "GB", "DE", "FR", "JP", "CA", "AU", "IT", "ES", "NL"];

export default function CrossCountrySnapshot({
  userCountry,
  userInputs,
  locale,
  verdictLabels,
  columnCountry,
  columnAffordable,
  columnRatio,
  columnVerdict,
}: Props) {
  const incomeRatio = userInputs.annualIncome / userCountry.medianHouseholdIncome;
  const savingsRatio =
    userCountry.medianHomePrice > 0 ? userInputs.savings / userCountry.medianHomePrice : 0;

  // Build comparison rows: include user's own country first, then the reference set
  // (de-duplicated against the user's country).
  const otherCountries = REFERENCE_SET.filter((c) => c !== userCountry.code);
  const orderedCodes: CountryCode[] = [userCountry.code, ...otherCountries].slice(0, 8);

  const rows = orderedCodes.map((code) => {
    const c = COUNTRIES[code];
    const projectedIncome = Math.round(c.medianHouseholdIncome * incomeRatio);
    const projectedSavings = Math.round(c.medianHomePrice * savingsRatio);
    const projected: AffordabilityInputs = {
      ...userInputs,
      annualIncome: projectedIncome,
      savings: projectedSavings,
    };
    const result: AffordabilityResult = computeAffordability(projected, c);
    return {
      country: c,
      result,
      projectedIncome,
    };
  });

  const verdictColor: Record<AffordabilityResult["verdict"], string> = {
    affordable: "var(--accent-sage)",
    stretch: "var(--accent-periwinkle)",
    unaffordable: "var(--accent-amber)",
    out_of_reach: "var(--accent-rose)",
  };

  return (
    <div className="overflow-x-auto -mx-2">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-text-muted text-xs uppercase tracking-wider text-left border-b border-border-subtle">
            <th className="py-2 pr-3">{columnCountry}</th>
            <th className="py-2 px-3 text-right">{columnAffordable}</th>
            <th className="py-2 px-3 text-right">{columnRatio}</th>
            <th className="py-2 pl-3 text-right">{columnVerdict}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ country: c, result }) => (
            <tr key={c.code} className="border-b border-border-subtle/50 last:border-b-0">
              <td className="py-3 pr-3">
                <span className="mr-2">{c.flag}</span>
                <span className="text-text-primary">{c.name}</span>
              </td>
              <td className="py-3 px-3 text-right text-text-primary font-semibold">
                {formatCurrency(result.maxAffordableHomePrice, c.currency, locale)}
              </td>
              <td className="py-3 px-3 text-right text-text-muted">
                {formatNumber(result.priceToIncomeRatio, locale)}×
              </td>
              <td className="py-3 pl-3 text-right">
                <span
                  className="inline-block px-2 py-0.5 rounded-full text-white text-xs font-semibold"
                  style={{ background: verdictColor[result.verdict] }}
                >
                  {verdictLabels[result.verdict].split(":")[0]}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
