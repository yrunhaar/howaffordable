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
    headlineTemplate: "Consegue comprar uma casa em {country}?",
    verdictAffordable: "Acessível pelos padrões históricos",
    verdictStretch: "No limite, acima da norma histórica",
    verdictUnaffordable: "Inacessível pela classificação da Demographia",
    verdictOutOfReach: "Fora de alcance para o agregado mediano",
    bodyTemplate:
      "A casa mediana em {country} custa {price} e o agregado mediano ganha {income}, um rácio preço/rendimento de {ratio}×. Posição {rank} em {total} no custo da casa face ao rendimento.",
    statMedianHomeLabel: "Preço mediano da casa",
    statMedianHomeSub: "{anchor}",
    statMedianIncomeLabel: "Rendimento mediano do agregado",
    statMedianIncomeSub: "líquido de impostos",
    statMortgageLabel: "Taxa média do crédito",
    statMortgageSub: "entrada mín. {pct} %",
    historyHeading: "Como evoluiu a acessibilidade à habitação em {country}",
    historyBodyTemplate:
      "O rácio preço/rendimento atingiu o máximo de {peakValue}× em {peakYear}. Hoje: {todayValue}×. {shift} A média da OECD no mesmo período passou de {oecdStart}× em {oecdYear} para {oecdToday}× hoje.",
    historyShiftTemplate:
      "Se em {startYear} tivesse o rendimento de hoje, teria conseguido {pct} % do poder de compra atual para a casa mediana do país.",
    calculatorHeadingTemplate: "Quão acessível é {country} para si?",
    calculatorSubheadingTemplate:
      "Introduza o seu rendimento e a sua poupança para ver o preço máximo pessoal, os anos até à entrada e como se compara com a mediana de {country}.",
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
    narrativeHeading: "O que isto significa",
    narrativeBody: "O seu preço máximo é o tecto que o banco aceitaria sobre o seu rendimento, à taxa média do crédito no país, com o teste padrão de 36 % de dívida sobre rendimento. A faixa de veredicto olha para o preço mediano da casa como múltiplo do seu rendimento, usando a classificação de acessibilidade da Demographia. Em conjunto indicam quanto o SENHOR/A SENHORA conseguiria pedir emprestado e como se posiciona o mercado do país face ao seu rendimento. Quando os dois números estão próximos, está no limite da mediana e tem pouca margem de segurança.",
    burdenHeading: "Peso da prestação face aos limites dos bancos",
    burdenIntro: "A maioria dos bancos limita a prestação mensal a 36 % do rendimento bruto. Alguns vão até 43 %. Abaixo de 28 % é confortável; acima do limite, o crédito é recusado ou só é aprovado com condições.",
    burdenComfortable: "Confortável: bem abaixo do tecto DTI do banco, tem margem para reparações, poupança e subidas de taxa.",
    burdenManageable: "Sustentável: abaixo do tecto dos 36 %, mas com margem limitada para imprevistos.",
    burdenStretched: "Apertado: acima do tecto padrão de 36 %. Alguns bancos chegam aos 43 %, mas cada ponto percentual de subida de taxa aperta o orçamento.",
    burdenOverLimit: "Acima da linha: a maioria dos bancos não aprova a este nível. Precisaria de uma casa mais barata, mais entrada ou um prazo mais longo.",
    burdenYouLabel: "Você",
    historyHeading: "Como evoluiu a acessibilidade",
    historyIntro: "Rácio preço/rendimento em {country} de 1990 até hoje. Quanto mais a linha sobe, menos casa o mesmo rendimento compra.",
    historyAffordabilityShiftTemplate: "Se em {year} tivesse o mesmo rendimento, teria conseguido {pct} do poder de compra atual para a casa mediana do país.",
    crossHeading: "O que o seu rendimento relativo compra pelo mundo",
    crossIntro: "Pegue na sua posição na distribuição de rendimentos do seu país e aplique-a noutros países. Mesmo rendimento relativo, mercados diferentes.",
    crossColumnCountry: "País",
    crossColumnAffordable: "Máximo acessível",
    crossColumnRatio: "Mediana × o seu rendimento",
    crossColumnVerdict: "Veredicto",
    rentHeading: "Comprar ou arrendar",
    rentIntro: "Prestação mensal sobre a casa mediana do país face à renda mediana do país.",
    rentMonthlyLabel: "Renda mensal mediana",
    mortgageMonthlyOnMedianLabel: "Prestação sobre casa mediana",
    rentBuyDiffMore: "Comprar custa cerca de {amount} a mais por mês do que arrendar à mediana, mas constrói património ao longo do tempo.",
    rentBuyDiffLess: "Comprar custa cerca de {amount} a menos por mês do que arrendar à mediana. A escolha entre comprar e arrendar depende também do prazo de detenção e da subida de preços.",
    takeawaysHeading: "O que vigiar",
    takeawaysIntro: "Leituras práticas a partir da sua fotografia.",
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
    title: "Relatório pessoal de acessibilidade à habitação",
    subtitle: "Preços reais, rendimentos reais, taxas reais, ajustados ao seu número.",
    preparedFor: "Preparado para: {country}, {date}",
    landingTitle: "O seu relatório pessoal de acessibilidade à habitação",
    landingFreeBadge: "Grátis. Sem registo, sem pagamento, sem email",
    landingFeatureA: {
      title: "O seu preço máximo",
      body:
        "Calculado a partir do seu rendimento e da sua poupança, da taxa de crédito do país e de um tecto padrão de 36 % de dívida sobre rendimento. Mais a distância à mediana do país.",
    },
    landingFeatureB: {
      title: "Contexto do país e histórico",
      body:
        "Onde se posiciona o seu país na escala global de acessibilidade e como evoluiu o rácio preço/rendimento ao longo das décadas.",
    },
    landingFeatureC: {
      title: "Totalmente privado",
      body:
        "O PDF é gerado no seu navegador. Nada é enviado para qualquer servidor. Sem email, sem conta, sem rastreio.",
    },
    landingPicker: {
      title: "Gerar o seu relatório",
      subtitle: "Escolha um país, introduza o rendimento e a poupança, do resto tratamos nós.",
      countryLabel: "País",
      incomeLabel: "Rendimento anual do agregado (líquido de impostos)",
      incomeHelp: "Salário líquido somado de todas as pessoas do agregado.",
      savingsLabel: "Poupança disponível para a entrada",
      savingsHelp: "Apenas poupança líquida. Não fundos de reforma.",
      generateButton: "Gerar o PDF",
      generatingButton: "A gerar...",
    },
    pdfPageLabel: "Página",
    pdfFooterAttribution: "howaffordable.org · Dados abertos · Sem rastreio",
    pdfCoverGeneratedLabel: "Gerado",
    pdfYourPriceLabel: "Preço máximo de casa que consegue pagar",
    pdfMaxPriceLeadIn: "O seu tecto de financiamento",
    pdfCoverNarrative:
      "O seu preço máximo é o tecto que o banco aceitaria sobre o seu rendimento, à taxa média do crédito no país, com um teste DTI a 36 %. As páginas seguintes contextualizam este número face à mediana do país, à trajetória histórica do país e à lógica de comprar contra arrendar.",
    pdfSection1Title: "A sua fotografia",
    pdfSection1Body:
      "Preço máximo, prestação mensal sobre a casa mediana do país, distância entre o seu máximo e a mediana do país e anos para uma entrada típica à sua taxa de poupança.",
    pdfSection2Title: "Onde está o país",
    pdfSection2Body:
      "Preço mediano da casa, rendimento mediano do agregado, taxa do crédito e fração mínima de entrada.",
    pdfSection3Title: "Entre países",
    pdfSection3Body:
      "A sua posição relativa na distribuição de rendimentos do seu país aplicada a outros mercados: mesmo percentil, mercados diferentes.",
    pdfHistoricalTitle: "Como evoluiu a acessibilidade",
    pdfHistoricalBody:
      "Rácio preço/rendimento no seu país ao longo do período disponível nos dados da OECD e do BIS. Linha mais alta significa mercado mais duro para o agregado mediano.",
    pdfHistoricalInsightTemplate:
      "O rácio preço/rendimento de {country} era {firstValue}× em {firstYear}. Em {lastYear}: {lastValue}×. {direction} {magnitude}× ao longo do período.",
    pdfHistoricalNoData:
      "Não há série histórica longa para este país. A fotografia acima continua a aplicar-se.",
    pdfTakeawaysTitle: "O que isto significa na prática",
    pdfTakeawaysIntro:
      "Leituras pessoais da sua fotografia, dada a carga da prestação, o rácio e o regime do país.",
    pdfTakeawaysAffordable:
      "A casa mediana do seu país está bem ao alcance: os preços estão abaixo de 4× o rendimento mediano. As decisões que restam são onde comprar e quanto alavancagem assumir.",
    pdfTakeawaysStretch:
      "A casa mediana do seu país está no limite: a 4-6× o rendimento, comprar exige normalmente uma boa entrada, um prazo de crédito longo ou aceitar uma casa mais pequena ou mais afastada.",
    pdfTakeawaysUnaffordable:
      "A casa mediana do seu país é inacessível pela classificação da Demographia: 6-10× o rendimento. Comprar exige, muitas vezes, ajuda da família, rendimento duplo ou aceitar uma redução significativa em tamanho ou localização.",
    pdfTakeawaysOutOfReach:
      "Acima de 10× o rendimento, ser dono da casa mediana do país está, na prática, fora de alcance sem capital externo significativo. Atenção aos rácios renda/preço locais; arrendar pode ser a melhor jogada a longo prazo.",
    pdfTakeawaysBuyVsRent:
      "Abaixo de cerca de 15× a renda anual, comprar costuma ganhar ao arrendamento num horizonte de 5 ou mais anos. Acima de cerca de 25×, arrendar ganha claramente. A escolha entre comprar e arrendar depende também do prazo de detenção e da subida de preços, não apenas do rácio.",
    pdfMethodologyTitle: "Metodologia",
    pdfMethodologyBody:
      "Preços medianos e rácios preço/rendimento da OECD Affordable Housing Database e da BIS Selected Property Price Series. Taxas de crédito do ECB SDW (zona euro), Federal Reserve H.15 (EUA), Bank of England (Reino Unido) e bancos centrais nacionais nos restantes casos. Bandas da Demographia para a classificação de acessibilidade. O cálculo corre inteiramente no navegador; nada é enviado para qualquer servidor.",
    pdfTipTitle: "Gostou deste relatório?",
    pdfTipBody:
      "É grátis e sem publicidade. Se for útil, uma pequena gorjeta no Ko-fi permite-me continuar a construir ferramentas educativas abertas.",
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
