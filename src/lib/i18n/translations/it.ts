import type { Dictionary } from "../dictionary";

export const it: Dictionary = {
  meta: {
    siteTitle: "Posso permettermi una casa?",
    homeTitleTemplate: "Posso permettermi una casa? | howaffordable.org",
    homeDescription:
      "Uno strumento gratuito e aperto che parte dal tuo reddito e dai tuoi risparmi e ti dice che tipo di casa puoi permetterti nel tuo paese, come è cambiata l'accessibilità dal 1990 e dove al mondo i tuoi soldi rendono di più.",
    homeOgTitle: "Posso permettermi una casa?",
    homeOgDescription:
      "Prezzi reali, redditi reali, tassi di interesse reali. Vedi il tuo punteggio di accessibilità nel tuo paese e in altri 47. Senza login.",
  },
  nav: {
    home: "Quanto è accessibile?",
    compare: "Confronta paesi",
    report: "Report",
    methodology: "Metodologia",
    faq: "FAQ",
    about: "Informazioni",
    menu: "Menu",
    close: "Chiudi",
  },
  home: {
    headline: "Puoi permetterti una casa?",
    subheadline:
      "Reddito e risparmi in ingresso. In uscita: prezzo di una casa accessibile, anni per l'anticipo e confronto con il 1990.",
    chooseCountryLabel: "Dove vivi?",
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
    heading: "Raccontaci delle tue finanze",
    intro: "Cifre annuali. Usiamo i tassi di interesse e gli anticipi minimi tipici del paese a meno che tu non li modifichi.",
    incomeLabel: "Reddito annuale del nucleo (al netto delle tasse)",
    incomeHelp: "Reddito netto combinato di tutte le persone del nucleo.",
    savingsLabel: "Risparmi disponibili per l'anticipo",
    savingsHelp: "Solo risparmi liquidi. Non fondi pensione.",
    debtLabel: "Rate mensili di debiti esistenti",
    debtHelp: "Prestiti studenteschi, prestiti auto, minimi della carta di credito. Non l'affitto.",
    mortgageYearsLabel: "Durata del mutuo (anni)",
    savingsRateLabel: "Tasso di risparmio (% del reddito/anno)",
    savingsRateHelp: "Quanto del tuo reddito puoi destinare al risparmio ogni anno. La mediana OECD è circa il 7 %.",
    seeResults: "Vedi se posso permettermela",
    recalculate: "Ricomincia",
  },
  result: {
    heading: "La tua fotografia di accessibilità",
    maxPriceLabel: "Prezzo massimo che puoi permetterti",
    priceToIncomeLabel: "Costo mediano di una casa nel paese",
    priceToIncomeYears: "{ratio}× il tuo reddito annuo",
    verdict: {
      affordable: "Accessibile: casa mediana sotto 4× il reddito",
      stretch: "Al limite: casa mediana 4-6× il reddito",
      unaffordable: "Inaccessibile: casa mediana 6-10× il reddito",
      out_of_reach: "Fuori portata: casa mediana oltre 10× il reddito",
    },
    downPaymentLabel: "Anticipo minimo per la mediana",
    yearsToDownPaymentLabel: "Anni per mettere da parte l'anticipo",
    yearsToDownPaymentTemplate: "{years} anni al tuo tasso di risparmio attuale",
    mortgageMonthlyLabel: "Rata mensile del mutuo sulla mediana",
    burdenLabel: "% del reddito mensile netto",
    compareHeading: "Come si confronta",
    compareCountry: "Casa mediana in {country}",
    compareOECD: "Rapporto prezzo/reddito medio OECD",
    compareHistoric: "Media storica di lungo periodo (1990-2010)",
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
    historicalHeading: "Prezzo/reddito dal 1990",
    historicalSubtitle: "{country} contro la media OECD",
    currentLabel: "Oggi",
  },
  cta: {
    support: {
      heading: "Sostieni questo progetto",
      body:
        "Gratuito, aperto, senza pubblicità, senza tracker. Se ti è stato utile, una piccola mancia mi permette di continuare a creare strumenti educativi aperti.",
      ctaLabel: "Lascia una mancia su Ko-fi",
    },
    furtherReading: {
      heading: "Per approfondire",
      body:
        "Libri che hanno ispirato questo calcolatore. Acquistare tramite Bookshop.org gira una parte alle librerie indipendenti locali.",
      ctaLabel: "Vedi la lista letture",
      disclosure: "Link di affiliazione Bookshop.",
    },
    sister: {
      heading: "Progetti gemelli",
      body: "Stesso design, altra domanda.",
      howpoorami: "Quanto sono povero?",
      howgreenami: "Quanto è grande la mia impronta di carbonio?",
    },
  },
  footer: {
    tagline: "Dati aperti, numeri reali, nessun tracciamento.",
    source: "Fonti dei dati",
    license: "Licenza",
    madeBy: "Realizzato da Yohan Runhaar",
    about: "Informazioni",
    faq: "FAQ",
    methodology: "Metodologia",
    github: "GitHub",
    support: "Offrimi un caffè",
    buildDateTemplate: "Dati al {date}",
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
    perYear: "all'anno",
    perMonth: "al mese",
    years: "anni",
    loading: "Caricamento. .",
    errorTitle: "Qualcosa è andato storto",
    errorBody: "Ricarica la pagina. Se il problema persiste, apri una segnalazione su GitHub.",
  },
};
