import type { LocaleCode } from "../locales";

export interface MethodologyContent {
  readonly h1: string;
  readonly intro: string;
  readonly sections: readonly { readonly heading: string; readonly body: readonly string[] }[];
  readonly sources: readonly { readonly title: string; readonly url: string; readonly note: string }[];
  readonly assumptions: { readonly heading: string; readonly body: readonly string[] };
}

const en: MethodologyContent = {
  h1: "Methodology",
  intro: "How the calculator turns your income, savings, and country into an affordable home price. Every assumption listed.",
  sections: [
    {
      heading: "1. Maximum mortgage from your income",
      body: [
        "Most lenders cap monthly mortgage + other debt obligations at 36% of gross monthly income (the front-end DTI ratio). We use that as our maximum.",
        "From the maximum monthly mortgage, we work backwards through the standard amortization formula at the country's average mortgage rate over a 30-year term to find the principal you can borrow.",
      ],
    },
    {
      heading: "2. Down payment and price",
      body: [
        "We add the country's typical minimum down payment to the principal to get the maximum home price.",
        "For example, a 5% down market like the US/UK lets you buy ~5% more home than a 30% down market like Singapore for the same income, because more of the price is leveraged debt.",
        "We do not include closing costs, stamp duty, property taxes, or insurance in the affordability calculation. Add ~3-10% on top depending on country.",
      ],
    },
    {
      heading: "3. Country medians",
      body: [
        "Median home prices come from the OECD Housing Database (Q4 2024) and BIS Selected Property Price Series. Where OECD data is missing, we use national statistics offices.",
        "Median household disposable income comes from OECD Income Distribution Database, supplemented with national stats agencies for non-OECD countries.",
        "Both numbers are national medians, so high-cost cities (London, NYC, Tokyo, Sydney) are well above their national median — sometimes 2-3×.",
      ],
    },
    {
      heading: "4. Mortgage rates",
      body: [
        "Eurozone: ECB Statistical Data Warehouse 30-year fixed average. UK: Bank of England 75% LTV 5-year fixed. US: Federal Reserve H.15 30-year fixed. Other: national central banks.",
        "Rates are Q1 2025 snapshots. They will drift; the calculator's relative comparisons hold.",
      ],
    },
    {
      heading: "5. Minimum down payments",
      body: [
        "These are typical bank policy minimums for first-time buyers, not legal floors:",
        "5% (US, UK, Canada, Denmark) — 10% (France, Germany, Belgium, Netherlands, Australia, Malaysia) — 15% (Sweden, Norway, Finland, Romania) — 20% (Spain, Portugal, Italy, Switzerland, Austria, India, Czech Republic, Hungary) — 25% (Singapore, Israel) — 30% (China, Vietnam, Saudi Arabia, Egypt, Nigeria, Turkey).",
        "Some markets allow government schemes that reduce these — e.g. Help to Buy in the UK (now ended), FHA loans in the US (3.5%), or family-guarantee schemes in Australia. The calculator uses the standard private-bank minimums.",
      ],
    },
    {
      heading: "6. Affordability verdict",
      body: [
        "We classify the country median price-to-income ratio into four buckets, following Demographia International Housing Affordability conventions:",
        "Affordable (<4×) — Stretch (4-6×) — Unaffordable (6-10×) — Out of reach (>10×).",
        "These thresholds reflect long-term historical norms. The OECD long-run average from 1990-2010 was ~4.3×. Most rich countries are now well above that.",
      ],
    },
    {
      heading: "7. Years to down payment",
      body: [
        "Down payment needed minus current savings, divided by annual savings (income × your savings rate). Linear; we do not assume returns on savings during the accumulation period.",
        "OECD median household saving rate is around 7%. Higher in Japan, Switzerland, Scandinavia; lower in the UK and Anglo countries.",
      ],
    },
  ],
  sources: [
    {
      title: "OECD Affordable Housing Database",
      url: "https://www.oecd.org/housing/data/affordable-housing-database/",
      note: "Median home prices, price-to-income, price-to-rent. CC BY 4.0.",
    },
    {
      title: "BIS Selected Property Price Series",
      url: "https://www.bis.org/statistics/pp_selected.htm",
      note: "Quarterly residential property prices for 60+ countries.",
    },
    {
      title: "OECD Income Distribution Database",
      url: "https://www.oecd.org/social/income-distribution-database.htm",
      note: "Median household disposable income.",
    },
    {
      title: "Federal Reserve FRED",
      url: "https://fred.stlouisfed.org/",
      note: "US house prices, mortgage rates (H.15 series). Public domain.",
    },
    {
      title: "Eurostat — Housing statistics",
      url: "https://ec.europa.eu/eurostat/web/housing-statistics",
      note: "EU house prices and rent-to-income ratios. CC BY 4.0.",
    },
    {
      title: "ECB Statistical Data Warehouse",
      url: "https://sdw.ecb.europa.eu/",
      note: "Eurozone mortgage interest rates by maturity.",
    },
    {
      title: "Bank of England",
      url: "https://www.bankofengland.co.uk/statistics",
      note: "UK fixed-rate mortgage averages by LTV band.",
    },
    {
      title: "Demographia International Housing Affordability",
      url: "http://demographia.com/dhi.pdf",
      note: "Affordability classification thresholds (median multiple).",
    },
  ],
  assumptions: {
    heading: "Key assumptions and caveats",
    body: [
      "30-year fixed-rate mortgage at country average rate (you can change the term).",
      "Lender DTI cap at 36% — lenient lenders may allow up to 43%.",
      "No closing costs, taxes, or insurance in the principal limit. Add 3-10% on top.",
      "National medians, not city. London, NYC, Tokyo, Sydney are 2-3× their national medians.",
      "Linear savings projection; no return assumed on savings during accumulation.",
      "Snapshot of Q1 2025. Rates change. Re-run the calculator periodically.",
    ],
  },
};

export const METHODOLOGY: Readonly<Record<LocaleCode, MethodologyContent>> = {
  en, es: en, de: en, fr: en, "zh-cn": en, ja: en, pt: en, it: en,
};
