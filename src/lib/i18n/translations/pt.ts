import type { Dictionary } from "../dictionary";

export const pt: Dictionary = {
  meta: {
    siteTitle: "Consigo comprar casa?",
    homeTitleTemplate: "Consigo comprar casa? | howaffordable.org",
    homeDescription:
      "Uma ferramenta gratuita e aberta que parte do seu rendimento e poupança e diz que tipo de casa isso compra no seu país, como a acessibilidade mudou desde 1990 e onde no mundo o seu dinheiro rende mais.",
    homeOgTitle: "Consigo comprar casa?",
    homeOgDescription:
      "Preços reais, rendimentos reais, taxas de juro reais. Veja a sua pontuação de acessibilidade no seu país e em outros 47. Sem registo.",
  },
  nav: {
    home: "Quão acessível?",
    compare: "Comparar países",
    report: "Report",
    methodology: "Metodologia",
    faq: "FAQ",
    about: "Sobre",
    menu: "Menu",
    close: "Fechar",
  },
  home: {
    headline: "Consegue comprar casa?",
    subheadline:
      "Rendimento e poupança à entrada. À saída: preço de casa acessível, anos para juntar a entrada e comparação com 1990.",
    chooseCountryLabel: "Onde vive?",
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
    heading: "Conte-nos sobre as suas finanças",
    intro: "Valores anuais. Usamos as taxas de juro e as entradas mínimas típicas do país, a não ser que as altere.",
    incomeLabel: "Rendimento anual do agregado (líquido de impostos)",
    incomeHelp: "Salário líquido somado de todas as pessoas do agregado.",
    savingsLabel: "Poupança disponível para a entrada",
    savingsHelp: "Apenas poupança líquida. Não fundos de reforma.",
    debtLabel: "Encargos mensais com dívidas",
    debtHelp: "Créditos a estudantes, créditos automóvel, mínimos do cartão de crédito. Não a renda.",
    mortgageYearsLabel: "Prazo do crédito (anos)",
    savingsRateLabel: "Taxa de poupança (% do rendimento/ano)",
    savingsRateHelp: "Quanto do seu rendimento consegue poupar por ano. A mediana da OECD ronda os 7 %.",
    seeResults: "Ver se consigo comprar",
    recalculate: "Recomeçar",
  },
  result: {
    heading: "A sua fotografia de acessibilidade",
    maxPriceLabel: "Preço máximo que consegue pagar",
    priceToIncomeLabel: "Custo mediano de casa no país",
    priceToIncomeYears: "{ratio}× o seu rendimento anual",
    verdict: {
      affordable: "Acessível: casa mediana abaixo de 4× o rendimento",
      stretch: "No limite: casa mediana entre 4 e 6× o rendimento",
      unaffordable: "Inacessível: casa mediana entre 6 e 10× o rendimento",
      out_of_reach: "Fora de alcance: casa mediana acima de 10× o rendimento",
    },
    downPaymentLabel: "Entrada mínima sobre a mediana",
    yearsToDownPaymentLabel: "Anos para juntar a entrada",
    yearsToDownPaymentTemplate: "{years} anos à sua taxa de poupança atual",
    mortgageMonthlyLabel: "Prestação mensal sobre a mediana",
    burdenLabel: "% do rendimento mensal líquido",
    compareHeading: "Como se compara",
    compareCountry: "Casa mediana em {country}",
    compareOECD: "Rácio preço/rendimento médio da OECD",
    compareHistoric: "Média histórica de longo prazo (1990-2010)",
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
    historicalHeading: "Preço/rendimento desde 1990",
    historicalSubtitle: "{country} face à média da OECD",
    currentLabel: "Hoje",
  },
  cta: {
    support: {
      heading: "Apoiar este projeto",
      body:
        "Gratuito, aberto, sem anúncios, sem rastreio. Se foi útil, uma pequena gorjeta ajuda-me a continuar a construir ferramentas educativas abertas.",
      ctaLabel: "Apoiar no Ko-fi",
    },
    furtherReading: {
      heading: "Para ler mais",
      body:
        "Livros que moldaram esta calculadora. Comprar pela Bookshop.org reverte uma parte para livrarias independentes locais.",
      ctaLabel: "Ver a lista de leituras",
      disclosure: "Link de afiliado da Bookshop.",
    },
    sister: {
      heading: "Projetos irmãos",
      body: "Mesmo desenho, outra pergunta.",
      howpoorami: "Quão pobre sou?",
      howgreenami: "Qual o tamanho da minha pegada de carbono?",
    },
  },
  footer: {
    tagline: "Dados abertos, números reais, sem rastreio.",
    source: "Fontes de dados",
    license: "Licença",
    madeBy: "Feito por Yohan Runhaar",
    about: "Sobre",
    faq: "Perguntas frequentes",
    methodology: "Metodologia",
    github: "GitHub",
    support: "Me pague um café",
    buildDateTemplate: "Dados de {date}",
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
    perYear: "por ano",
    perMonth: "por mês",
    years: "anos",
    loading: "A carregar. .",
    errorTitle: "Algo correu mal",
    errorBody: "Recarregue a página. Se persistir, abra uma issue no GitHub.",
  },
};
