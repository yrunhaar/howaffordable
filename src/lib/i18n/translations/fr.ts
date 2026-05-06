import type { Dictionary } from "../dictionary";

export const fr: Dictionary = {
  meta: {
    siteTitle: "Puis-je m'offrir une maison ?",
    homeTitleTemplate: "Puis-je m'offrir une maison ? | howaffordable.org",
    homeDescription:
      "Un outil libre et gratuit qui prend vos revenus et votre épargne et vous dit quel type de logement cela permet d'acheter dans votre pays, comment l'accessibilité a évolué depuis 1990 et où votre argent va le plus loin dans le monde.",
    homeOgTitle: "Puis-je m'offrir une maison ?",
    homeOgDescription:
      "Prix réels, revenus réels, taux d'intérêt réels. Voyez votre score d'accessibilité dans votre pays et dans 47 autres. Sans inscription.",
  },
  nav: {
    home: "À quel point abordable ?",
    compare: "Comparer les pays",
    report: "Report",
    methodology: "Méthodologie",
    faq: "FAQ",
    about: "À propos",
    menu: "Menu",
    close: "Fermer",
  },
  home: {
    headline: "Pouvez-vous vous offrir une maison ?",
    subheadline:
      "Revenus et épargne en entrée. En sortie : prix de logement abordable, années pour réunir l'apport et comparaison avec 1990.",
    chooseCountryLabel: "Où vivez-vous ?",
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
    heading: "Parlez-nous de vos finances",
    intro: "Chiffres annuels. Nous utilisons les taux d'intérêt et les apports minimums typiques du pays, sauf si vous les modifiez.",
    incomeLabel: "Revenu annuel du foyer (après impôts)",
    incomeHelp: "Salaire net cumulé de toutes les personnes du foyer.",
    savingsLabel: "Épargne disponible pour l'apport",
    savingsHelp: "Épargne liquide uniquement. Pas les fonds de retraite.",
    debtLabel: "Mensualités de dettes actuelles",
    debtHelp: "Prêts étudiants, prêts auto, minimums de carte de crédit. Pas le loyer.",
    mortgageYearsLabel: "Durée du prêt (années)",
    savingsRateLabel: "Taux d'épargne (% du revenu/an)",
    savingsRateHelp: "Quelle part de votre revenu vous pouvez épargner chaque année. La médiane OCDE tourne autour de 7 %.",
    seeResults: "Voir si je peux me le permettre",
    recalculate: "Recommencer",
  },
  result: {
    heading: "Votre instantané d'accessibilité",
    maxPriceLabel: "Prix maximum que vous pouvez vous offrir",
    priceToIncomeLabel: "Coût médian d'un logement dans le pays",
    priceToIncomeYears: "{ratio}× votre revenu annuel",
    verdict: {
      affordable: "Abordable : logement médian sous 4× le revenu",
      stretch: "Tendu : logement médian de 4 à 6× le revenu",
      unaffordable: "Inaccessible : logement médian de 6 à 10× le revenu",
      out_of_reach: "Hors de portée : logement médian au-delà de 10× le revenu",
    },
    downPaymentLabel: "Apport minimum pour la médiane",
    yearsToDownPaymentLabel: "Années pour réunir l'apport",
    yearsToDownPaymentTemplate: "{years} ans à votre taux d'épargne actuel",
    mortgageMonthlyLabel: "Mensualité du prêt sur la médiane",
    burdenLabel: "% du revenu mensuel net",
    compareHeading: "À quoi cela ressemble ailleurs",
    compareCountry: "Logement médian en {country}",
    compareOECD: "Ratio prix/revenu moyen OCDE",
    compareHistoric: "Moyenne historique de long terme (1990-2010)",
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
    historicalHeading: "Prix/revenu depuis 1990",
    historicalSubtitle: "{country} face à la moyenne OCDE",
    currentLabel: "Aujourd'hui",
  },
  cta: {
    support: {
      heading: "Soutenir ce projet",
      body:
        "Gratuit, ouvert, sans publicité, sans traceurs. Si cela vous a aidé, un petit pourboire me permet de continuer à construire des outils éducatifs ouverts.",
      ctaLabel: "Soutenir sur Ko-fi",
    },
    furtherReading: {
      heading: "Pour aller plus loin",
      body:
        "Les livres qui ont façonné ce calculateur. Acheter via Bookshop.org reverse une part aux librairies indépendantes locales.",
      ctaLabel: "Voir la liste de lectures",
      disclosure: "Lien d'affiliation Bookshop.",
    },
    sister: {
      heading: "Projets frères",
      body: "Même design, autre question.",
      howpoorami: "À quel point suis-je pauvre ?",
      howgreenami: "Quelle est la taille de mon empreinte carbone ?",
    },
  },
  footer: {
    tagline: "Données ouvertes, chiffres réels, sans traceurs.",
    source: "Sources de données",
    license: "Licence",
    madeBy: "Réalisé par Yohan Runhaar",
    about: "À propos",
    faq: "FAQ",
    methodology: "Méthodologie",
    github: "GitHub",
    support: "Offrez-moi un café",
    buildDateTemplate: "Données du {date}",
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
    perYear: "par an",
    perMonth: "par mois",
    years: "ans",
    loading: "Chargement. .",
    errorTitle: "Quelque chose a mal tourné",
    errorBody: "Rechargez la page. Si le problème persiste, ouvrez un ticket sur GitHub.",
  },
};
