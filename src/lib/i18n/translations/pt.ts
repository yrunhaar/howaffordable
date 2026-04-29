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
    home: "Calculadora",
    compare: "Comparar países",
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
  common: {
    perYear: "por ano",
    perMonth: "por mês",
    years: "anos",
    loading: "A carregar...",
    errorTitle: "Algo correu mal",
    errorBody: "Recarregue a página. Se persistir, abra uma issue no GitHub.",
  },
};
