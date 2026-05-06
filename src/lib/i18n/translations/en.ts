import type { Dictionary } from "../dictionary";

export const en: Dictionary = {
  meta: {
    siteTitle: "Can I afford a house?",
    homeTitleTemplate: "Can I afford a house? | howaffordable.org",
    homeDescription:
      "A free, open tool that takes your income and savings and tells you what kind of home that buys in your country, how affordability changed since 1990, and where in the world your money goes furthest.",
    homeOgTitle: "Can I afford a house?",
    homeOgDescription:
      "Real prices, real incomes, real interest rates. See your affordability score in your country and across 47 others. No login.",
  },
  nav: {
    home: "How Affordable?",
    compare: "Compare countries",
    report: "Report",
    methodology: "Methodology",
    faq: "FAQ",
    about: "About",
    menu: "Menu",
    close: "Close",
  },
  home: {
    headline: "Can you afford a house?",
    subheadline:
      "Enter your income and savings. We tell you what kind of home that buys, how many years it takes to save the down payment, and how affordability has shifted since 1990.",
    chooseCountryLabel: "Where do you live?",
  },
  country: {
    headlineTemplate: "Can you afford a house in {country}?",
    verdictAffordable: "Affordable by historical standards",
    verdictStretch: "A stretch, above the historical norm",
    verdictUnaffordable: "Unaffordable by Demographia's classification",
    verdictOutOfReach: "Out of reach for the median household",
    bodyTemplate:
      "The country median home in {country} costs {price} and the median household earns {income}, a price-to-income ratio of {ratio}×. Ranked {rank} of {total} for housing cost relative to income.",
    statMedianHomeLabel: "Median home price",
    statMedianHomeSub: "{anchor}",
    statMedianIncomeLabel: "Median household income",
    statMedianIncomeSub: "after tax",
    statMortgageLabel: "Avg mortgage rate",
    statMortgageSub: "min down {pct}%",
    historyHeading: "How {country}'s housing affordability evolved",
    historyBodyTemplate:
      "Price-to-income peaked at {peakValue}× in {peakYear}. Today: {todayValue}×. {shift} The OECD average over the same period went from {oecdStart}× in {oecdYear} to {oecdToday}× today.",
    historyShiftTemplate:
      "If you had today's income in {startYear}, you could have afforded {pct}% of today's purchasing power for the country median home.",
    calculatorHeadingTemplate: "How affordable is {country} for you?",
    calculatorSubheadingTemplate:
      "Enter your income and savings to see your personal max-affordable price, years to a down payment, and how that compares to {country}'s median.",
  },
  calculator: {
    heading: "Tell us about your finances",
    intro: "Annual numbers. We use country-typical interest rates and minimum down payments unless you change them.",
    incomeLabel: "Annual household income (after tax)",
    incomeHelp: "Combined take-home pay for everyone in the household.",
    savingsLabel: "Savings available for a down payment",
    savingsHelp: "Liquid savings only; not retirement funds.",
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
    narrativeHeading: "What this means",
    narrativeBody: "Your max-affordable price is the lender ceiling on your income at the country's average mortgage rate, with the standard 36% debt-to-income test. The verdict band looks at the country median home price as a multiple of your income, using Demographia's affordability classification. Together they tell you both how much YOU could borrow and how the country's market sits relative to your income. When the two numbers are close, you're at the edge of the median and have little safety margin.",
    burdenHeading: "Mortgage burden vs lender thresholds",
    burdenIntro: "Most banks cap monthly mortgage at 36% of gross income. Some go to 43%. Below 28% is comfortable; above the threshold the loan gets denied or only approved with caveats.",
    burdenComfortable: "Comfortable: well below the lender DTI cap, you have headroom for repairs, savings, and rate hikes.",
    burdenManageable: "Manageable: under the 36% cap, but limited margin for emergencies.",
    burdenStretched: "Stretched: past the standard 36% cap. Some lenders allow up to 43%, but every percentage point of rate increase squeezes the budget.",
    burdenOverLimit: "Over the line: most lenders will not approve at this level. You would need a lower-priced home, more down payment, or a longer term.",
    burdenYouLabel: "You",
    historyHeading: "How affordability evolved",
    historyIntro: "Price-to-income ratio in {country} from 1990 to today. The further the line climbs, the further the same income buys.",
    historyAffordabilityShiftTemplate: "If you had the same income in {year}, you could have afforded {pct} of today's purchasing power for the country median home.",
    crossHeading: "What your relative income buys around the world",
    crossIntro: "Take your position in your country's income distribution and apply it elsewhere. Same relative income, different markets.",
    crossColumnCountry: "Country",
    crossColumnAffordable: "Max affordable",
    crossColumnRatio: "Median × your income",
    crossColumnVerdict: "Verdict",
    rentHeading: "Buy vs rent",
    rentIntro: "Monthly mortgage on the country median home, vs the country median rent.",
    rentMonthlyLabel: "Median monthly rent",
    mortgageMonthlyOnMedianLabel: "Mortgage on median home",
    rentBuyDiffMore: "Buying costs about {amount} more per month than renting at the median, but builds equity over time.",
    rentBuyDiffLess: "Buying costs about {amount} less per month than renting at the median. The buy-vs-rent calculus also depends on hold period and price growth.",
    takeawaysHeading: "What to watch for",
    takeawaysIntro: "Practical reads from your snapshot.",
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
      howgreenami: "How big is my carbon footprint?",
    },
  },
  footer: {
    tagline: "Open data, real numbers, no tracking.",
    source: "Data sources",
    license: "License",
    madeBy: "Made by Yohan Runhaar",
    about: "About",
    faq: "FAQ",
    methodology: "Methodology",
    github: "GitHub",
    support: "Buy me a coffee",
    buildDateTemplate: "Data built {date}",
  },
  report: {
    title: "Personal Housing Affordability Report",
    subtitle: "Real prices, real incomes, real interest rates — bound to your number.",
    preparedFor: "Prepared for: {country}, {date}",
    landingTitle: "Your Personal Housing Affordability Report",
    landingFreeBadge: "Free. No signup, no payment, no email required",
    landingFeatureA: {
      title: "Your max-affordable price",
      body:
        "Computed from your income and savings, the country's mortgage rate, and a standard 36% debt-to-income ceiling. Plus the gap to the country median.",
    },
    landingFeatureB: {
      title: "Country and historical context",
      body:
        "Where your country sits on the global affordability ladder, and how price-to-income evolved across decades.",
    },
    landingFeatureC: {
      title: "Fully private",
      body:
        "The PDF is built in your browser. Nothing is sent to a server. No email, no account, no tracking.",
    },
    landingPicker: {
      title: "Generate your report",
      subtitle: "Pick a country, enter your income and savings, and we'll do the rest.",
      countryLabel: "Country",
      incomeLabel: "Annual household income (after tax)",
      incomeHelp: "Combined take-home pay for everyone in the household.",
      savingsLabel: "Savings available for a down payment",
      savingsHelp: "Liquid savings only; not retirement funds.",
      generateButton: "Generate the PDF",
      generatingButton: "Generating...",
    },
    pdfPageLabel: "Page",
    pdfFooterAttribution: "howaffordable.org · Open data · No tracking",
    pdfCoverGeneratedLabel: "Generated",
    pdfYourPriceLabel: "Max home price you can afford",
    pdfMaxPriceLeadIn: "Your borrowing ceiling",
    pdfCoverNarrative:
      "Your max-affordable price is the lender ceiling on your income at the country's average mortgage rate, with a 36% DTI test. The pages that follow contextualize that number against the country median, the country's historical trajectory, and rent-vs-buy economics.",
    pdfSection1Title: "Your snapshot",
    pdfSection1Body:
      "Maximum affordable price, monthly mortgage on the country median home, the gap from your max to the country median, and years to a typical down payment at your savings rate.",
    pdfSection2Title: "Where the country sits",
    pdfSection2Body:
      "Country median home price, median household income, mortgage rate, and minimum down payment fraction.",
    pdfSection3Title: "Across countries",
    pdfSection3Body:
      "Your relative position in your country's income distribution applied to other markets — same percentile, different markets.",
    pdfHistoricalTitle: "How affordability evolved",
    pdfHistoricalBody:
      "Price-to-income ratio in your country across the period available in OECD/BIS data. Higher line means a tougher market for the median household.",
    pdfHistoricalInsightTemplate:
      "{country} price-to-income was {firstValue}× in {firstYear}. By {lastYear}: {lastValue}×. {direction} {magnitude}× over the period.",
    pdfHistoricalNoData:
      "No long-running historical series for this country. The snapshot above still applies.",
    pdfTakeawaysTitle: "What this means in practice",
    pdfTakeawaysIntro:
      "Personal reads of your snapshot, given the burden, ratio, and country regime.",
    pdfTakeawaysAffordable:
      "Your country's median home is well within reach: prices sit below 4× the median income. The remaining decisions are about where to buy and how aggressively to leverage.",
    pdfTakeawaysStretch:
      "Your country's median home is a stretch: at 4-6× income, buying typically requires either a strong down payment, a long mortgage term, or accepting a smaller / further-out home.",
    pdfTakeawaysUnaffordable:
      "Your country's median home is unaffordable by Demographia's classification: 6-10× income. Buying often requires family help, dual income, or accepting a meaningful downgrade in size or location.",
    pdfTakeawaysOutOfReach:
      "Above 10× income, owning the country median is effectively out of reach without significant outside capital. Watch local rent-to-price ratios; renting may be the better long-term move.",
    pdfTakeawaysBuyVsRent:
      "Below ~15× annual rent, buying typically beats renting on a 5+ year hold. Above ~25×, renting clearly wins. The buy-vs-rent calculus also depends on hold period and price growth, not just the ratio.",
    pdfMethodologyTitle: "Methodology",
    pdfMethodologyBody:
      "Median home prices and price-to-income from OECD Affordable Housing Database and BIS Selected Property Price Series. Mortgage rates from ECB SDW (eurozone), Federal Reserve H.15 (US), Bank of England (UK), and national central banks elsewhere. Demographia bands used for the affordability classification. Computation runs entirely client-side; nothing is sent to a server.",
    pdfTipTitle: "Like this report?",
    pdfTipBody:
      "It's free and ad-free. If it's useful, a small Ko-fi tip lets me keep building open educational tools.",
    pdfFilenameTemplate: "howaffordable-{country}-{date}.pdf",
  },
  common: {
    perYear: "per year",
    perMonth: "per month",
    years: "years",
    loading: "Loading. .",
    errorTitle: "Something went wrong",
    errorBody: "Refresh the page. If it keeps happening, please open an issue on GitHub.",
  },
};
