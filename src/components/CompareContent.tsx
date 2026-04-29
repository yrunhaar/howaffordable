"use client";

import { useMemo, useState } from "react";
import { useDictionary, useLanguage } from "./LanguageProvider";
import { COUNTRIES, COUNTRY_CODES, type CountryCode } from "@/data/housing-data";
import { formatCurrency, formatNumber } from "@/lib/format";

const DEFAULT_PICKS: CountryCode[] = ["US", "GB", "DE", "FR", "JP", "CA"];

export default function CompareContent() {
  const t = useDictionary();
  const { locale } = useLanguage();
  const [picks, setPicks] = useState<CountryCode[]>(DEFAULT_PICKS);

  const sorted = useMemo(
    () =>
      [...COUNTRY_CODES].sort((a, b) => COUNTRIES[a].name.localeCompare(COUNTRIES[b].name)),
    [],
  );

  const removeCountry = (code: CountryCode) => setPicks((p) => p.filter((c) => c !== code));
  const addCountry = (code: string) => {
    if (code in COUNTRIES) {
      const c = code as CountryCode;
      if (!picks.includes(c)) setPicks([...picks, c]);
    }
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-4xl mb-3">Compare countries</h1>
        <p className="text-lg text-[var(--muted)]">
          Pick countries side-by-side. Median home price, median household income,
          and the resulting price-to-income ratio.
        </p>
      </header>

      <div className="card mb-6 flex flex-wrap items-center gap-2">
        {picks.map((code) => (
          <button
            key={code}
            type="button"
            onClick={() => removeCountry(code)}
            aria-label={`Remove ${COUNTRIES[code].name}`}
            className="inline-flex items-center gap-1 rounded-full border border-[var(--border)] px-3 py-1 text-sm hover:border-[var(--accent)]"
          >
            <span>{COUNTRIES[code].flag}</span>
            <span>{COUNTRIES[code].name}</span>
            <span className="text-[var(--muted)]">×</span>
          </button>
        ))}
        <select
          value=""
          onChange={(e) => {
            if (e.target.value) addCountry(e.target.value);
            e.currentTarget.value = "";
          }}
          className="px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--card)] text-sm text-[var(--muted)]"
        >
          <option value="">+ Add country</option>
          {sorted.filter((c) => !picks.includes(c)).map((code) => (
            <option key={code} value={code}>
              {COUNTRIES[code].flag} {COUNTRIES[code].name}
            </option>
          ))}
        </select>
      </div>

      <div className="card overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-[var(--muted)] text-xs uppercase tracking-wider text-left border-b border-[var(--border)]">
              <th className="py-2 pr-3">Country</th>
              <th className="py-2 px-3 text-right">Median home</th>
              <th className="py-2 px-3 text-right">Median income</th>
              <th className="py-2 px-3 text-right">Price-to-income</th>
              <th className="py-2 pl-3 text-right">Mortgage rate</th>
            </tr>
          </thead>
          <tbody>
            {picks
              .map((code) => COUNTRIES[code])
              .sort(
                (a, b) =>
                  b.medianHomePrice / b.medianHouseholdIncome -
                  a.medianHomePrice / a.medianHouseholdIncome,
              )
              .map((c) => {
                const ratio = c.medianHomePrice / c.medianHouseholdIncome;
                return (
                  <tr key={c.code} className="border-b border-[var(--border)]/50">
                    <td className="py-3 pr-3">
                      <span className="mr-2">{c.flag}</span>
                      <span className="text-[var(--fg)]">{c.name}</span>
                    </td>
                    <td className="py-3 px-3 text-right text-[var(--fg)] font-semibold">
                      {formatCurrency(c.medianHomePrice, c.currency, locale)}
                    </td>
                    <td className="py-3 px-3 text-right text-[var(--muted)]">
                      {formatCurrency(c.medianHouseholdIncome, c.currency, locale)}
                    </td>
                    <td className="py-3 px-3 text-right">
                      <span className="font-semibold text-[var(--accent)]">{formatNumber(ratio, locale)}×</span>
                    </td>
                    <td className="py-3 pl-3 text-right text-[var(--muted)]">
                      {c.mortgageRatePct.toFixed(2)}%
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-xs text-[var(--muted)]">
        Data: OECD Housing Database (Q4 2024), BIS Selected Property Price Series, national central banks.
        Country medians, not city. London / Paris / Tokyo / Sydney are 1.5-2.5× their national medians.
      </p>
    </article>
  );
}
