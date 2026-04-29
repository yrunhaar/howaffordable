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
    home: "Calculadora",
    compare: "Comparar países",
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
  common: {
    perYear: "al año",
    perMonth: "al mes",
    years: "años",
    loading: "Cargando...",
    errorTitle: "Algo ha salido mal",
    errorBody: "Recarga la página. Si el problema persiste, abre una incidencia en GitHub.",
  },
};
