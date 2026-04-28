import type { Dictionary } from "../dictionary";

export const en: Dictionary = {
  meta: {
    siteTitle: "Can I afford a house?",
    homeTitleTemplate: "Can I afford a house? | canIaffordahouse.org",
    homeDescription:
      "A free, open tool that takes your income and savings and tells you what kind of home that buys in your country, how affordability changed since 1990, and where in the world your money goes furthest.",
    homeOgTitle: "Can I afford a house?",
    homeOgDescription:
      "Real prices, real incomes, real interest rates. See your affordability score in your country and across 47 others. No login.",
  },
  nav: {
    home: "Calculator",
    compare: "Compare countries",
    methodology: "Methodology",
    faq: "FAQ",
    about: "About",
    menu: "Menu",
    close: "Close",
  },
  home: {
    headline: "Can you afford a house?",
    subheadline:
      "Income and savings in. Affordable home price, years to a down payment, and how that compares to 1990 — out.",
    chooseCountryLabel: "Where do you live?",
  },
  calculator: {
    heading: "Tell us about your finances",
    intro: "Annual numbers. We use country-typical interest rates and minimum down payments unless you change them.",
    incomeLabel: "Annual household income (after tax)",
    incomeHelp: "Combined take-home pay for everyone in the household.",
    savingsLabel: "Savings available for a down payment",
    savingsHelp: "Liquid savings only — not retirement funds.",
    debtLabel: "Existing monthly debt obligations",
    debtHelp: "Student loans, car loans, credit-card minimums. Not rent.",
    mortgageYearsLabel: "Mortgage term (years)",
    savingsRateLabel: "Savings rate (% of income/year)",
    savingsRateHelp: "How much of your income you can put toward savings each year. OECD median is around 7%.",
    seeResults: "See if I can afford it",
    recalculate: "Start over",
  },
  result: {
    heading: "Your affordability snapshot",
    maxPriceLabel: "Max home price you can afford",
    priceToIncomeLabel: "Country median home costs",
    priceToIncomeYears: "{ratio}× your annual income",
    verdict: {
      affordable: "Affordable: median home is under 4× income",
      stretch: "A stretch: median home is 4-6× income",
      unaffordable: "Unaffordable: median home is 6-10× income",
      out_of_reach: "Out of reach: median home is over 10× income",
    },
    downPaymentLabel: "Minimum down payment for the median",
    yearsToDownPaymentLabel: "Years to save the down payment",
    yearsToDownPaymentTemplate: "{years} years at your current savings rate",
    mortgageMonthlyLabel: "Monthly mortgage on the median",
    burdenLabel: "% of net monthly income",
    compareHeading: "How it compares",
    compareCountry: "Median home in {country}",
    compareOECD: "OECD average price-to-income",
    compareHistoric: "Long-term historical average (1990-2010)",
  },
  chart: {
    historicalHeading: "Price-to-income since 1990",
    historicalSubtitle: "{country} versus the OECD average",
    currentLabel: "Today",
  },
  cta: {
    support: {
      heading: "Support this project",
      body:
        "Free, open, no ads, no tracking. If it helped, a small tip lets me keep building open educational tools.",
      ctaLabel: "Tip on Ko-fi",
    },
    furtherReading: {
      heading: "Further reading",
      body:
        "Books that shaped this calculator. Buying through Bookshop.org sends a share to local independent bookshops.",
      ctaLabel: "See the reading list",
      disclosure: "Bookshop affiliate link.",
    },
    sister: {
      heading: "Sister projects",
      body: "Same design, different question.",
      howpoorami: "How poor am I?",
      mycarbonfootprint: "How big is my carbon footprint?",
    },
  },
  footer: {
    tagline: "Open data, real numbers, no tracking.",
    source: "Data sources",
    license: "License",
    madeBy: "Made by Yohan Runhaar",
  },
  common: {
    perYear: "per year",
    perMonth: "per month",
    years: "years",
    loading: "Loading...",
    errorTitle: "Something went wrong",
    errorBody: "Refresh the page. If it keeps happening, please open an issue on GitHub.",
  },
};
