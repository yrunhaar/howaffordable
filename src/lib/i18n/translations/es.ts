import type { Dictionary } from "../dictionary";

export const es: Dictionary = {
  meta: {
    siteTitle: "¿Puedo permitirme una casa?",
    homeTitleTemplate: "¿Puedo permitirme una casa? | howaffordable.org",
    homeDescription:
      "Una herramienta gratuita y abierta que toma tus ingresos y ahorros y te dice qué tipo de vivienda puedes comprar en tu país, cómo ha cambiado la accesibilidad desde 1990 y dónde rinde más tu dinero en el mundo.",
    homeOgTitle: "¿Puedo permitirme una casa?",
    homeOgDescription:
      "Precios reales, ingresos reales, tipos de interés reales. Mira tu puntuación de accesibilidad en tu país y en otros 47. Sin registro.",
  },
  nav: {
    home: "¿Cuán asequible?",
    compare: "Comparar países",
    report: "Report",
    methodology: "Metodología",
    faq: "Preguntas frecuentes",
    about: "Acerca de",
    menu: "Menú",
    close: "Cerrar",
  },
  home: {
    headline: "¿Puedes permitirte una casa?",
    subheadline:
      "Ingresos y ahorros entran. Sale el precio de vivienda asequible, los años para la entrada y cómo se compara con 1990.",
    chooseCountryLabel: "¿Dónde vives?",
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
    heading: "Cuéntanos sobre tus finanzas",
    intro: "Cifras anuales. Usamos los tipos de interés y las entradas mínimas típicos del país a menos que los cambies.",
    incomeLabel: "Ingresos anuales del hogar (después de impuestos)",
    incomeHelp: "Salario neto combinado de todas las personas del hogar.",
    savingsLabel: "Ahorros disponibles para la entrada",
    savingsHelp: "Solo ahorros líquidos. No fondos de jubilación.",
    debtLabel: "Deudas mensuales actuales",
    debtHelp: "Préstamos estudiantiles, de coche, mínimos de tarjeta. No el alquiler.",
    mortgageYearsLabel: "Plazo de la hipoteca (años)",
    savingsRateLabel: "Tasa de ahorro (% de ingresos al año)",
    savingsRateHelp: "Cuánto de tus ingresos puedes destinar al ahorro cada año. La mediana de la OECD ronda el 7 %.",
    seeResults: "Ver si puedo permitírmelo",
    recalculate: "Empezar de nuevo",
  },
  result: {
    heading: "Tu fotografía de accesibilidad",
    maxPriceLabel: "Precio máximo de vivienda que puedes pagar",
    priceToIncomeLabel: "Coste mediano de la vivienda en el país",
    priceToIncomeYears: "{ratio}× tus ingresos anuales",
    verdict: {
      affordable: "Asequible: la vivienda mediana cuesta menos de 4× los ingresos",
      stretch: "Justo: la vivienda mediana cuesta entre 4 y 6× los ingresos",
      unaffordable: "Inasequible: la vivienda mediana cuesta entre 6 y 10× los ingresos",
      out_of_reach: "Fuera de alcance: la vivienda mediana cuesta más de 10× los ingresos",
    },
    downPaymentLabel: "Entrada mínima para la mediana",
    yearsToDownPaymentLabel: "Años para ahorrar la entrada",
    yearsToDownPaymentTemplate: "{years} años a tu tasa de ahorro actual",
    mortgageMonthlyLabel: "Hipoteca mensual sobre la mediana",
    burdenLabel: "% de ingresos netos mensuales",
    compareHeading: "Cómo se compara",
    compareCountry: "Vivienda mediana en {country}",
    compareOECD: "Promedio precio-ingresos de la OECD",
    compareHistoric: "Promedio histórico a largo plazo (1990-2010)",
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
    historicalHeading: "Precio sobre ingresos desde 1990",
    historicalSubtitle: "{country} frente a la media de la OECD",
    currentLabel: "Hoy",
  },
  cta: {
    support: {
      heading: "Apoya este proyecto",
      body:
        "Gratis, abierto, sin anuncios, sin rastreo. Si te ha servido, una pequeña propina me permite seguir creando herramientas educativas abiertas.",
      ctaLabel: "Dejar propina en Ko-fi",
    },
    furtherReading: {
      heading: "Lecturas recomendadas",
      body:
        "Libros que han dado forma a esta calculadora. Comprar a través de Bookshop.org envía una parte a librerías independientes locales.",
      ctaLabel: "Ver la lista de lecturas",
      disclosure: "Enlace de afiliado de Bookshop.",
    },
    sister: {
      heading: "Proyectos hermanos",
      body: "Mismo diseño, otra pregunta.",
      howpoorami: "¿Qué tan pobre soy?",
      howgreenami: "¿Cómo de grande es mi huella de carbono?",
    },
  },
  footer: {
    tagline: "Datos abiertos, cifras reales, sin rastreo.",
    source: "Fuentes de datos",
    license: "Licencia",
    madeBy: "Hecho por Yohan Runhaar",
    about: "Acerca de",
    faq: "Preguntas frecuentes",
    methodology: "Metodología",
    github: "GitHub",
    support: "Invítame a un café",
    buildDateTemplate: "Datos del {date}",
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
    perYear: "al año",
    perMonth: "al mes",
    years: "años",
    loading: "Cargando. .",
    errorTitle: "Algo ha salido mal",
    errorBody: "Recarga la página. Si el problema persiste, abre una incidencia en GitHub.",
  },
};
