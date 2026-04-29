"use client";

import {
  HISTORICAL_PRICE_TO_INCOME,
  OECD_AVERAGE,
} from "@/data/historical-affordability";
import { COUNTRIES, type CountryCode } from "@/data/housing-data";

const COUNTRIES_TO_SHOW: CountryCode[] = ["US", "GB", "CA", "AU", "DE", "FR", "NL", "JP"];
const DECADES = [1990, 2000, 2010, 2020, 2024] as const;

export default function DecadesContent() {
  const rows = COUNTRIES_TO_SHOW.map((code) => {
    const country = COUNTRIES[code];
    const series = HISTORICAL_PRICE_TO_INCOME[code] ?? [];
    const cells = DECADES.map((year) => {
      // Find the closest data point at or before the target year
      const closest = series
        .filter((p) => p.year <= year)
        .sort((a, b) => b.year - a.year)[0];
      return closest ? { year: closest.year, ratio: closest.priceToIncome } : null;
    });
    return { country, cells };
  });

  const oecdCells = DECADES.map((year) => {
    const closest = OECD_AVERAGE.filter((p) => p.year <= year).sort(
      (a, b) => b.year - a.year,
    )[0];
    return closest ? { year: closest.year, ratio: closest.priceToIncome } : null;
  });

  return (
    <main className="bg-bg-primary text-text-primary min-h-screen pt-20 pb-16 px-4">
      <article className="max-w-3xl mx-auto">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
          Housing affordability: 1990 to today
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed mb-10">
          For most of the rich world, the same income today buys a fraction of
          the home it did 35 years ago. Here&apos;s what changed, country by
          country.
        </p>

        <section className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            Price-to-income, by decade
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Country median home price divided by country median household
            income. Higher = harder to afford. The OECD long-term average from
            1990 to 2010 was around 4.3×; today most rich countries are well
            above 6×, with some past 9×.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border-subtle bg-bg-card shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-text-muted text-xs uppercase tracking-wider text-left border-b border-border-subtle">
                  <th className="py-3 px-4">Country</th>
                  {DECADES.map((d) => (
                    <th key={d} className="py-3 px-4 text-right">
                      {d}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map(({ country, cells }) => (
                  <tr
                    key={country.code}
                    className="border-b border-border-subtle/50 last:border-b-0"
                  >
                    <td className="py-3 px-4">
                      <span className="mr-2">{country.flag}</span>
                      <span className="text-text-primary">{country.name}</span>
                    </td>
                    {cells.map((cell, i) => (
                      <td
                        key={i}
                        className="py-3 px-4 text-right tabular-nums font-semibold"
                      >
                        {cell ? `${cell.ratio.toFixed(1)}×` : "—"}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t-2 border-border-subtle bg-bg-card-hover/40">
                  <td className="py-3 px-4 font-semibold text-text-muted">
                    OECD average
                  </td>
                  {oecdCells.map((cell, i) => (
                    <td
                      key={i}
                      className="py-3 px-4 text-right tabular-nums text-text-muted"
                    >
                      {cell ? `${cell.ratio.toFixed(1)}×` : "—"}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            What happened
          </h2>
          <p className="text-text-secondary leading-relaxed mb-3">
            The housing market in most rich countries has detached from local
            wages. Three big drivers:
          </p>
          <ol className="list-decimal list-inside text-text-secondary leading-relaxed space-y-2 ml-2">
            <li>
              <strong className="text-text-primary">Restrictive zoning</strong>{" "}
              kept supply growth below household formation since the 1990s in
              most rich-country cities. New homes per capita have collapsed.
            </li>
            <li>
              <strong className="text-text-primary">Falling interest rates</strong>{" "}
              from 1990 through 2021 made existing homes more valuable as a
              financial asset. Same monthly payment, much higher principal.
            </li>
            <li>
              <strong className="text-text-primary">Global capital flows</strong>{" "}
              found supply-constrained cities. London, Sydney, Vancouver,
              Amsterdam, Auckland all trade at premiums driven partly by
              non-resident demand.
            </li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            Where it eased
          </h2>
          <p className="text-text-secondary leading-relaxed">
            The US was the global outlier — a price drop after the 2008 crash
            actually reset US affordability roughly to its 1990 level by 2012,
            before climbing again. Japan&apos;s 1990 bubble peak (11.6×) was so
            extreme that even today&apos;s 7.8× is below it. Most other rich
            countries set new affordability lows in 2020–24.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            How to read this if you&apos;re trying to buy
          </h2>
          <ul className="list-disc list-inside text-text-secondary leading-relaxed space-y-2 ml-2">
            <li>
              If your country&apos;s ratio is above 6×, the median home is
              effectively a stretch for the median household. Not your fault.
            </li>
            <li>
              Family help, partner&apos;s income, and longer mortgage terms are
              now structural, not edge cases.
            </li>
            <li>
              The math today expects two earners. The 1990s math expected one.
              That difference is most of the apparent affordability collapse.
            </li>
            <li>
              Renting is not failure. In several markets — Germany, the
              Netherlands, Switzerland, Japan — long-term renting is normal and
              the price-to-rent ratio makes buying questionable.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            Sources
          </h2>
          <ul className="list-disc list-inside text-text-secondary leading-relaxed space-y-2 ml-2">
            <li>
              <a
                href="https://www.oecd.org/housing/data/affordable-housing-database/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-periwinkle hover:underline"
              >
                OECD Affordable Housing Database
              </a>
            </li>
            <li>
              <a
                href="https://www.bis.org/statistics/pp_selected.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-periwinkle hover:underline"
              >
                BIS Selected Property Price Series
              </a>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
