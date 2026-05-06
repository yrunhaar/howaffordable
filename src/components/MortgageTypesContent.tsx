"use client";

interface MortgageRegime {
  readonly country: string;
  readonly flag: string;
  readonly fixedDuration: string;
  readonly typical: string;
  readonly lockin: string;
  readonly note: string;
}

const REGIMES: MortgageRegime[] = [
  {
    country: "United States",
    flag: "🇺🇸",
    fixedDuration: "30 yr fixed",
    typical: "Long-term fixed dominant",
    lockin: "Strong (no break fee)",
    note: "30-year fixed is the standard. Borrowers locked in pre-2022 at 3% have a structural advantage.",
  },
  {
    country: "Denmark",
    flag: "🇩🇰",
    fixedDuration: "30 yr fixed (covered bond)",
    typical: "Long-term fixed via covered bonds",
    lockin: "Symmetric (refinance both ways)",
    note: "Unique market: borrowers can refinance both up and down with the bond market.",
  },
  {
    country: "France",
    flag: "🇫🇷",
    fixedDuration: "20-25 yr fixed",
    typical: "Long-term fixed dominant",
    lockin: "Strong",
    note: "Conservative lending culture; debt-to-income capped at 35%.",
  },
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    fixedDuration: "2-5 yr fixed",
    typical: "Short fixed, then resets",
    lockin: "Weak (resets every 2-5 yr)",
    note: "Borrowers face full rate risk every 2-5 years. The 2022-23 rate shock hit UK households fast.",
  },
  {
    country: "Netherlands",
    flag: "🇳🇱",
    fixedDuration: "10-30 yr fixed",
    typical: "Long-term fixed dominant",
    lockin: "Strong",
    note: "Mortgage interest deductibility (being phased down) historically distorted demand.",
  },
  {
    country: "Germany",
    flag: "🇩🇪",
    fixedDuration: "10-15 yr fixed",
    typical: "Mid-term fixed",
    lockin: "Strong, then resets",
    note: "Bausparvertrag savings-then-loan products are a parallel system.",
  },
  {
    country: "Spain / Italy / Portugal",
    flag: "🇪🇺",
    fixedDuration: "Variable (Euribor-linked)",
    typical: "Variable historically dominant; fixed gaining share post-2022",
    lockin: "Weak",
    note: "Variable-rate borrowers carry the rate risk directly.",
  },
  {
    country: "Australia",
    flag: "🇦🇺",
    fixedDuration: "1-3 yr fixed; mostly variable",
    typical: "Variable dominant",
    lockin: "Weak",
    note: "Most household debt is variable-rate. Cash rate transmits to mortgage rates within months.",
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    fixedDuration: "5 yr fixed (renewable)",
    typical: "Short fixed (5 yr cycle)",
    lockin: "Medium",
    note: "Borrowers re-qualify at renewal; rate shocks transmit on a ~5-year lag.",
  },
  {
    country: "Japan",
    flag: "🇯🇵",
    fixedDuration: "Mostly variable",
    typical: "Variable dominant in recent decade",
    lockin: "Weak",
    note: "BoJ rate normalization in 2024-25 means variable holders face new rate risk.",
  },
];

export default function MortgageTypesContent() {
  return (
    <main className="bg-bg-primary text-text-primary min-h-screen pt-20 pb-16 px-4">
      <article className="max-w-3xl mx-auto">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
          Mortgage types around the world
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed mb-10">
          The same monthly payment can hide very different rate risk. A 30-year fixed in the US protects you from rate hikes for life. A UK 2-year fixed exposes you every two years. Here&apos;s the regime in each major market.
        </p>

        <section className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            Mortgage regime by country
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-border-subtle bg-bg-card shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-text-muted text-xs uppercase tracking-wider text-left border-b border-border-subtle">
                  <th className="py-3 px-4">Country</th>
                  <th className="py-3 px-4">Typical fix</th>
                  <th className="py-3 px-4">Rate-risk lock-in</th>
                </tr>
              </thead>
              <tbody>
                {REGIMES.map((r) => (
                  <tr key={r.country} className="border-b border-border-subtle/50 last:border-b-0">
                    <td className="py-3 px-4">
                      <span className="mr-2">{r.flag}</span>
                      <span className="text-text-primary font-semibold">{r.country}</span>
                      <div className="text-xs text-text-muted mt-0.5">{r.note}</div>
                    </td>
                    <td className="py-3 px-4 text-text-primary">{r.fixedDuration}</td>
                    <td className="py-3 px-4 text-text-primary">{r.lockin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            What the regime means for affordability
          </h2>
          <ul className="list-disc list-inside text-text-secondary leading-relaxed space-y-2 ml-2">
            <li>
              <strong className="text-text-primary">Long-fixed markets</strong> (US, France, NL, Denmark): rate shocks transmit slowly. Affordability snapshots taken at one rate can persist for decades.
            </li>
            <li>
              <strong className="text-text-primary">Short-fixed markets</strong> (UK, Canada): borrowers re-qualify every few years. Today&apos;s affordability says little about what you&apos;ll qualify for at renewal.
            </li>
            <li>
              <strong className="text-text-primary">Variable-dominant markets</strong> (AU, JP, southern EU): rate hikes hit monthly bills directly. Buyers face higher real risk than the snapshot suggests.
            </li>
            <li>
              The howaffordable.org calculator uses a 30-year amortization at the country&apos;s current average rate. That&apos;s a reasonable headline but does not capture renewal/reset risk in short-fix markets.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources</h2>
          <ul className="list-disc list-inside text-text-secondary leading-relaxed space-y-2 ml-2">
            <li>
              <a href="https://www.imf.org/en/Publications/GFSR/Issues/2024/04/16/global-financial-stability-report-april-2024" target="_blank" rel="noopener noreferrer" className="text-accent-periwinkle hover:underline">
                IMF Global Financial Stability Report (April 2024)
              </a> — chapter on housing markets across regimes.
            </li>
            <li>
              <a href="https://www.bis.org/publ/work864.htm" target="_blank" rel="noopener noreferrer" className="text-accent-periwinkle hover:underline">
                BIS Working Paper No 864 — house price expectations
              </a>
            </li>
            <li>National central bank publications used for typical fixed durations.</li>
          </ul>
        </section>
      </article>
    </main>
  );
}
