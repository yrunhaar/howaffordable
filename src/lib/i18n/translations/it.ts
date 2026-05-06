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
    headlineTemplate: "Puoi permetterti una casa in {country}?",
    verdictAffordable: "Accessibile rispetto agli standard storici",
    verdictStretch: "Al limite, sopra la norma storica",
    verdictUnaffordable: "Inaccessibile secondo la classificazione di Demographia",
    verdictOutOfReach: "Fuori portata per la famiglia mediana",
    bodyTemplate:
      "La casa mediana in {country} costa {price} e la famiglia mediana guadagna {income}, un rapporto prezzo/reddito di {ratio}×. Posizione {rank} su {total} per costo della casa rispetto al reddito.",
    statMedianHomeLabel: "Prezzo mediano della casa",
    statMedianHomeSub: "{anchor}",
    statMedianIncomeLabel: "Reddito mediano del nucleo",
    statMedianIncomeSub: "al netto delle tasse",
    statMortgageLabel: "Tasso medio del mutuo",
    statMortgageSub: "anticipo min. {pct} %",
    historyHeading: "Come è cambiata l'accessibilità della casa in {country}",
    historyBodyTemplate:
      "Il rapporto prezzo/reddito ha toccato un massimo di {peakValue}× nel {peakYear}. Oggi: {todayValue}×. {shift} La media OECD nello stesso periodo è passata da {oecdStart}× nel {oecdYear} a {oecdToday}× oggi.",
    historyShiftTemplate:
      "Se nel {startYear} avessi avuto il reddito di oggi, avresti potuto permetterti il {pct} % del potere d'acquisto attuale per la casa mediana del paese.",
    calculatorHeadingTemplate: "Quanto è accessibile {country} per te?",
    calculatorSubheadingTemplate:
      "Inserisci reddito e risparmi per vedere il tuo prezzo massimo personale, gli anni per l'anticipo e il confronto con la mediana di {country}.",
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
    narrativeHeading: "Cosa significa",
    narrativeBody: "Il tuo prezzo massimo è il tetto che la banca ti riconoscerebbe sul tuo reddito al tasso medio del paese, con il test standard del 36 % di rata sul reddito. La fascia di verdetto guarda al prezzo mediano della casa del paese come multiplo del tuo reddito, secondo la classificazione di Demographia. Insieme dicono quanto potresti ottenere TU come mutuo e come si colloca il mercato del paese rispetto al tuo reddito. Quando i due numeri sono vicini, sei al limite della mediana e hai poco margine di sicurezza.",
    burdenHeading: "Peso del mutuo rispetto alle soglie delle banche",
    burdenIntro: "La maggior parte delle banche limita la rata al 36 % del reddito lordo. Alcune arrivano al 43 %. Sotto il 28 % è comodo; sopra la soglia il mutuo viene rifiutato o approvato solo con condizioni.",
    burdenComfortable: "Comodo: ben sotto il tetto DTI della banca, hai margine per riparazioni, risparmio e rialzi dei tassi.",
    burdenManageable: "Gestibile: sotto il tetto del 36 %, ma con margine limitato per gli imprevisti.",
    burdenStretched: "Tirato: oltre il tetto standard del 36 %. Alcuni istituti arrivano al 43 %, ma ogni punto di rialzo dei tassi stringe il budget.",
    burdenOverLimit: "Oltre la linea: la maggior parte degli istituti non approverà a questo livello. Servirà una casa più economica, un anticipo più alto o una durata più lunga.",
    burdenYouLabel: "Tu",
    historyHeading: "Come è cambiata l'accessibilità",
    historyIntro: "Rapporto prezzo/reddito in {country} dal 1990 a oggi. Più la linea sale, meno casa compra lo stesso reddito.",
    historyAffordabilityShiftTemplate: "Se nel {year} avessi avuto lo stesso reddito, avresti potuto permetterti il {pct} del potere d'acquisto attuale per la casa mediana del paese.",
    crossHeading: "Cosa compra il tuo reddito relativo nel mondo",
    crossIntro: "Prendi la tua posizione nella distribuzione dei redditi del tuo paese e applicala altrove. Stesso reddito relativo, mercati diversi.",
    crossColumnCountry: "Paese",
    crossColumnAffordable: "Massimo accessibile",
    crossColumnRatio: "Mediana × il tuo reddito",
    crossColumnVerdict: "Verdetto",
    rentHeading: "Comprare o affittare",
    rentIntro: "Rata mensile del mutuo sulla casa mediana del paese contro l'affitto mediano del paese.",
    rentMonthlyLabel: "Affitto mensile mediano",
    mortgageMonthlyOnMedianLabel: "Rata mutuo su casa mediana",
    rentBuyDiffMore: "Comprare costa circa {amount} in più al mese rispetto ad affittare alla mediana, ma costruisce patrimonio nel tempo.",
    rentBuyDiffLess: "Comprare costa circa {amount} in meno al mese rispetto ad affittare alla mediana. La scelta tra mutuo e affitto dipende anche dalla durata e dalla crescita dei prezzi.",
    takeawaysHeading: "A cosa fare attenzione",
    takeawaysIntro: "Letture pratiche della tua fotografia.",
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
    title: "Report personale di accessibilità della casa",
    subtitle: "Prezzi reali, redditi reali, tassi reali, calibrati sul tuo numero.",
    preparedFor: "Preparato per: {country}, {date}",
    landingTitle: "Il tuo report personale di accessibilità della casa",
    landingFreeBadge: "Gratis. Senza registrazione, senza pagamento, senza email",
    landingFeatureA: {
      title: "Il tuo prezzo massimo",
      body:
        "Calcolato a partire dal tuo reddito e dai tuoi risparmi, dal tasso del mutuo del paese e da un tetto standard del 36 % di rata sul reddito. Più la distanza dalla mediana del paese.",
    },
    landingFeatureB: {
      title: "Contesto del paese e storico",
      body:
        "Dove si colloca il tuo paese nella scala globale dell'accessibilità e come è cambiato il rapporto prezzo/reddito nei decenni.",
    },
    landingFeatureC: {
      title: "Pienamente privato",
      body:
        "Il PDF viene generato nel tuo browser. Nulla viene inviato a un server. Nessuna email, nessun account, nessun tracciamento.",
    },
    landingPicker: {
      title: "Genera il tuo report",
      subtitle: "Scegli un paese, inserisci reddito e risparmi, al resto pensiamo noi.",
      countryLabel: "Paese",
      incomeLabel: "Reddito annuale del nucleo (al netto delle tasse)",
      incomeHelp: "Reddito netto combinato di tutte le persone del nucleo.",
      savingsLabel: "Risparmi disponibili per l'anticipo",
      savingsHelp: "Solo risparmi liquidi. Non fondi pensione.",
      generateButton: "Genera il PDF",
      generatingButton: "Generazione in corso...",
    },
    pdfPageLabel: "Pagina",
    pdfFooterAttribution: "howaffordable.org · Dati aperti · Nessun tracciamento",
    pdfCoverGeneratedLabel: "Generato",
    pdfYourPriceLabel: "Prezzo massimo della casa che puoi permetterti",
    pdfMaxPriceLeadIn: "Il tuo tetto di indebitamento",
    pdfCoverNarrative:
      "Il tuo prezzo massimo è il tetto che la banca ti riconoscerebbe sul tuo reddito al tasso medio del mutuo nel paese, con un test DTI del 36 %. Le pagine seguenti contestualizzano questo numero rispetto alla mediana del paese, alla traiettoria storica del paese e al confronto tra mutuo e affitto.",
    pdfSection1Title: "La tua fotografia",
    pdfSection1Body:
      "Prezzo massimo, rata mensile sul mutuo della casa mediana del paese, distanza dal tuo massimo alla mediana del paese e anni per un anticipo tipico al tuo tasso di risparmio.",
    pdfSection2Title: "Dove si colloca il paese",
    pdfSection2Body:
      "Prezzo mediano della casa, reddito mediano del nucleo, tasso del mutuo e quota minima di anticipo.",
    pdfSection3Title: "Tra paesi",
    pdfSection3Body:
      "La tua posizione relativa nella distribuzione dei redditi del tuo paese applicata ad altri mercati: stesso percentile, mercati diversi.",
    pdfHistoricalTitle: "Come è cambiata l'accessibilità",
    pdfHistoricalBody:
      "Rapporto prezzo/reddito nel tuo paese sul periodo disponibile nei dati OECD e BIS. Più la linea sale, più duro è il mercato per la famiglia mediana.",
    pdfHistoricalInsightTemplate:
      "Il rapporto prezzo/reddito di {country} era {firstValue}× nel {firstYear}. Nel {lastYear}: {lastValue}×. {direction} {magnitude}× nel periodo.",
    pdfHistoricalNoData:
      "Nessuna serie storica lunga per questo paese. La fotografia qui sopra resta valida.",
    pdfTakeawaysTitle: "Cosa significa in pratica",
    pdfTakeawaysIntro:
      "Letture personali della tua fotografia, dati il peso della rata, il rapporto e il regime del paese.",
    pdfTakeawaysAffordable:
      "La casa mediana del tuo paese è ampiamente alla portata: i prezzi sono sotto 4× il reddito mediano. Le decisioni che restano riguardano dove comprare e quanto leveraggio assumere.",
    pdfTakeawaysStretch:
      "La casa mediana del tuo paese è al limite: a 4-6× il reddito, comprare di solito richiede o un anticipo solido, o un mutuo lungo, o accettare una casa più piccola o più periferica.",
    pdfTakeawaysUnaffordable:
      "La casa mediana del tuo paese è inaccessibile secondo la classificazione di Demographia: 6-10× il reddito. Comprare richiede spesso aiuto familiare, doppio reddito o un compromesso significativo su dimensioni o zona.",
    pdfTakeawaysOutOfReach:
      "Sopra 10× il reddito, possedere la casa mediana del paese è di fatto fuori portata senza un capitale esterno significativo. Tieni d'occhio i rapporti affitto/prezzo locali; affittare può essere la mossa migliore nel lungo periodo.",
    pdfTakeawaysBuyVsRent:
      "Sotto circa 15× l'affitto annuo, comprare di solito batte l'affitto su un orizzonte di 5 o più anni. Sopra circa 25× l'affitto vince chiaramente. La scelta tra mutuo e affitto dipende anche dalla durata di possesso e dalla crescita dei prezzi, non solo dal rapporto.",
    pdfMethodologyTitle: "Metodologia",
    pdfMethodologyBody:
      "Prezzi mediani e rapporti prezzo/reddito da OECD Affordable Housing Database e BIS Selected Property Price Series. Tassi del mutuo da ECB SDW (eurozona), Federal Reserve H.15 (USA), Bank of England (Regno Unito) e banche centrali nazionali altrove. Bande di Demographia per la classificazione di accessibilità. Il calcolo gira interamente lato browser; nulla viene inviato a un server.",
    pdfTipTitle: "Ti è piaciuto questo report?",
    pdfTipBody:
      "È gratis e senza pubblicità. Se è utile, una piccola mancia su Ko-fi mi permette di continuare a costruire strumenti educativi aperti.",
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
