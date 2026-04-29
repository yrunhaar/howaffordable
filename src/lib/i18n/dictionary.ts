/**
 * Dictionary shape for howaffordable.org.
 * Every locale must provide every key.
 */

export interface Dictionary {
  readonly meta: {
    readonly siteTitle: string;
    readonly homeTitleTemplate: string;
    readonly homeDescription: string;
    readonly homeOgTitle: string;
    readonly homeOgDescription: string;
  };
  readonly nav: {
    readonly home: string;
    readonly compare: string;
    readonly methodology: string;
    readonly faq: string;
    readonly about: string;
    readonly menu: string;
    readonly close: string;
  };
  readonly home: {
    readonly headline: string;
    readonly subheadline: string;
    readonly chooseCountryLabel: string;
  };
  readonly calculator: {
    readonly heading: string;
    readonly intro: string;
    readonly incomeLabel: string;
    readonly incomeHelp: string;
    readonly savingsLabel: string;
    readonly savingsHelp: string;
    readonly debtLabel: string;
    readonly debtHelp: string;
    readonly mortgageYearsLabel: string;
    readonly savingsRateLabel: string;
    readonly savingsRateHelp: string;
    readonly seeResults: string;
    readonly recalculate: string;
  };
  readonly result: {
    readonly heading: string;
    readonly maxPriceLabel: string;
    readonly priceToIncomeLabel: string;
    readonly priceToIncomeYears: string;
    readonly verdict: {
      readonly affordable: string;
      readonly stretch: string;
      readonly unaffordable: string;
      readonly out_of_reach: string;
    };
    readonly downPaymentLabel: string;
    readonly yearsToDownPaymentLabel: string;
    readonly yearsToDownPaymentTemplate: string;
    readonly mortgageMonthlyLabel: string;
    readonly burdenLabel: string;
    readonly compareHeading: string;
    readonly compareCountry: string;
    readonly compareOECD: string;
    readonly compareHistoric: string;
  };
  readonly chart: {
    readonly historicalHeading: string;
    readonly historicalSubtitle: string;
    readonly currentLabel: string;
  };
  readonly cta: {
    readonly support: { readonly heading: string; readonly body: string; readonly ctaLabel: string };
    readonly furtherReading: { readonly heading: string; readonly body: string; readonly ctaLabel: string; readonly disclosure: string };
    readonly sister: { readonly heading: string; readonly body: string; readonly howpoorami: string; readonly howgreenami: string };
  };
  readonly footer: {
    readonly tagline: string;
    readonly source: string;
    readonly license: string;
    readonly madeBy: string;
    readonly about: string;
    readonly faq: string;
    readonly methodology: string;
    readonly github: string;
    readonly support: string;
    readonly buildDateTemplate: string;
  };
  readonly common: {
    readonly perYear: string;
    readonly perMonth: string;
    readonly years: string;
    readonly loading: string;
    readonly errorTitle: string;
    readonly errorBody: string;
  };
}

export type Dict = Dictionary;

export function interpolate(
  template: string,
  vars: Readonly<Record<string, string | number>>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) => {
    if (key in vars) return String(vars[key]);
    return match;
  });
}
