import type { LocaleCode } from "../locales";

export interface AboutContent {
  readonly h1: string;
  readonly intro: string;
  readonly howItWorks: { readonly heading: string; readonly body: readonly string[] };
  readonly why: { readonly heading: string; readonly body: readonly string[] };
  readonly limits: { readonly heading: string; readonly body: readonly string[] };
  readonly contact: { readonly heading: string; readonly body: string };
}

const en: AboutContent = {
  h1: "About canIaffordahouse.org",
  intro:
    "A free, open tool that takes your income and savings and tells you what kind of home that buys in your country, how affordability has changed since 1990, and where in the world the same paycheck buys more roof. No login. No tracking. Static pages, all data baked at build time.",
  howItWorks: {
    heading: "How it works",
    body: [
      "Enter your annual after-tax household income, your savings, your existing monthly debt, and we run a standard lender debt-to-income test.",
      "We use country-typical mortgage rates from central banks (ECB, Federal Reserve, Bank of England, etc.) and country-typical minimum down-payment fractions (5% in Anglo markets, 20-30% in much of Asia and southern Europe).",
      "The price-to-income ratio is the country median home price divided by the country median household income, sourced from the OECD Housing Database and BIS property price series.",
      "Country comparisons let you take the same income and see how far it goes elsewhere — useful if you are considering moving, or just curious where the housing markets are most distorted.",
    ],
  },
  why: {
    heading: "Why this exists",
    body: [
      "Housing affordability is the most-talked-about, least-quantified topic in personal finance for a generation that came of age post-2008.",
      "Most online affordability calculators are run by mortgage brokers. Their incentive is to tell you that you can afford more than you actually can. We have no such incentive — this is open source and runs in your browser.",
      "We also show the long-term trajectory. The same multiple of income that bought a house in 1990 buys a small flat in 2025. That is not your fault, but knowing it helps.",
    ],
  },
  limits: {
    heading: "What this is not",
    body: [
      "Not financial advice. The lender debt-to-income limit we apply (36%) is a rough industry default — actual limits vary by lender, loan type, and credit profile.",
      "National medians hide huge city premiums. London is much higher than the UK median; Tokyo is much higher than the Japan median.",
      "Owning is not always better than renting. The math on that depends on hold period, opportunity cost of the down payment, and local rent-to-price ratio. We may add a rent-vs-buy calculator later.",
    ],
  },
  contact: {
    heading: "Who made this",
    body:
      "Yohan Runhaar (yohanrunhaar.com), with help from open data communities. Same family as howpoorami.org and mycarbonfootprint.org.",
  },
};

export const ABOUT: Readonly<Record<LocaleCode, AboutContent>> = {
  en, es: en, de: en, fr: en, "zh-cn": en, ja: en, pt: en, it: en,
};
