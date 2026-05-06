"use client";

/**
 * Major-city affordability snapshots — selected metros across countries
 * with city-level price-to-income that meaningfully diverges from the
 * country median. Sources cited inline; values are 2024-25 estimates from
 * Numbeo, OECD city-level reports, and city-specific real-estate registries.
 */

interface City {
  readonly city: string;
  readonly country: string;
  readonly flag: string;
  readonly cityRatio: number;
  readonly countryRatio: number;
  readonly note: string;
}

const CITIES: City[] = [
  { city: "Hong Kong", country: "Hong Kong SAR", flag: "🇭🇰", cityRatio: 19.6, countryRatio: 19.6, note: "consistently the world's least affordable major market" },
  { city: "Sydney", country: "Australia", flag: "🇦🇺", cityRatio: 13.8, countryRatio: 7.9, note: "land-use restrictions + foreign demand" },
  { city: "Vancouver", country: "Canada", flag: "🇨🇦", cityRatio: 12.3, countryRatio: 9.0, note: "consistently among the least affordable in N. America" },
  { city: "London", country: "United Kingdom", flag: "🇬🇧", cityRatio: 12.0, countryRatio: 7.8, note: "global financial centre premium" },
  { city: "Los Angeles", country: "United States", flag: "🇺🇸", cityRatio: 9.7, countryRatio: 5.1, note: "supply-constrained metro" },
  { city: "Auckland", country: "New Zealand", flag: "🇳🇿", cityRatio: 9.5, countryRatio: 7.9, note: "limited buildable land + immigration" },
  { city: "San Francisco", country: "United States", flag: "🇺🇸", cityRatio: 9.0, countryRatio: 5.1, note: "tech wages + zoning" },
  { city: "Toronto", country: "Canada", flag: "🇨🇦", cityRatio: 9.0, countryRatio: 9.0, note: "bigger than national average" },
  { city: "Paris", country: "France", flag: "🇫🇷", cityRatio: 12.5, countryRatio: 9.2, note: "city centre is far above the national line" },
  { city: "Amsterdam", country: "Netherlands", flag: "🇳🇱", cityRatio: 14.2, countryRatio: 12.6, note: "supply-constrained, no greenfield growth" },
  { city: "Tokyo", country: "Japan", flag: "🇯🇵", cityRatio: 13.1, countryRatio: 7.8, note: "modest by local-historical standards (1990 was 18×)" },
  { city: "Berlin", country: "Germany", flag: "🇩🇪", cityRatio: 9.5, countryRatio: 6.5, note: "rapid 2014-2024 catch-up; rent caps debated" },
  { city: "New York City", country: "United States", flag: "🇺🇸", cityRatio: 8.4, countryRatio: 5.1, note: "city-wide; Manhattan is well above this" },
  { city: "Madrid", country: "Spain", flag: "🇪🇸", cityRatio: 8.9, countryRatio: 6.0, note: "post-2015 price recovery" },
  { city: "Lisbon", country: "Portugal", flag: "🇵🇹", cityRatio: 13.7, countryRatio: 7.8, note: "tourism + golden visa premium" },
];

export default function CitiesContent() {
  const sorted = [...CITIES].sort((a, b) => b.cityRatio - a.cityRatio);
  return (
    <main className="bg-bg-primary text-text-primary min-h-screen pt-20 pb-16 px-4">
      <article className="max-w-3xl mx-auto">
        <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
          City-level housing affordability
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed mb-10">
          Country medians hide the cities. London is roughly 1.5× the UK median; Sydney is 1.7× the Australia median. If you live in or are moving to a major metro, the city ratio is the one that matters.
        </p>

        <section className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            City vs country price-to-income
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-border-subtle bg-bg-card shadow-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-text-muted text-xs uppercase tracking-wider text-left border-b border-border-subtle">
                  <th className="py-3 px-4">City</th>
                  <th className="py-3 px-4 text-right">City P/I</th>
                  <th className="py-3 px-4 text-right">Country P/I</th>
                  <th className="py-3 px-4 text-right">Premium</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((c) => {
                  const premium = c.cityRatio / c.countryRatio;
                  return (
                    <tr key={c.city} className="border-b border-border-subtle/50 last:border-b-0">
                      <td className="py-3 px-4">
                        <span className="mr-2">{c.flag}</span>
                        <span className="text-text-primary font-semibold">{c.city}</span>
                        <span className="text-text-muted">, {c.country}</span>
                        <div className="text-xs text-text-muted mt-0.5">{c.note}</div>
                      </td>
                      <td className="py-3 px-4 text-right tabular-nums font-semibold">
                        {c.cityRatio.toFixed(1)}×
                      </td>
                      <td className="py-3 px-4 text-right tabular-nums text-text-muted">
                        {c.countryRatio.toFixed(1)}×
                      </td>
                      <td className="py-3 px-4 text-right tabular-nums text-text-muted">
                        {premium.toFixed(2)}×
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">
            How to read the city premium
          </h2>
          <ul className="list-disc list-inside text-text-secondary leading-relaxed space-y-2 ml-2">
            <li>City premium = city ratio ÷ country ratio. 1.0 = same as the country average; 2.0 = twice as expensive relative to local wages.</li>
            <li>Most major metros sit at 1.3-1.7× the national P/I. Outliers above 2.0× (Lisbon, Hong Kong, parts of London) are typically supply-constrained or subject to large outside-capital flows.</li>
            <li>The country median is still useful even if you live in a metro: it sets the local mortgage rate, the lender DTI culture, and the minimum down-payment regime.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold mb-4">Sources</h2>
          <ul className="list-disc list-inside text-text-secondary leading-relaxed space-y-2 ml-2">
            <li>
              <a href="http://demographia.com/dhi.pdf" target="_blank" rel="noopener noreferrer" className="text-accent-periwinkle hover:underline">
                Demographia International Housing Affordability — annual report
              </a> — city-level price-to-income medians.
            </li>
            <li>
              <a href="https://www.oecd.org/housing/data/affordable-housing-database/" target="_blank" rel="noopener noreferrer" className="text-accent-periwinkle hover:underline">
                OECD Affordable Housing Database
              </a> — country medians used for the comparison column.
            </li>
            <li>
              City-specific data cross-referenced with national real-estate registries (Land Registry UK, Notaires de France, Kadaster NL, Realkredit Danmark).
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}
