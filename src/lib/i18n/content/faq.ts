import type { LocaleCode } from "../locales";

export interface FaqEntry {
  readonly question: string;
  readonly answer: readonly string[];
}

export interface FaqContent {
  readonly h1: string;
  readonly intro: string;
  readonly entries: readonly FaqEntry[];
}

const en: FaqContent = {
  h1: "Frequently asked questions",
  intro: "Short, plain answers. If you do not see your question, open an issue on GitHub.",
  entries: [
    {
      question: "Is my data sent anywhere?",
      answer: [
        "No. Everything runs in your browser. There is no backend. The site is static HTML, CSS, and JavaScript served from a CDN. No analytics, no tracking pixels, no cookies you did not opt into.",
      ],
    },
    {
      question: "Why is my country's median price so much lower than my city?",
      answer: [
        "We use national medians for cross-country comparability. London is roughly 2× the UK median, San Francisco 2.5× the US median, Sydney 1.6× the Australia median, Paris 1.8× the France median.",
        "If you live in a high-cost city, multiply the country median by 1.5-2.5× for a city-realistic figure.",
      ],
    },
    {
      question: "Why does the down payment requirement differ so much by country?",
      answer: [
        "Bank regulation, central bank macro-prudential rules, and cultural norms. Anglo countries (US, UK, Canada) developed liberal mortgage markets with very low minimums (5% or less). Continental Europe runs 10-20%. East Asia runs 25-30%, partly to cool speculative demand and partly because banks have less recourse on defaults.",
      ],
    },
    {
      question: "Should I include rent in monthly debt obligations?",
      answer: [
        "No. Lenders care about debts that follow you into the new mortgage — student loans, car loans, credit-card minimums. Rent ends when you buy, so it does not count against your debt-to-income.",
      ],
    },
    {
      question: "What is a price-to-income ratio?",
      answer: [
        "Country median home price divided by country median household income. The most-cited cross-country measure of housing affordability.",
        "Demographia's bands: under 3× is highly affordable (rare in 2025), 3-4× affordable, 4-5× moderately unaffordable, 5+× severely unaffordable. The OECD long-term average from 1990-2010 was ~4.3×.",
      ],
    },
    {
      question: "Why is housing so unaffordable now?",
      answer: [
        "Three big drivers: 1) restrictive zoning has held supply growth below household formation in most rich-country cities since 1990; 2) two decades of falling interest rates made existing homes more valuable as a financial asset; 3) housing has become a vehicle for global capital, especially in supply-constrained cities.",
        "The calculator does not solve the housing crisis. It tries to make the math visible.",
      ],
    },
    {
      question: "Should I buy or rent?",
      answer: [
        "Depends on hold period (typically 5+ years to break even), local price-to-rent ratio (under 15× rent is buy territory, over 25× is rent territory), and the opportunity cost of your down payment if invested elsewhere.",
        "We may add a buy-vs-rent calculator. For now this tool focuses on affordability, not the optimal choice.",
      ],
    },
    {
      question: "How accurate are the country numbers?",
      answer: [
        "Median prices and incomes are accurate to within a few percent for OECD countries. For non-OECD countries (Vietnam, Egypt, Nigeria) we are sometimes working from less consistent national stats and the numbers should be treated as ballpark.",
      ],
    },
    {
      question: "Does this account for property tax, insurance, maintenance?",
      answer: [
        "No, not yet. Those add 1-3% per year of the home price in most countries. Build a buffer into your max-affordable-price.",
      ],
    },
    {
      question: "What about FHA / Help-to-Buy / equivalent schemes?",
      answer: [
        "We use standard private-bank minimum down payments. Government schemes can lower these (e.g. FHA loans 3.5% in the US, prior UK Help to Buy 5%). Check the schemes available in your country.",
      ],
    },
  ],
};

export const FAQ: Readonly<Record<LocaleCode, FaqContent>> = {
  en, es: en, de: en, fr: en, "zh-cn": en, ja: en, pt: en, it: en,
};
