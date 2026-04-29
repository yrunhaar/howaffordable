"use client";

import { COUNTRIES, type CountryCode } from "@/data/housing-data";

const COUNTRIES_TO_SHOW: CountryCode[] = [
  "US", "CA", "GB", "DE", "FR", "IT", "ES", "NL", "BE", "CH", "SE", "NO",
  "AT", "IE", "PT", "PL", "AU", "NZ", "JP", "KR", "SG", "MX", "BR", "ZA",
];

interface Row {
  readonly code: CountryCode;
  readonly name: string;
  readonly flag: string;
  readonly currency: string;
  readonly priceToRent: number; // home price / annual rent
  readonly verdict: "buy" | "neutral" | "rent";
  readonly mortgageMonthly: number;
  readonly rentMonthly: number;
}

function buildRows(): Row[] {
  return COUNTRIES_TO_SHOW.map((code) => {
    const c = COUNTRIES[code];
    const annualRent = c.medianRentMonthly * 12;
    const priceToRent = annualRent > 0 ? c.medianHomePrice / annualRent : 0;
    // 30-year amortization at country mortgage rate, 100% loan-to-value for
    // this analysis — point is the comparison shape, not the user's actual
    // mortgage payment.
    const monthlyRate = c.mortgageRatePct / 100 / 12;
    const months = 360;
    const mortgageMonthly =
      monthlyRate === 0
        ? c.medianHomePrice / months
        : (c.medianHomePrice * monthlyRate) /
          (1 - Math.pow(1 + monthlyRate, -months));
    const verdict: Row["verdict"] =
      priceToRent < 18 ? "buy" : priceToRent > 25 ? "rent" : "neutral";
    return {
      code,
      name: c.name,
      flag: c.flag,
      currency: c.currency,
      priceToRent,
      verdict,
      mortgageMonthly: Math.round(mortgageMonthly),
      rentMonthly: c.medianRentMonthly,
    };
  }).sort((a, b) => a.priceToRent - b.priceToRent);
}

export default function RentVsBuyContent() {
  const rows = buildRows();

  return (
    <main className="bg-bg-primary text-text-primary min-h-screen pt-20 pb-16 px-4">
      <article className="max-w-3xl mx-auto">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
          Rent vs buy, by country
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed mb-10">
          Buying is not always better. The price-to-rent ratio (median home
          price ÷ annual rent) tells you which way the market leans. Below 15:
          buying clearly beats renting. Above 25: renting clearly beats buying.
          15-25 is the gray zone where it depends on your hold period.
        </p>

        <section className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            How to read price-to-rent
          </h2>
          <ul className="list-disc list-inside text-text-secondary leading-relaxed space-y-2 ml-2">
            <li>
              <strong className="text-accent-sage">&lt; 15× annual rent</strong>:
              Buying typically wins on a 5+ year hold. The mortgage payment is
              close to the rent payment, so equity build offsets the down
              payment opportunity cost.
            </li>
            <li>
              <strong className="text-accent-periwinkle">15-20×</strong>: Buying
              edges renting on long holds (10+ years). Below 5 years, renting
              usually wins after closing costs and stamp duty.
            </li>
            <li>
              <strong className="text-accent-amber">20-25×</strong>: Coin flip.
              Buying needs significant price growth or a 10+ year hold to beat
              renting + investing the down payment.
            </li>
            <li>
              <strong className="text-accent-rose">&gt; 25× annual rent</strong>:
              Renting clearly beats buying. The mortgage on the median home is
              far higher than rent, and equity build is slow.
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            Country price-to-rent ratios
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-border-subtle bg-bg-card shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-text-muted text-xs uppercase tracking-wider text-left border-b border-border-subtle">
                  <th className="py-3 px-4">Country</th>
                  <th className="py-3 px-4 text-right">Median rent (mo)</th>
                  <th className="py-3 px-4 text-right">Mortgage on median</th>
                  <th className="py-3 px-4 text-right">Price-to-rent</th>
                  <th className="py-3 px-4 text-right">Lean</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr
                    key={r.code}
                    className="border-b border-border-subtle/50 last:border-b-0"
                  >
                    <td className="py-3 px-4">
                      <span className="mr-2">{r.flag}</span>
                      <span className="text-text-primary">{r.name}</span>
                    </td>
                    <td className="py-3 px-4 text-right tabular-nums text-text-muted">
                      {r.rentMonthly.toLocaleString()} {r.currency}
                    </td>
                    <td className="py-3 px-4 text-right tabular-nums text-text-muted">
                      {r.mortgageMonthly.toLocaleString()} {r.currency}
                    </td>
                    <td className="py-3 px-4 text-right tabular-nums font-semibold">
                      {r.priceToRent.toFixed(1)}×
                    </td>
                    <td className="py-3 px-4 text-right">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-white text-xs font-semibold ${
                          r.verdict === "buy"
                            ? "bg-accent-sage"
                            : r.verdict === "rent"
                              ? "bg-accent-rose"
                              : "bg-accent-periwinkle"
                        }`}
                      >
                        {r.verdict === "buy" ? "Buy leans win" : r.verdict === "rent" ? "Rent leans win" : "Neutral"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            What this calculation does — and doesn&apos;t — capture
          </h2>
          <ul className="list-disc list-inside text-text-secondary leading-relaxed space-y-2 ml-2">
            <li>
              Price-to-rent is a market signal, not a personal one. Your
              specific apartment may have a very different ratio.
            </li>
            <li>
              The mortgage column above is the full payment on the median home
              with the country&apos;s average mortgage rate. Closing costs,
              property taxes, maintenance, insurance add 1–3% per year of the
              home price on top.
            </li>
            <li>
              Equity build matters: each month you pay mortgage, part goes to
              principal. After 10 years you own meaningful equity. That offsets
              the gap between mortgage and rent — but not always enough.
            </li>
            <li>
              Hold period is the most underrated input. Below 3 years, almost
              nowhere makes financial sense to buy. Above 10 years, even
              expensive markets can work if local wages keep up.
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
              </a>{" "}
              — median home prices and median rents.
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
