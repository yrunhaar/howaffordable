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
    readonly report: string;
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
  /** Country-landing page (`/{country}`) strings. */
  readonly country: {
    readonly headlineTemplate: string;
    readonly verdictAffordable: string;
    readonly verdictStretch: string;
    readonly verdictUnaffordable: string;
    readonly verdictOutOfReach: string;
    /** "The country median home in {country} costs {price} and the median household earns {income} — a price-to-income ratio of {ratio}×. Ranked {rank} of {total} for housing cost relative to income." */
    readonly bodyTemplate: string;
    readonly statMedianHomeLabel: string;
    readonly statMedianHomeSub: string;
    readonly statMedianIncomeLabel: string;
    readonly statMedianIncomeSub: string;
    readonly statMortgageLabel: string;
    readonly statMortgageSub: string;
    readonly historyHeading: string;
    /** "Price-to-income peaked at {peakValue}× in {peakYear}. Today: {todayValue}×. {shift} The OECD average over the same period went from {oecdStart}× in {oecdYear} to {oecdToday}× today." */
    readonly historyBodyTemplate: string;
    readonly historyShiftTemplate: string;
    readonly calculatorHeadingTemplate: string;
    readonly calculatorSubheadingTemplate: string;
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
    /** A 2-3 sentence narrative interpreting personal ceiling vs country median. */
    readonly narrativeHeading: string;
    readonly narrativeBody: string;
    /** Mortgage burden chart (% of income) */
    readonly burdenHeading: string;
    readonly burdenIntro: string;
    readonly burdenComfortable: string;
    readonly burdenManageable: string;
    readonly burdenStretched: string;
    readonly burdenOverLimit: string;
    readonly burdenYouLabel: string;
    /** Historical chart */
    readonly historyHeading: string;
    readonly historyIntro: string;
    readonly historyAffordabilityShiftTemplate: string;
    /** Cross-country snapshot */
    readonly crossHeading: string;
    readonly crossIntro: string;
    readonly crossColumnCountry: string;
    readonly crossColumnAffordable: string;
    readonly crossColumnRatio: string;
    readonly crossColumnVerdict: string;
    /** Buy vs rent */
    readonly rentHeading: string;
    readonly rentIntro: string;
    readonly rentMonthlyLabel: string;
    readonly mortgageMonthlyOnMedianLabel: string;
    readonly rentBuyDiffMore: string;
    readonly rentBuyDiffLess: string;
    /** Practical takeaways */
    readonly takeawaysHeading: string;
    readonly takeawaysIntro: string;
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
  readonly report: {
    readonly title: string;
    readonly subtitle: string;
    readonly preparedFor: string;
    readonly landingTitle: string;
    readonly landingFreeBadge: string;
    readonly landingFeatureA: { readonly title: string; readonly body: string };
    readonly landingFeatureB: { readonly title: string; readonly body: string };
    readonly landingFeatureC: { readonly title: string; readonly body: string };
    readonly landingPicker: {
      readonly title: string;
      readonly subtitle: string;
      readonly countryLabel: string;
      readonly incomeLabel: string;
      readonly incomeHelp: string;
      readonly savingsLabel: string;
      readonly savingsHelp: string;
      readonly generateButton: string;
      readonly generatingButton: string;
    };
    readonly pdfPageLabel: string;
    readonly pdfFooterAttribution: string;
    readonly pdfCoverGeneratedLabel: string;
    readonly pdfYourPriceLabel: string;
    readonly pdfMaxPriceLeadIn: string;
    readonly pdfCoverNarrative: string;
    readonly pdfSection1Title: string;
    readonly pdfSection1Body: string;
    readonly pdfSection2Title: string;
    readonly pdfSection2Body: string;
    readonly pdfSection3Title: string;
    readonly pdfSection3Body: string;
    readonly pdfHistoricalTitle: string;
    readonly pdfHistoricalBody: string;
    readonly pdfHistoricalInsightTemplate: string;
    readonly pdfHistoricalNoData: string;
    readonly pdfTakeawaysTitle: string;
    readonly pdfTakeawaysIntro: string;
    readonly pdfTakeawaysAffordable: string;
    readonly pdfTakeawaysStretch: string;
    readonly pdfTakeawaysUnaffordable: string;
    readonly pdfTakeawaysOutOfReach: string;
    readonly pdfTakeawaysBuyVsRent: string;
    readonly pdfMethodologyTitle: string;
    readonly pdfMethodologyBody: string;
    readonly pdfTipTitle: string;
    readonly pdfTipBody: string;
    readonly pdfFilenameTemplate: string;
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
