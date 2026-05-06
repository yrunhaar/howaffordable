import type { LocaleCode } from "../locales";

export interface MethodologyContent {
  readonly h1: string;
  readonly intro: string;
  readonly sections: readonly { readonly heading: string; readonly body: readonly string[] }[];
  readonly sources: readonly { readonly title: string; readonly url: string; readonly note: string }[];
  readonly assumptions: { readonly heading: string; readonly body: readonly string[] };
}

const en: MethodologyContent = {
  h1: "Methodology",
  intro: "How the calculator turns your income, savings, and country into an affordable home price. Every assumption listed.",
  sections: [
    {
      heading: "1. Maximum mortgage from your income",
      body: [
        "Most lenders cap monthly mortgage + other debt obligations at 36% of gross monthly income (the front-end DTI ratio). We use that as our maximum.",
        "From the maximum monthly mortgage, we work backwards through the standard amortization formula at the country's average mortgage rate over a 30-year term to find the principal you can borrow.",
      ],
    },
    {
      heading: "2. Down payment and price",
      body: [
        "We add the country's typical minimum down payment to the principal to get the maximum home price.",
        "For example, a 5% down market like the US/UK lets you buy ~5% more home than a 30% down market like Singapore for the same income, because more of the price is leveraged debt.",
        "We do not include closing costs, stamp duty, property taxes, or insurance in the affordability calculation. Add ~3-10% on top depending on country.",
      ],
    },
    {
      heading: "3. Country medians",
      body: [
        "Median home prices come from the OECD Housing Database (Q4 2024) and BIS Selected Property Price Series. Where OECD data is missing, we use national statistics offices.",
        "Median household disposable income comes from OECD Income Distribution Database, supplemented with national stats agencies for non-OECD countries.",
        "Both numbers are national medians, so high-cost cities (London, NYC, Tokyo, Sydney) are well above their national median — sometimes 2-3×.",
      ],
    },
    {
      heading: "4. Mortgage rates",
      body: [
        "Eurozone: ECB Statistical Data Warehouse 30-year fixed average. UK: Bank of England 75% LTV 5-year fixed. US: Federal Reserve H.15 30-year fixed. Other: national central banks.",
        "Rates are Q1 2025 snapshots. They will drift; the calculator's relative comparisons hold.",
      ],
    },
    {
      heading: "5. Minimum down payments",
      body: [
        "These are typical bank policy minimums for first-time buyers, not legal floors:",
        "5% (US, UK, Canada, Denmark) — 10% (France, Germany, Belgium, Netherlands, Australia, Malaysia) — 15% (Sweden, Norway, Finland, Romania) — 20% (Spain, Portugal, Italy, Switzerland, Austria, India, Czech Republic, Hungary) — 25% (Singapore, Israel) — 30% (China, Vietnam, Saudi Arabia, Egypt, Nigeria, Turkey).",
        "Some markets allow government schemes that reduce these — e.g. Help to Buy in the UK (now ended), FHA loans in the US (3.5%), or family-guarantee schemes in Australia. The calculator uses the standard private-bank minimums.",
      ],
    },
    {
      heading: "6. Affordability verdict",
      body: [
        "We classify the country median price-to-income ratio into four buckets, following Demographia International Housing Affordability conventions:",
        "Affordable (<4×) — Stretch (4-6×) — Unaffordable (6-10×) — Out of reach (>10×).",
        "These thresholds reflect long-term historical norms. The OECD long-run average from 1990-2010 was ~4.3×. Most rich countries are now well above that.",
      ],
    },
    {
      heading: "7. Years to down payment",
      body: [
        "Down payment needed minus current savings, divided by annual savings (income × your savings rate). Linear; we do not assume returns on savings during the accumulation period.",
        "OECD median household saving rate is around 7%. Higher in Japan, Switzerland, Scandinavia; lower in the UK and Anglo countries.",
      ],
    },
  ],
  sources: [
    {
      title: "OECD Affordable Housing Database",
      url: "https://www.oecd.org/housing/data/affordable-housing-database/",
      note: "Median home prices, price-to-income, price-to-rent. CC BY 4.0.",
    },
    {
      title: "BIS Selected Property Price Series",
      url: "https://www.bis.org/statistics/pp_selected.htm",
      note: "Quarterly residential property prices for 60+ countries.",
    },
    {
      title: "OECD Income Distribution Database",
      url: "https://www.oecd.org/social/income-distribution-database.htm",
      note: "Median household disposable income.",
    },
    {
      title: "Federal Reserve FRED",
      url: "https://fred.stlouisfed.org/",
      note: "US house prices, mortgage rates (H.15 series). Public domain.",
    },
    {
      title: "Eurostat — Housing statistics",
      url: "https://ec.europa.eu/eurostat/web/housing-statistics",
      note: "EU house prices and rent-to-income ratios. CC BY 4.0.",
    },
    {
      title: "ECB Statistical Data Warehouse",
      url: "https://sdw.ecb.europa.eu/",
      note: "Eurozone mortgage interest rates by maturity.",
    },
    {
      title: "Bank of England",
      url: "https://www.bankofengland.co.uk/statistics",
      note: "UK fixed-rate mortgage averages by LTV band.",
    },
    {
      title: "Demographia International Housing Affordability",
      url: "http://demographia.com/dhi.pdf",
      note: "Affordability classification thresholds (median multiple).",
    },
  ],
  assumptions: {
    heading: "Key assumptions and caveats",
    body: [
      "30-year fixed-rate mortgage at country average rate (you can change the term).",
      "Lender DTI cap at 36% — lenient lenders may allow up to 43%.",
      "No closing costs, taxes, or insurance in the principal limit. Add 3-10% on top.",
      "National medians, not city. London, NYC, Tokyo, Sydney are 2-3× their national medians.",
      "Linear savings projection; no return assumed on savings during accumulation.",
      "Snapshot of Q1 2025. Rates change. Re-run the calculator periodically.",
    ],
  },
};

const es: MethodologyContent = {
  h1: "Metodología",
  intro: "Cómo la calculadora convierte tus ingresos, ahorros y país en un precio de vivienda asequible. Todos los supuestos enumerados.",
  sections: [
    {
      heading: "1. Hipoteca máxima a partir de tus ingresos",
      body: [
        "La mayoría de los bancos limita la cuota mensual de hipoteca más otras deudas al 36% de los ingresos brutos mensuales (la ratio DTI front-end). Lo usamos como techo.",
        "A partir de esa cuota máxima, aplicamos la fórmula estándar de amortización al tipo medio del país sobre un plazo de 30 años para obtener el principal que puedes pedir prestado.",
      ],
    },
    {
      heading: "2. Entrada y precio",
      body: [
        "Sumamos al principal la entrada mínima típica del país para obtener el precio máximo de la vivienda.",
        "Por ejemplo, un mercado con 5% de entrada como Estados Unidos o el Reino Unido te permite comprar una vivienda ~5% más cara que un mercado con 30% como Singapur para el mismo ingreso, porque una mayor parte del precio se financia con deuda.",
        "No incluimos gastos de cierre, impuesto de transmisiones, IBI ni seguros en el cálculo de asequibilidad. Suma entre el 3% y el 10% adicional según el país.",
      ],
    },
    {
      heading: "3. Medianas por país",
      body: [
        "Los precios medianos de la vivienda proceden de la OECD Housing Database (4T 2024) y de la BIS Selected Property Price Series. Cuando faltan datos de la OECD, usamos los institutos nacionales de estadística.",
        "El ingreso disponible mediano del hogar viene de la OECD Income Distribution Database, completado con las agencias nacionales de estadística para los países no OECD.",
        "Ambos son valores medianos nacionales, por lo que las ciudades caras (Londres, Nueva York, Tokio, Sídney) están bastante por encima de la mediana nacional, a veces de 2 a 3×.",
      ],
    },
    {
      heading: "4. Tipos hipotecarios",
      body: [
        "Eurozona: media a 30 años fijo del Statistical Data Warehouse del BCE. Reino Unido: tipo fijo a 5 años con LTV del 75% del Bank of England. Estados Unidos: tipo fijo a 30 años de la serie H.15 de la Federal Reserve. Resto: bancos centrales nacionales.",
        "Los tipos son una foto del 1T 2025. Cambiarán; las comparaciones relativas de la calculadora se mantienen.",
      ],
    },
    {
      heading: "5. Entradas mínimas",
      body: [
        "Son los mínimos habituales de la política bancaria para compradores primerizos, no suelos legales:",
        "5% (Estados Unidos, Reino Unido, Canadá, Dinamarca) — 10% (Francia, Alemania, Bélgica, Países Bajos, Australia, Malasia) — 15% (Suecia, Noruega, Finlandia, Rumanía) — 20% (España, Portugal, Italia, Suiza, Austria, India, Chequia, Hungría) — 25% (Singapur, Israel) — 30% (China, Vietnam, Arabia Saudí, Egipto, Nigeria, Turquía).",
        "Algunos países permiten programas públicos que reducen estas cifras, como Help to Buy en el Reino Unido (ya finalizado), los préstamos FHA en Estados Unidos (3,5%) o los avales familiares en Australia. La calculadora usa los mínimos estándar de la banca privada.",
      ],
    },
    {
      heading: "6. Veredicto de asequibilidad",
      body: [
        "Clasificamos la ratio precio-ingreso mediana del país en cuatro tramos, siguiendo la convención de Demographia International Housing Affordability:",
        "Asequible (<4×) — Justo (4-6×) — Inasequible (6-10×) — Fuera de alcance (>10×).",
        "Estos umbrales reflejan normas históricas de largo plazo. La media OECD 1990-2010 fue de ~4,3×. Hoy la mayoría de los países ricos están claramente por encima.",
      ],
    },
    {
      heading: "7. Años para reunir la entrada",
      body: [
        "Entrada necesaria menos ahorros actuales, dividido entre el ahorro anual (ingreso × tu tasa de ahorro). Lineal: no asumimos rendimiento sobre los ahorros durante la acumulación.",
        "La tasa de ahorro mediana de los hogares OECD ronda el 7%. Más alta en Japón, Suiza y Escandinavia; más baja en el Reino Unido y los países anglosajones.",
      ],
    },
  ],
  sources: [
    {
      title: "OECD Affordable Housing Database",
      url: "https://www.oecd.org/housing/data/affordable-housing-database/",
      note: "Precios medianos de vivienda, ratios precio-ingreso y precio-alquiler. CC BY 4.0.",
    },
    {
      title: "BIS Selected Property Price Series",
      url: "https://www.bis.org/statistics/pp_selected.htm",
      note: "Precios trimestrales de vivienda para más de 60 países.",
    },
    {
      title: "OECD Income Distribution Database",
      url: "https://www.oecd.org/social/income-distribution-database.htm",
      note: "Ingreso disponible mediano del hogar.",
    },
    {
      title: "Federal Reserve FRED",
      url: "https://fred.stlouisfed.org/",
      note: "Precios de la vivienda en EE. UU. y tipos hipotecarios (serie H.15). Dominio público.",
    },
    {
      title: "Eurostat — Housing statistics",
      url: "https://ec.europa.eu/eurostat/web/housing-statistics",
      note: "Precios de vivienda en la UE y ratios alquiler-ingreso. CC BY 4.0.",
    },
    {
      title: "ECB Statistical Data Warehouse",
      url: "https://sdw.ecb.europa.eu/",
      note: "Tipos de interés hipotecarios en la zona euro por vencimiento.",
    },
    {
      title: "Bank of England",
      url: "https://www.bankofengland.co.uk/statistics",
      note: "Medias de hipotecas a tipo fijo en el Reino Unido por tramo LTV.",
    },
    {
      title: "Demographia International Housing Affordability",
      url: "http://demographia.com/dhi.pdf",
      note: "Umbrales de clasificación de asequibilidad (múltiplo mediano).",
    },
  ],
  assumptions: {
    heading: "Supuestos clave y advertencias",
    body: [
      "Hipoteca a tipo fijo de 30 años al tipo medio del país (puedes cambiar el plazo).",
      "Tope de DTI bancario del 36%: bancos más permisivos pueden llegar hasta el 43%.",
      "El principal no incluye gastos de cierre, impuestos ni seguros. Suma entre un 3% y un 10% adicional.",
      "Medianas nacionales, no urbanas. Londres, Nueva York, Tokio y Sídney están entre 2× y 3× sus medianas nacionales.",
      "Proyección de ahorro lineal; no se supone rendimiento sobre los ahorros durante la acumulación.",
      "Foto del 1T 2025. Los tipos cambian. Vuelve a ejecutar la calculadora cada cierto tiempo.",
    ],
  },
};

const de: MethodologyContent = {
  h1: "Methodik",
  intro: "Wie der Rechner aus Einkommen, Ersparnissen und Land einen erschwinglichen Immobilienpreis macht. Alle Annahmen aufgeführt.",
  sections: [
    {
      heading: "1. Maximale Hypothek aus Ihrem Einkommen",
      body: [
        "Die meisten Banken begrenzen die monatliche Hypothekenrate plus weitere Verbindlichkeiten auf 36% des Bruttomonatseinkommens (Front-end-DTI). Wir nutzen das als Obergrenze.",
        "Aus der maximalen Monatsrate rechnen wir mit der üblichen Annuitätenformel zum landesüblichen Hypothekenzins über 30 Jahre Laufzeit zurück und ermitteln so den möglichen Darlehensbetrag.",
      ],
    },
    {
      heading: "2. Eigenkapital und Preis",
      body: [
        "Wir addieren das landesübliche Mindest-Eigenkapital zum Darlehen, um den maximalen Kaufpreis zu erhalten.",
        "Beispiel: Ein 5%-Eigenkapitalmarkt wie die USA oder das Vereinigte Königreich erlaubt für dasselbe Einkommen einen rund 5% höheren Kaufpreis als ein 30%-Markt wie Singapur, weil ein größerer Anteil per Kredit finanziert wird.",
        "Wir berücksichtigen weder Kaufnebenkosten, Grunderwerbsteuer noch Grundsteuern oder Versicherungen in der Erschwinglichkeitsrechnung. Rechnen Sie je nach Land ca. 3-10% obendrauf.",
      ],
    },
    {
      heading: "3. Länder-Mediane",
      body: [
        "Die Median-Immobilienpreise stammen aus der OECD Housing Database (Q4 2024) und der BIS Selected Property Price Series. Wo OECD-Daten fehlen, nutzen wir nationale Statistikämter.",
        "Das mediane verfügbare Haushaltseinkommen kommt aus der OECD Income Distribution Database, ergänzt durch nationale Statistikämter bei Nicht-OECD-Ländern.",
        "Beide Werte sind nationale Mediane: Hochpreisstädte (London, New York, Tokio, Sydney) liegen weit über dem nationalen Median, teils um das 2- bis 3-Fache.",
      ],
    },
    {
      heading: "4. Hypothekenzinsen",
      body: [
        "Eurozone: Durchschnitt der 30-jährigen Festzinsen aus dem ECB Statistical Data Warehouse. Vereinigtes Königreich: 5-jähriger Festzins der Bank of England bei 75% LTV. USA: 30-jähriger Festzins der Federal Reserve (Serie H.15). Übrige Länder: nationale Zentralbanken.",
        "Die Zinssätze sind eine Momentaufnahme aus Q1 2025. Sie werden sich verändern, aber die relativen Vergleiche des Rechners bleiben tragfähig.",
      ],
    },
    {
      heading: "5. Mindest-Eigenkapital",
      body: [
        "Dies sind die üblichen Bank-Mindestquoten für Erstkäufer, nicht gesetzliche Untergrenzen:",
        "5% (USA, Vereinigtes Königreich, Kanada, Dänemark) — 10% (Frankreich, Deutschland, Belgien, Niederlande, Australien, Malaysia) — 15% (Schweden, Norwegen, Finnland, Rumänien) — 20% (Spanien, Portugal, Italien, Schweiz, Österreich, Indien, Tschechien, Ungarn) — 25% (Singapur, Israel) — 30% (China, Vietnam, Saudi-Arabien, Ägypten, Nigeria, Türkei).",
        "Einige Märkte kennen staatliche Programme, die diese Werte senken, etwa Help to Buy im Vereinigten Königreich (mittlerweile beendet), FHA-Darlehen in den USA (3,5%) oder Familienbürgschaften in Australien. In Deutschland reduziert ein Bausparvertrag de facto den Eigenkapitalbedarf. Der Rechner nutzt die Standard-Mindestquoten der Privatbanken.",
      ],
    },
    {
      heading: "6. Erschwinglichkeitsurteil",
      body: [
        "Wir teilen die mediane Preis-Einkommens-Ratio des Landes in vier Klassen ein, in Anlehnung an die Konvention von Demographia International Housing Affordability:",
        "Erschwinglich (<4×) — Anspruchsvoll (4-6×) — Nicht erschwinglich (6-10×) — Außer Reichweite (>10×).",
        "Diese Schwellen spiegeln langfristige historische Normen wider. Der OECD-Langfristdurchschnitt 1990-2010 lag bei rund 4,3×. Die meisten reichen Länder liegen heute deutlich darüber.",
      ],
    },
    {
      heading: "7. Jahre bis zum Eigenkapital",
      body: [
        "Benötigtes Eigenkapital minus aktuelle Ersparnisse, geteilt durch jährliche Ersparnisse (Einkommen × Ihre Sparquote). Linear: Wir unterstellen während der Ansparphase keine Renditen.",
        "Die mediane Haushaltssparquote der OECD liegt bei rund 7%. Höher in Japan, der Schweiz und Skandinavien, niedriger im Vereinigten Königreich und in angelsächsischen Ländern.",
      ],
    },
  ],
  sources: [
    {
      title: "OECD Affordable Housing Database",
      url: "https://www.oecd.org/housing/data/affordable-housing-database/",
      note: "Median-Immobilienpreise, Preis-Einkommen, Preis-Miete. CC BY 4.0.",
    },
    {
      title: "BIS Selected Property Price Series",
      url: "https://www.bis.org/statistics/pp_selected.htm",
      note: "Quartalsweise Wohnimmobilienpreise für über 60 Länder.",
    },
    {
      title: "OECD Income Distribution Database",
      url: "https://www.oecd.org/social/income-distribution-database.htm",
      note: "Medianes verfügbares Haushaltseinkommen.",
    },
    {
      title: "Federal Reserve FRED",
      url: "https://fred.stlouisfed.org/",
      note: "US-Hauspreise, Hypothekenzinsen (Serie H.15). Public Domain.",
    },
    {
      title: "Eurostat — Housing statistics",
      url: "https://ec.europa.eu/eurostat/web/housing-statistics",
      note: "EU-Hauspreise und Miete-Einkommens-Ratios. CC BY 4.0.",
    },
    {
      title: "ECB Statistical Data Warehouse",
      url: "https://sdw.ecb.europa.eu/",
      note: "Hypothekenzinsen der Eurozone nach Laufzeit.",
    },
    {
      title: "Bank of England",
      url: "https://www.bankofengland.co.uk/statistics",
      note: "Durchschnittliche Festzinshypotheken im Vereinigten Königreich nach LTV-Band.",
    },
    {
      title: "Demographia International Housing Affordability",
      url: "http://demographia.com/dhi.pdf",
      note: "Schwellenwerte zur Erschwinglichkeitsklassifikation (Median-Multiple).",
    },
  ],
  assumptions: {
    heading: "Wichtige Annahmen und Einschränkungen",
    body: [
      "30-jährige Festzinshypothek zum Landesdurchschnittssatz (die Laufzeit lässt sich anpassen).",
      "DTI-Obergrenze der Bank bei 36%: kulantere Banken erlauben bis zu 43%.",
      "Keine Kaufnebenkosten, Steuern oder Versicherungen im Darlehensbetrag enthalten. 3-10% obendrauf rechnen.",
      "Nationale Mediane, keine Stadtwerte. London, New York, Tokio und Sydney liegen beim 2- bis 3-Fachen ihrer nationalen Mediane.",
      "Lineare Sparprojektion: Während der Ansparphase werden keine Erträge unterstellt.",
      "Stichtag Q1 2025. Zinssätze ändern sich. Den Rechner regelmäßig neu starten.",
    ],
  },
};

const fr: MethodologyContent = {
  h1: "Méthodologie",
  intro: "Comment la calculatrice transforme votre revenu, votre épargne et votre pays en un prix de logement abordable. Toutes les hypothèses sont listées.",
  sections: [
    {
      heading: "1. Emprunt maximal à partir de votre revenu",
      body: [
        "La plupart des banques plafonnent la mensualité de crédit immobilier plus les autres dettes à 36% du revenu mensuel brut (taux d'endettement front-end). C'est notre plafond.",
        "À partir de cette mensualité maximale, nous remontons par la formule d'amortissement classique au taux d'emprunt moyen du pays sur une durée de 30 ans pour trouver le capital empruntable.",
      ],
    },
    {
      heading: "2. Apport et prix",
      body: [
        "Nous ajoutons l'apport minimal typique du pays au capital empruntable pour obtenir le prix maximum.",
        "Par exemple, un marché à 5% d'apport comme les États-Unis ou le Royaume-Uni vous permet d'acheter ~5% de logement en plus qu'un marché à 30% comme Singapour pour le même revenu, parce qu'une plus grande part du prix est financée par la dette.",
        "Nous n'incluons ni frais de notaire, ni droits d'enregistrement, ni taxe foncière, ni assurance dans le calcul d'accessibilité. Comptez 3 à 10% en plus selon le pays.",
      ],
    },
    {
      heading: "3. Médianes par pays",
      body: [
        "Les prix médians proviennent de la OECD Housing Database (T4 2024) et de la BIS Selected Property Price Series. Quand les données OECD manquent, nous utilisons les instituts nationaux de statistique.",
        "Le revenu disponible médian des ménages vient de la OECD Income Distribution Database, complété par les agences nationales pour les pays non-OECD.",
        "Les deux chiffres sont des médianes nationales, donc les villes chères (Londres, New York, Tokyo, Sydney) sont nettement au-dessus de leur médiane nationale, parfois de 2 à 3×.",
      ],
    },
    {
      heading: "4. Taux d'emprunt",
      body: [
        "Zone euro : moyenne du taux fixe 30 ans du Statistical Data Warehouse de la BCE. Royaume-Uni : taux fixe 5 ans à 75% LTV de la Bank of England. États-Unis : taux fixe 30 ans de la Federal Reserve (série H.15). Autres : banques centrales nationales.",
        "Les taux sont des relevés du T1 2025. Ils évolueront ; les comparaisons relatives de la calculatrice restent valables.",
      ],
    },
    {
      heading: "5. Apports minimaux",
      body: [
        "Ce sont les minimums usuels de la politique bancaire pour les primo-accédants, pas des planchers légaux :",
        "5% (États-Unis, Royaume-Uni, Canada, Danemark) — 10% (France, Allemagne, Belgique, Pays-Bas, Australie, Malaisie) — 15% (Suède, Norvège, Finlande, Roumanie) — 20% (Espagne, Portugal, Italie, Suisse, Autriche, Inde, Tchéquie, Hongrie) — 25% (Singapour, Israël) — 30% (Chine, Vietnam, Arabie saoudite, Égypte, Nigeria, Turquie).",
        "Certains marchés disposent de dispositifs publics qui abaissent ces seuils, par exemple Help to Buy au Royaume-Uni (terminé), les prêts FHA aux États-Unis (3,5%) ou les garanties familiales en Australie. La calculatrice utilise les minimums standards des banques privées.",
      ],
    },
    {
      heading: "6. Verdict d'accessibilité",
      body: [
        "Nous classons le ratio prix-revenu médian du pays en quatre catégories, selon la convention de Demographia International Housing Affordability :",
        "Abordable (<4×) — Tendu (4-6×) — Inabordable (6-10×) — Hors d'atteinte (>10×).",
        "Ces seuils reflètent des normes historiques de long terme. La moyenne OECD sur 1990-2010 était d'environ 4,3×. La plupart des pays riches sont aujourd'hui nettement au-dessus.",
      ],
    },
    {
      heading: "7. Années pour constituer l'apport",
      body: [
        "Apport nécessaire moins épargne actuelle, divisé par l'épargne annuelle (revenu × votre taux d'épargne). Linéaire ; nous ne supposons aucun rendement sur l'épargne pendant la phase d'accumulation.",
        "Le taux d'épargne médian des ménages OECD est d'environ 7%. Plus élevé au Japon, en Suisse, en Scandinavie ; plus faible au Royaume-Uni et dans les pays anglo-saxons.",
      ],
    },
  ],
  sources: [
    {
      title: "OECD Affordable Housing Database",
      url: "https://www.oecd.org/housing/data/affordable-housing-database/",
      note: "Prix médians, prix-revenu, prix-loyer. CC BY 4.0.",
    },
    {
      title: "BIS Selected Property Price Series",
      url: "https://www.bis.org/statistics/pp_selected.htm",
      note: "Prix immobiliers résidentiels trimestriels pour plus de 60 pays.",
    },
    {
      title: "OECD Income Distribution Database",
      url: "https://www.oecd.org/social/income-distribution-database.htm",
      note: "Revenu disponible médian des ménages.",
    },
    {
      title: "Federal Reserve FRED",
      url: "https://fred.stlouisfed.org/",
      note: "Prix immobiliers américains et taux d'emprunt (série H.15). Domaine public.",
    },
    {
      title: "Eurostat — Housing statistics",
      url: "https://ec.europa.eu/eurostat/web/housing-statistics",
      note: "Prix de l'immobilier et ratios loyer-revenu en UE. CC BY 4.0.",
    },
    {
      title: "ECB Statistical Data Warehouse",
      url: "https://sdw.ecb.europa.eu/",
      note: "Taux d'intérêt des crédits immobiliers de la zone euro par maturité.",
    },
    {
      title: "Bank of England",
      url: "https://www.bankofengland.co.uk/statistics",
      note: "Moyennes des crédits à taux fixe au Royaume-Uni par tranche LTV.",
    },
    {
      title: "Demographia International Housing Affordability",
      url: "http://demographia.com/dhi.pdf",
      note: "Seuils de classification de l'accessibilité (multiple médian).",
    },
  ],
  assumptions: {
    heading: "Hypothèses clés et limites",
    body: [
      "Crédit à taux fixe sur 30 ans au taux moyen du pays (vous pouvez changer la durée).",
      "Plafond d'endettement bancaire à 36% : les banques plus souples peuvent aller jusqu'à 43%.",
      "Pas de frais de notaire, taxes ou assurances dans le capital. Comptez 3 à 10% en plus.",
      "Médianes nationales et non urbaines. Londres, New York, Tokyo et Sydney sont 2 à 3× au-dessus de leur médiane nationale.",
      "Projection d'épargne linéaire : aucun rendement supposé sur l'épargne pendant l'accumulation.",
      "Cliché du T1 2025. Les taux changent. Relancez la calculatrice régulièrement.",
    ],
  },
};

const it: MethodologyContent = {
  h1: "Metodologia",
  intro: "Come il calcolatore trasforma reddito, risparmi e paese in un prezzo di casa accessibile. Tutte le ipotesi sono elencate.",
  sections: [
    {
      heading: "1. Mutuo massimo dal tuo reddito",
      body: [
        "La maggior parte delle banche limita la rata mensile del mutuo più gli altri debiti al 36% del reddito mensile lordo (rapporto rata-reddito front-end). Lo usiamo come tetto.",
        "Partendo dalla rata massima, ricalcoliamo a ritroso con la formula classica di ammortamento al tasso medio nazionale su una durata di 30 anni per trovare il capitale che puoi prendere a prestito.",
      ],
    },
    {
      heading: "2. Anticipo e prezzo",
      body: [
        "Aggiungiamo l'anticipo minimo tipico del paese al capitale per ottenere il prezzo massimo della casa.",
        "Ad esempio, un mercato con 5% di anticipo come Stati Uniti o Regno Unito permette di comprare ~5% di casa in più rispetto a un mercato con 30% come Singapore a parità di reddito, perché una quota maggiore del prezzo è finanziata a debito.",
        "Non includiamo spese di rogito, imposte di registro, IMU o assicurazioni nel calcolo. Aggiungi un 3-10% in più a seconda del paese.",
      ],
    },
    {
      heading: "3. Mediane per paese",
      body: [
        "I prezzi mediani provengono dalla OECD Housing Database (Q4 2024) e dalla BIS Selected Property Price Series. Dove mancano i dati OECD, usiamo gli istituti nazionali di statistica.",
        "Il reddito disponibile mediano viene dalla OECD Income Distribution Database, integrato dalle agenzie nazionali per i paesi non OECD.",
        "Entrambi i numeri sono mediane nazionali, quindi le città costose (Londra, New York, Tokyo, Sydney) sono molto sopra la mediana nazionale, a volte 2-3×.",
      ],
    },
    {
      heading: "4. Tassi sui mutui",
      body: [
        "Eurozona: media del tasso fisso 30 anni dello Statistical Data Warehouse della BCE. Regno Unito: tasso fisso 5 anni al 75% LTV della Bank of England. Stati Uniti: tasso fisso 30 anni della Federal Reserve (serie H.15). Altri: banche centrali nazionali.",
        "I tassi sono una fotografia del Q1 2025. Cambieranno; i confronti relativi del calcolatore restano validi.",
      ],
    },
    {
      heading: "5. Anticipi minimi",
      body: [
        "Sono i minimi tipici delle politiche bancarie per chi compra la prima casa, non soglie di legge:",
        "5% (Stati Uniti, Regno Unito, Canada, Danimarca) — 10% (Francia, Germania, Belgio, Paesi Bassi, Australia, Malesia) — 15% (Svezia, Norvegia, Finlandia, Romania) — 20% (Spagna, Portogallo, Italia, Svizzera, Austria, India, Cechia, Ungheria) — 25% (Singapore, Israele) — 30% (Cina, Vietnam, Arabia Saudita, Egitto, Nigeria, Turchia).",
        "Alcuni mercati hanno strumenti pubblici che riducono questi valori, ad esempio Help to Buy nel Regno Unito (ora chiuso), i prestiti FHA negli Stati Uniti (3,5%) o le garanzie familiari in Australia. Il calcolatore usa i minimi standard delle banche private.",
      ],
    },
    {
      heading: "6. Verdetto di accessibilità",
      body: [
        "Classifichiamo il rapporto prezzo-reddito mediano del paese in quattro fasce, seguendo la convenzione Demographia International Housing Affordability:",
        "Accessibile (<4×) — Teso (4-6×) — Non accessibile (6-10×) — Fuori portata (>10×).",
        "Queste soglie riflettono norme storiche di lungo periodo. La media OECD 1990-2010 era circa 4,3×. La maggior parte dei paesi ricchi è oggi ben sopra.",
      ],
    },
    {
      heading: "7. Anni per l'anticipo",
      body: [
        "Anticipo necessario meno risparmi attuali, diviso per il risparmio annuo (reddito × tuo tasso di risparmio). Lineare; non assumiamo rendimenti sui risparmi durante l'accumulo.",
        "Il tasso di risparmio mediano OECD si aggira intorno al 7%. Più alto in Giappone, Svizzera e Scandinavia; più basso nel Regno Unito e nei paesi anglosassoni.",
      ],
    },
  ],
  sources: [
    {
      title: "OECD Affordable Housing Database",
      url: "https://www.oecd.org/housing/data/affordable-housing-database/",
      note: "Prezzi mediani, prezzo-reddito, prezzo-affitto. CC BY 4.0.",
    },
    {
      title: "BIS Selected Property Price Series",
      url: "https://www.bis.org/statistics/pp_selected.htm",
      note: "Prezzi residenziali trimestrali per oltre 60 paesi.",
    },
    {
      title: "OECD Income Distribution Database",
      url: "https://www.oecd.org/social/income-distribution-database.htm",
      note: "Reddito disponibile mediano delle famiglie.",
    },
    {
      title: "Federal Reserve FRED",
      url: "https://fred.stlouisfed.org/",
      note: "Prezzi case e tassi sui mutui USA (serie H.15). Pubblico dominio.",
    },
    {
      title: "Eurostat — Housing statistics",
      url: "https://ec.europa.eu/eurostat/web/housing-statistics",
      note: "Prezzi UE delle case e rapporti affitto-reddito. CC BY 4.0.",
    },
    {
      title: "ECB Statistical Data Warehouse",
      url: "https://sdw.ecb.europa.eu/",
      note: "Tassi di interesse sui mutui dell'eurozona per scadenza.",
    },
    {
      title: "Bank of England",
      url: "https://www.bankofengland.co.uk/statistics",
      note: "Medie dei mutui a tasso fisso del Regno Unito per fascia LTV.",
    },
    {
      title: "Demographia International Housing Affordability",
      url: "http://demographia.com/dhi.pdf",
      note: "Soglie di classificazione dell'accessibilità (multiplo mediano).",
    },
  ],
  assumptions: {
    heading: "Ipotesi chiave e avvertenze",
    body: [
      "Mutuo a tasso fisso 30 anni al tasso medio del paese (puoi cambiare la durata).",
      "Tetto rata-reddito al 36%: banche più permissive arrivano fino al 43%.",
      "Nessuna spesa di rogito, imposta o assicurazione nel capitale. Aggiungi un 3-10%.",
      "Mediane nazionali, non urbane. Londra, New York, Tokyo e Sydney sono 2-3× le mediane nazionali.",
      "Proiezione di risparmio lineare; nessun rendimento atteso durante l'accumulo.",
      "Fotografia del Q1 2025. I tassi cambiano. Rilancia il calcolatore periodicamente.",
    ],
  },
};

const pt: MethodologyContent = {
  h1: "Metodologia",
  intro: "Como a calculadora transforma o seu rendimento, as suas poupanças e o seu país num preço de habitação acessível. Todas as premissas listadas.",
  sections: [
    {
      heading: "1. Empréstimo máximo a partir do seu rendimento",
      body: [
        "A maior parte dos bancos limita a prestação mensal do crédito habitação mais outras dívidas a 36% do rendimento mensal bruto (rácio dívida-rendimento front-end). Usamos esse valor como tecto.",
        "A partir dessa prestação máxima, aplicamos a fórmula clássica de amortização à taxa média do país a 30 anos para obter o capital que pode pedir.",
      ],
    },
    {
      heading: "2. Entrada e preço",
      body: [
        "Somamos a entrada mínima típica do país ao capital emprestado para obter o preço máximo da habitação.",
        "Por exemplo, um mercado com 5% de entrada como Estados Unidos ou Reino Unido permite comprar cerca de 5% mais habitação do que um mercado com 30% como Singapura para o mesmo rendimento, porque uma maior parte do preço é financiada com dívida.",
        "Não incluímos custos de escritura, imposto de selo, IMI nem seguros no cálculo de acessibilidade. Some entre 3% e 10% em cima, conforme o país.",
      ],
    },
    {
      heading: "3. Medianas por país",
      body: [
        "Os preços medianos vêm da OECD Housing Database (4T 2024) e da BIS Selected Property Price Series. Quando faltam dados da OECD, recorremos aos institutos nacionais de estatística.",
        "O rendimento disponível mediano dos agregados vem da OECD Income Distribution Database, complementado pelas agências nacionais para países fora da OECD.",
        "Ambos são valores medianos nacionais, por isso as cidades caras (Londres, Nova Iorque, Tóquio, Sydney) ficam muito acima da mediana nacional, por vezes 2-3×.",
      ],
    },
    {
      heading: "4. Taxas de juro do crédito habitação",
      body: [
        "Zona euro: média de taxa fixa a 30 anos do Statistical Data Warehouse do BCE. Reino Unido: taxa fixa a 5 anos com 75% LTV da Bank of England. Estados Unidos: taxa fixa a 30 anos da Federal Reserve (série H.15). Outros: bancos centrais nacionais.",
        "As taxas são um retrato do 1T 2025. Vão variar; as comparações relativas da calculadora mantêm-se.",
      ],
    },
    {
      heading: "5. Entradas mínimas",
      body: [
        "São os mínimos habituais da política bancária para quem compra a primeira casa, não pisos legais:",
        "5% (Estados Unidos, Reino Unido, Canadá, Dinamarca) — 10% (França, Alemanha, Bélgica, Países Baixos, Austrália, Malásia) — 15% (Suécia, Noruega, Finlândia, Roménia) — 20% (Espanha, Portugal, Itália, Suíça, Áustria, Índia, Chéquia, Hungria) — 25% (Singapura, Israel) — 30% (China, Vietname, Arábia Saudita, Egito, Nigéria, Turquia).",
        "Alguns mercados têm programas públicos que reduzem estes valores, como Help to Buy no Reino Unido (já encerrado), os empréstimos FHA nos Estados Unidos (3,5%) ou as garantias familiares na Austrália. A calculadora usa os mínimos padrão da banca privada.",
      ],
    },
    {
      heading: "6. Veredicto de acessibilidade",
      body: [
        "Classificamos o rácio preço-rendimento mediano do país em quatro escalões, seguindo a convenção da Demographia International Housing Affordability:",
        "Acessível (<4×) — Apertado (4-6×) — Inacessível (6-10×) — Fora de alcance (>10×).",
        "Estes limiares refletem normas históricas de longo prazo. A média OECD entre 1990 e 2010 foi de cerca de 4,3×. A maioria dos países ricos está hoje claramente acima.",
      ],
    },
    {
      heading: "7. Anos para juntar a entrada",
      body: [
        "Entrada necessária menos poupanças atuais, dividido pela poupança anual (rendimento × a sua taxa de poupança). Linear; não assumimos rendimento sobre as poupanças durante a acumulação.",
        "A taxa de poupança mediana das famílias OECD ronda os 7%. Mais alta no Japão, Suíça e Escandinávia; mais baixa no Reino Unido e nos países anglo-saxónicos.",
      ],
    },
  ],
  sources: [
    {
      title: "OECD Affordable Housing Database",
      url: "https://www.oecd.org/housing/data/affordable-housing-database/",
      note: "Preços medianos, preço-rendimento, preço-renda. CC BY 4.0.",
    },
    {
      title: "BIS Selected Property Price Series",
      url: "https://www.bis.org/statistics/pp_selected.htm",
      note: "Preços trimestrais de habitação para mais de 60 países.",
    },
    {
      title: "OECD Income Distribution Database",
      url: "https://www.oecd.org/social/income-distribution-database.htm",
      note: "Rendimento disponível mediano das famílias.",
    },
    {
      title: "Federal Reserve FRED",
      url: "https://fred.stlouisfed.org/",
      note: "Preços de habitação e taxas de crédito nos EUA (série H.15). Domínio público.",
    },
    {
      title: "Eurostat — Housing statistics",
      url: "https://ec.europa.eu/eurostat/web/housing-statistics",
      note: "Preços de habitação e rácios renda-rendimento na UE. CC BY 4.0.",
    },
    {
      title: "ECB Statistical Data Warehouse",
      url: "https://sdw.ecb.europa.eu/",
      note: "Taxas de juro de crédito habitação na zona euro por maturidade.",
    },
    {
      title: "Bank of England",
      url: "https://www.bankofengland.co.uk/statistics",
      note: "Médias de crédito a taxa fixa no Reino Unido por escalão de LTV.",
    },
    {
      title: "Demographia International Housing Affordability",
      url: "http://demographia.com/dhi.pdf",
      note: "Limiares de classificação de acessibilidade (múltiplo mediano).",
    },
  ],
  assumptions: {
    heading: "Premissas e ressalvas principais",
    body: [
      "Crédito a taxa fixa a 30 anos à taxa média do país (pode alterar o prazo).",
      "Tecto de DTI bancário a 36%: bancos mais permissivos podem ir até 43%.",
      "Sem custos de escritura, impostos ou seguros no capital. Some entre 3% e 10%.",
      "Medianas nacionais, não urbanas. Londres, Nova Iorque, Tóquio e Sydney estão 2-3× acima das medianas nacionais.",
      "Projeção de poupança linear; nenhum rendimento assumido durante a acumulação.",
      "Retrato do 1T 2025. As taxas mudam. Volte a correr a calculadora de tempos a tempos.",
    ],
  },
};

const ja: MethodologyContent = {
  h1: "計算方法",
  intro: "収入・貯蓄・国の情報から、購入可能な住宅価格をどう導いているのか。すべての前提を明示します。",
  sections: [
    {
      heading: "1. 収入から決まる住宅ローン上限",
      body: [
        "多くの銀行は、月々のローン返済額とその他の債務を合わせて月収（額面）の 36%（フロントエンド DTI）に制限します。これを上限値として使います。",
        "上限となる月返済額から、各国の平均住宅ローン金利と 30 年の返済期間を用いて、標準的な元利均等返済の式を逆算し、借入可能な元本を求めます。",
      ],
    },
    {
      heading: "2. 頭金と価格",
      body: [
        "国別に一般的な最低頭金率を借入元本に加算し、購入可能な最大価格を算出します。",
        "例えば、頭金 5% のアメリカ合衆国やイギリスのような市場では、同じ収入でもシンガポールのような頭金 30% の市場より約 5% 高い物件が買えます。価格に占める借入の比率が大きいためです。",
        "登記費用、印紙税、固定資産税、保険料は試算に含めていません。国により 3〜10% 程度を上乗せして考えてください。",
      ],
    },
    {
      heading: "3. 国別中央値",
      body: [
        "住宅価格の中央値は OECD Housing Database（2024 年第 4 四半期）と BIS Selected Property Price Series によります。OECD のデータが欠ける場合は各国の統計局を用います。",
        "世帯可処分所得の中央値は OECD Income Distribution Database を主体とし、非 OECD 国は各国統計機関で補完しています。",
        "いずれも全国の中央値であり、ロンドン、ニューヨーク、東京、シドニーといった高価格都市は全国中央値を大きく上回ります。2〜3 倍になることもあります。",
      ],
    },
    {
      heading: "4. 住宅ローン金利",
      body: [
        "ユーロ圏：ECB Statistical Data Warehouse の 30 年固定平均。イギリス：Bank of England の LTV75% 5 年固定。アメリカ合衆国：Federal Reserve の H.15 30 年固定。その他：各国の中央銀行。",
        "金利は 2025 年第 1 四半期時点のスナップショットです。金利は動きますが、相対的な比較は維持されます。",
      ],
    },
    {
      heading: "5. 最低頭金",
      body: [
        "以下は、初めて住宅を購入する人に対して銀行が一般的に求める最低水準で、法律上の下限ではありません：",
        "5%（アメリカ合衆国、イギリス、カナダ、デンマーク） — 10%（フランス、ドイツ、ベルギー、オランダ、オーストラリア、マレーシア） — 15%（スウェーデン、ノルウェー、フィンランド、ルーマニア） — 20%（スペイン、ポルトガル、イタリア、スイス、オーストリア、インド、チェコ、ハンガリー） — 25%（シンガポール、イスラエル） — 30%（中国、ベトナム、サウジアラビア、エジプト、ナイジェリア、トルコ）。",
        "一部の国にはこれを引き下げる公的制度があります。例として、イギリスの Help to Buy（現在は終了）、アメリカの FHA ローン（3.5%）、オーストラリアの家族保証スキームなどです。本計算機は民間銀行の標準的な最低頭金を用います。",
      ],
    },
    {
      heading: "6. 手の届きやすさの判定",
      body: [
        "Demographia International Housing Affordability の慣行に従い、各国の住宅価格年収倍率の中央値を 4 段階に分類します：",
        "手が届く（4× 未満） — 背伸び（4〜6×） — 手が届かない（6〜10×） — 完全に手が出ない（10× 超）。",
        "これらの閾値は長期の歴史的水準を反映しています。OECD の 1990〜2010 年平均はおよそ 4.3× でした。現在は多くの先進国がそれを大きく上回っています。",
      ],
    },
    {
      heading: "7. 頭金が貯まるまでの年数",
      body: [
        "必要な頭金から現在の貯蓄を引き、年間貯蓄額（収入 × 貯蓄率）で割って算出します。線形計算で、積み立て期間中の運用益は仮定しません。",
        "OECD の家計貯蓄率の中央値はおよそ 7% です。日本、スイス、北欧では高く、イギリスや英米圏では低くなります。",
      ],
    },
  ],
  sources: [
    {
      title: "OECD Affordable Housing Database",
      url: "https://www.oecd.org/housing/data/affordable-housing-database/",
      note: "住宅価格の中央値、住宅価格年収倍率、価格-家賃比。CC BY 4.0。",
    },
    {
      title: "BIS Selected Property Price Series",
      url: "https://www.bis.org/statistics/pp_selected.htm",
      note: "60 か国超の住宅価格四半期データ。",
    },
    {
      title: "OECD Income Distribution Database",
      url: "https://www.oecd.org/social/income-distribution-database.htm",
      note: "世帯可処分所得の中央値。",
    },
    {
      title: "Federal Reserve FRED",
      url: "https://fred.stlouisfed.org/",
      note: "アメリカ合衆国の住宅価格と住宅ローン金利（H.15 シリーズ）。パブリックドメイン。",
    },
    {
      title: "Eurostat — Housing statistics",
      url: "https://ec.europa.eu/eurostat/web/housing-statistics",
      note: "EU の住宅価格と家賃-所得比。CC BY 4.0。",
    },
    {
      title: "ECB Statistical Data Warehouse",
      url: "https://sdw.ecb.europa.eu/",
      note: "ユーロ圏の住宅ローン金利（期間別）。",
    },
    {
      title: "Bank of England",
      url: "https://www.bankofengland.co.uk/statistics",
      note: "イギリスの LTV 別固定金利住宅ローン平均。",
    },
    {
      title: "Demographia International Housing Affordability",
      url: "http://demographia.com/dhi.pdf",
      note: "手の届きやすさの分類閾値（中央値倍率）。",
    },
  ],
  assumptions: {
    heading: "主な前提と注意点",
    body: [
      "30 年固定金利、各国の平均金利を使用（期間は変更できます）。",
      "銀行 DTI 上限は 36%。緩い銀行では 43% まで認める場合があります。",
      "元本に登記費用・税金・保険は含みません。3〜10% を上乗せしてください。",
      "全国の中央値であり、都市別ではありません。ロンドン、ニューヨーク、東京、シドニーは全国中央値の 2〜3 倍に達します。",
      "貯蓄は線形に積み上げる前提で、積立中の運用益は見込みません。",
      "2025 年第 1 四半期時点の値です。金利は変動するため、定期的に再計算してください。",
    ],
  },
};

const zhCn: MethodologyContent = {
  h1: "方法说明",
  intro: "计算器如何把你的收入、储蓄和所在国家变成一个可负担的房价。所有假设公开列出。",
  sections: [
    {
      heading: "1. 由收入决定的最高贷款额",
      body: [
        "大多数银行将每月房贷加上其他债务限制在月度税前收入的 36%（front-end DTI）。我们以此作为上限。",
        "从这一最高月供出发，按各国的平均房贷利率和 30 年期限，套用标准的等额本息公式反推，得到你能借到的本金。",
      ],
    },
    {
      heading: "2. 首付与房价",
      body: [
        "在贷款本金上加上该国典型的最低首付比例，得到能负担的最高房价。",
        "举例来说，5% 首付的美国或英国市场比 30% 首付的新加坡市场，在同样收入下大约能多买 5% 的房子，因为房价中借贷部分更大。",
        "可负担测算不包含交易税、印花税、地税或保险。视国家不同，再加 3%~10% 较为稳妥。",
      ],
    },
    {
      heading: "3. 各国中位数",
      body: [
        "房价中位数来自 OECD Housing Database（2024 年第四季度）和 BIS Selected Property Price Series。OECD 缺数据时使用各国统计局。",
        "家庭可支配收入中位数来自 OECD Income Distribution Database，非 OECD 国家用各国统计机构数据补充。",
        "两者都是全国中位数，因此伦敦、纽约、东京、悉尼等高房价城市远高于全国中位数，有时是 2 到 3 倍。",
      ],
    },
    {
      heading: "4. 房贷利率",
      body: [
        "欧元区：欧洲央行 Statistical Data Warehouse 的 30 年固定利率均值。英国：Bank of England 75% LTV 的 5 年固定利率。美国：Federal Reserve H.15 系列的 30 年固定利率。其他：各国央行。",
        "利率取自 2025 年第一季度。会发生变化；但计算器的相对比较仍成立。",
      ],
    },
    {
      heading: "5. 最低首付",
      body: [
        "以下是面向首次购房者的银行常规最低要求，并非法律下限：",
        "5%（美国、英国、加拿大、丹麦） — 10%（法国、德国、比利时、荷兰、澳大利亚、马来西亚） — 15%（瑞典、挪威、芬兰、罗马尼亚） — 20%（西班牙、葡萄牙、意大利、瑞士、奥地利、印度、捷克、匈牙利） — 25%（新加坡、以色列） — 30%（中国、越南、沙特阿拉伯、埃及、尼日利亚、土耳其）。",
        "部分国家有政府计划可降低这一比例，例如英国的 Help to Buy（已结束）、美国的 FHA 贷款（3.5%）、澳大利亚的家庭担保计划等。计算器采用商业银行的标准最低首付。",
      ],
    },
    {
      heading: "6. 可负担性判断",
      body: [
        "按照 Demographia International Housing Affordability 的惯例，将各国房价收入比中位数划分为四档：",
        "可负担（小于 4×） — 紧张（4-6×） — 不可负担（6-10×） — 遥不可及（大于 10×）。",
        "这些阈值反映长期的历史水平。OECD 1990-2010 年的长期均值约为 4.3×。如今多数富裕国家已明显高于这一水平。",
      ],
    },
    {
      heading: "7. 凑够首付所需年数",
      body: [
        "用所需首付减去当前储蓄，再除以每年新增储蓄（收入 × 储蓄率）。采用线性测算，不假设积累期内的投资回报。",
        "OECD 家庭储蓄率中位数约为 7%。日本、瑞士、北欧偏高；英国和英美国家偏低。",
      ],
    },
  ],
  sources: [
    {
      title: "OECD Affordable Housing Database",
      url: "https://www.oecd.org/housing/data/affordable-housing-database/",
      note: "房价中位数、房价收入比、房价租金比。CC BY 4.0。",
    },
    {
      title: "BIS Selected Property Price Series",
      url: "https://www.bis.org/statistics/pp_selected.htm",
      note: "60 多个国家的住宅价格季度数据。",
    },
    {
      title: "OECD Income Distribution Database",
      url: "https://www.oecd.org/social/income-distribution-database.htm",
      note: "家庭可支配收入中位数。",
    },
    {
      title: "Federal Reserve FRED",
      url: "https://fred.stlouisfed.org/",
      note: "美国房价与房贷利率（H.15 系列）。公有领域。",
    },
    {
      title: "Eurostat — Housing statistics",
      url: "https://ec.europa.eu/eurostat/web/housing-statistics",
      note: "欧盟房价与租金收入比。CC BY 4.0。",
    },
    {
      title: "ECB Statistical Data Warehouse",
      url: "https://sdw.ecb.europa.eu/",
      note: "欧元区按期限划分的房贷利率。",
    },
    {
      title: "Bank of England",
      url: "https://www.bankofengland.co.uk/statistics",
      note: "英国按 LTV 区间划分的固定利率房贷均值。",
    },
    {
      title: "Demographia International Housing Affordability",
      url: "http://demographia.com/dhi.pdf",
      note: "可负担性的分级阈值（中位数倍数）。",
    },
  ],
  assumptions: {
    heading: "关键假设与注意事项",
    body: [
      "30 年固定利率房贷，按各国平均利率（年限可调整）。",
      "银行 DTI 上限设为 36%；较宽松的银行可放宽到 43%。",
      "本金不含交易税、税费或保险。请额外加 3%~10%。",
      "采用全国中位数，而非城市数据。伦敦、纽约、东京、悉尼通常是其全国中位数的 2 到 3 倍。",
      "线性储蓄推算；积累期间不假设投资回报。",
      "数据为 2025 年第一季度快照。利率会变。请定期重新运行计算器。",
    ],
  },
};

export const METHODOLOGY: Readonly<Record<LocaleCode, MethodologyContent>> = {
  en, es, de, fr, "zh-cn": zhCn, ja, pt, it,
};
