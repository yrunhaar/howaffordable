# canIaffordahouse.org

Can I afford a house? An open, free, multi-language tool that takes your income and savings, then tells you what kind of home that buys in your country, how it compares to your parents' generation, and where in the world your money goes furthest.

No login. No tracking. Static pages, all data baked at build time.

## What you get

- Affordability score for the country you live in (price-to-income, years-to-down-payment, mortgage-to-net-income)
- Comparison across 30+ countries: the same income, ranked by what it buys
- Generational gap: how affordable was housing in 1990 vs 2010 vs 2025?
- Median home price, median income, and price-to-income ratio per country
- 8 languages: English, Spanish, German, French, Italian, Portuguese, Japanese, Simplified Chinese

## Data sources

- House price index and price-to-income: OECD Housing Database (CC BY 4.0)
- Quarterly residential property prices: Bank for International Settlements (BIS) Selected Property Price Series
- US house prices and rents: Federal Reserve Economic Data (FRED), public domain
- Eurozone housing prices: Eurostat (CC BY 4.0)
- Mortgage interest rates: ECB Statistical Data Warehouse, FRED, OECD

See `DATA_SOURCES.md` for the full provenance trail.

## Stack

Next.js 16, React 19, TypeScript 5, Tailwind 4, @visx for charts, jsPDF for reports. Static export, no runtime server.

## Local development

```bash
pnpm install
pnpm dev          # http://localhost:3005
pnpm build        # produces out/
pnpm test         # vitest
```

## Sister projects

Same design system, same data philosophy, different question:

- howpoorami.org - personal wealth percentiles
- mycarbonfootprint.org - your CO2 vs the world

All three by Yohan Runhaar - https://yohanrunhaar.com

## License

Code: MIT. Data is included under each upstream source's license; see `DATA_SOURCES.md`.
