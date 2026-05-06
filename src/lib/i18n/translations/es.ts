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
    headlineTemplate: "¿Puedes permitirte una casa en {country}?",
    verdictAffordable: "Asequible según los estándares históricos",
    verdictStretch: "Justo, por encima de la norma histórica",
    verdictUnaffordable: "Inasequible según la clasificación de Demographia",
    verdictOutOfReach: "Fuera de alcance para el hogar mediano",
    bodyTemplate:
      "La vivienda mediana en {country} cuesta {price} y el hogar mediano gana {income}, una relación precio-ingresos de {ratio}×. Posición {rank} de {total} en coste de vivienda respecto a los ingresos.",
    statMedianHomeLabel: "Precio mediano de la vivienda",
    statMedianHomeSub: "{anchor}",
    statMedianIncomeLabel: "Ingresos medianos del hogar",
    statMedianIncomeSub: "después de impuestos",
    statMortgageLabel: "Tipo hipotecario medio",
    statMortgageSub: "entrada mínima {pct} %",
    historyHeading: "Cómo evolucionó la accesibilidad de la vivienda en {country}",
    historyBodyTemplate:
      "La relación precio-ingresos alcanzó su máximo de {peakValue}× en {peakYear}. Hoy: {todayValue}×. {shift} El promedio de la OECD en el mismo periodo pasó de {oecdStart}× en {oecdYear} a {oecdToday}× hoy.",
    historyShiftTemplate:
      "Si hubieras tenido los ingresos actuales en {startYear}, podrías haberte permitido el {pct} % del poder adquisitivo actual para la vivienda mediana del país.",
    calculatorHeadingTemplate: "¿Qué tan asequible es {country} para ti?",
    calculatorSubheadingTemplate:
      "Introduce tus ingresos y ahorros para ver tu precio máximo asequible personal, los años hasta la entrada y cómo se compara con la mediana de {country}.",
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
    narrativeHeading: "Qué significa esto",
    narrativeBody: "Tu precio máximo asequible es el techo que te concedería el banco sobre tus ingresos al tipo hipotecario medio del país, con el test estándar del 36 % de deuda sobre ingresos. La franja de veredicto mira el precio mediano de la vivienda como múltiplo de tus ingresos, usando la clasificación de accesibilidad de Demographia. Juntos te dicen cuánto podrías pedir prestado TÚ y cómo se sitúa el mercado del país respecto a tus ingresos. Cuando las dos cifras son parecidas, estás justo en el límite de la mediana y tienes poco margen de seguridad.",
    burdenHeading: "Carga hipotecaria frente a los umbrales del banco",
    burdenIntro: "La mayoría de bancos limitan la hipoteca mensual al 36 % del ingreso bruto. Algunos llegan al 43 %. Por debajo del 28 % es cómodo; por encima del umbral, el préstamo se deniega o solo se aprueba con condiciones.",
    burdenComfortable: "Cómodo: muy por debajo del límite DTI del banco, tienes margen para reparaciones, ahorro y subidas de tipos.",
    burdenManageable: "Manejable: por debajo del tope del 36 %, pero con margen limitado para imprevistos.",
    burdenStretched: "Tenso: por encima del tope estándar del 36 %. Algunos bancos permiten hasta el 43 %, pero cada punto porcentual de subida de tipos aprieta el presupuesto.",
    burdenOverLimit: "Por encima del límite: la mayoría de bancos no aprobarán a este nivel. Necesitarías una vivienda más barata, más entrada o un plazo más largo.",
    burdenYouLabel: "Tú",
    historyHeading: "Cómo evolucionó la accesibilidad",
    historyIntro: "Relación precio-ingresos en {country} desde 1990 hasta hoy. Cuanto más sube la línea, menos vivienda compra el mismo ingreso.",
    historyAffordabilityShiftTemplate: "Si hubieras tenido los mismos ingresos en {year}, podrías haberte permitido el {pct} del poder adquisitivo actual para la vivienda mediana del país.",
    crossHeading: "Qué compra tu ingreso relativo en el resto del mundo",
    crossIntro: "Toma tu posición en la distribución de ingresos de tu país y aplícala en otros. Mismo ingreso relativo, mercados distintos.",
    crossColumnCountry: "País",
    crossColumnAffordable: "Máximo asequible",
    crossColumnRatio: "Mediana × tus ingresos",
    crossColumnVerdict: "Veredicto",
    rentHeading: "Comprar frente a alquilar",
    rentIntro: "Hipoteca mensual sobre la vivienda mediana del país frente al alquiler mediano del país.",
    rentMonthlyLabel: "Alquiler mensual mediano",
    mortgageMonthlyOnMedianLabel: "Hipoteca sobre vivienda mediana",
    rentBuyDiffMore: "Comprar cuesta unos {amount} más al mes que alquilar a precio mediano, pero genera patrimonio con el tiempo.",
    rentBuyDiffLess: "Comprar cuesta unos {amount} menos al mes que alquilar a precio mediano. La decisión de comprar o alquilar depende también del periodo de tenencia y de la subida de precios.",
    takeawaysHeading: "A qué prestar atención",
    takeawaysIntro: "Lecturas prácticas a partir de tu fotografía.",
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
    title: "Informe personal de accesibilidad a la vivienda",
    subtitle: "Precios reales, ingresos reales, tipos reales, ajustados a tu número.",
    preparedFor: "Preparado para: {country}, {date}",
    landingTitle: "Tu informe personal de accesibilidad a la vivienda",
    landingFreeBadge: "Gratis. Sin registro, sin pago, sin correo electrónico",
    landingFeatureA: {
      title: "Tu precio máximo asequible",
      body:
        "Calculado a partir de tus ingresos y ahorros, el tipo hipotecario del país y un techo estándar del 36 % de deuda sobre ingresos. Más la distancia hasta la mediana del país.",
    },
    landingFeatureB: {
      title: "Contexto del país e histórico",
      body:
        "Dónde se sitúa tu país en la escala mundial de accesibilidad y cómo ha evolucionado la relación precio-ingresos a lo largo de las décadas.",
    },
    landingFeatureC: {
      title: "Totalmente privado",
      body:
        "El PDF se genera en tu navegador. No se envía nada a ningún servidor. Sin correo, sin cuenta, sin rastreo.",
    },
    landingPicker: {
      title: "Genera tu informe",
      subtitle: "Elige un país, introduce tus ingresos y ahorros, y nosotros nos encargamos del resto.",
      countryLabel: "País",
      incomeLabel: "Ingresos anuales del hogar (después de impuestos)",
      incomeHelp: "Salario neto combinado de todas las personas del hogar.",
      savingsLabel: "Ahorros disponibles para la entrada",
      savingsHelp: "Solo ahorros líquidos. No fondos de jubilación.",
      generateButton: "Generar el PDF",
      generatingButton: "Generando...",
    },
    pdfPageLabel: "Página",
    pdfFooterAttribution: "howaffordable.org · Datos abiertos · Sin rastreo",
    pdfCoverGeneratedLabel: "Generado",
    pdfYourPriceLabel: "Precio máximo de vivienda que puedes pagar",
    pdfMaxPriceLeadIn: "Tu techo de endeudamiento",
    pdfCoverNarrative:
      "Tu precio máximo asequible es el techo que te concedería el banco sobre tus ingresos al tipo hipotecario medio del país, con un test del 36 % de DTI. Las páginas siguientes contextualizan ese número frente a la mediana del país, la trayectoria histórica del país y la economía de comprar frente a alquilar.",
    pdfSection1Title: "Tu fotografía",
    pdfSection1Body:
      "Precio máximo asequible, hipoteca mensual sobre la vivienda mediana del país, distancia entre tu máximo y la mediana del país, y años hasta una entrada típica a tu tasa de ahorro.",
    pdfSection2Title: "Dónde se sitúa el país",
    pdfSection2Body:
      "Precio mediano de la vivienda del país, ingresos medianos del hogar, tipo hipotecario y porcentaje mínimo de entrada.",
    pdfSection3Title: "Entre países",
    pdfSection3Body:
      "Tu posición relativa en la distribución de ingresos del país aplicada a otros mercados: mismo percentil, mercados distintos.",
    pdfHistoricalTitle: "Cómo evolucionó la accesibilidad",
    pdfHistoricalBody:
      "Relación precio-ingresos en tu país durante el periodo disponible en los datos de la OECD y el BIS. Cuanto más sube la línea, más duro es el mercado para el hogar mediano.",
    pdfHistoricalInsightTemplate:
      "La relación precio-ingresos de {country} era {firstValue}× en {firstYear}. En {lastYear}: {lastValue}×. {direction} {magnitude}× durante el periodo.",
    pdfHistoricalNoData:
      "No hay serie histórica larga para este país. La fotografía anterior sigue siendo válida.",
    pdfTakeawaysTitle: "Qué significa esto en la práctica",
    pdfTakeawaysIntro:
      "Lecturas personales de tu fotografía, según la carga, la relación y el régimen del país.",
    pdfTakeawaysAffordable:
      "La vivienda mediana de tu país está claramente al alcance: los precios están por debajo de 4× los ingresos medianos. Las decisiones que quedan son dónde comprar y cuánto apalancarte.",
    pdfTakeawaysStretch:
      "La vivienda mediana de tu país es un esfuerzo: a 4-6× los ingresos, comprar suele exigir o bien una buena entrada, o un plazo de hipoteca largo, o aceptar una vivienda más pequeña o más alejada.",
    pdfTakeawaysUnaffordable:
      "La vivienda mediana de tu país es inasequible según la clasificación de Demographia: 6-10× los ingresos. Comprar suele requerir ayuda familiar, doble ingreso o aceptar una rebaja significativa en tamaño o ubicación.",
    pdfTakeawaysOutOfReach:
      "Por encima de 10× los ingresos, ser propietario de la vivienda mediana del país está de hecho fuera de alcance sin un capital externo significativo. Mira las relaciones alquiler-precio locales; alquilar puede ser la mejor jugada a largo plazo.",
    pdfTakeawaysBuyVsRent:
      "Por debajo de unas 15× el alquiler anual, comprar suele ganar al alquiler con una tenencia de 5 años o más. Por encima de unas 25×, alquilar gana con claridad. La decisión de comprar o alquilar depende también del periodo de tenencia y de la subida de precios, no solo del ratio.",
    pdfMethodologyTitle: "Metodología",
    pdfMethodologyBody:
      "Precios medianos y relación precio-ingresos de la OECD Affordable Housing Database y de la BIS Selected Property Price Series. Tipos hipotecarios del ECB SDW (eurozona), Federal Reserve H.15 (EE. UU.), Bank of England (Reino Unido) y bancos centrales nacionales en otros casos. Bandas de Demographia para la clasificación de accesibilidad. El cálculo se ejecuta totalmente en el cliente; no se envía nada a ningún servidor.",
    pdfTipTitle: "¿Te gusta este informe?",
    pdfTipBody:
      "Es gratis y sin anuncios. Si te resulta útil, una pequeña propina en Ko-fi me permite seguir creando herramientas educativas abiertas.",
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
