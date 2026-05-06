import type { LocaleCode } from "../locales";

export interface FaqEntry {
  readonly question: string;
  readonly answer: readonly string[];
}

export interface FaqContent {
  readonly h1: string;
  readonly intro: string;
  readonly entries: readonly FaqEntry[];
}

const en: FaqContent = {
  h1: "Frequently asked questions",
  intro: "Short, plain answers. If you do not see your question, open an issue on GitHub.",
  entries: [
    {
      question: "Is my data sent anywhere?",
      answer: [
        "No. Everything runs in your browser. There is no backend. The site is static HTML, CSS, and JavaScript served from a CDN. No analytics, no tracking pixels, no cookies you did not opt into.",
      ],
    },
    {
      question: "Why is my country's median price so much lower than my city?",
      answer: [
        "We use national medians for cross-country comparability. London is roughly 2× the UK median, San Francisco 2.5× the US median, Sydney 1.6× the Australia median, Paris 1.8× the France median.",
        "If you live in a high-cost city, multiply the country median by 1.5-2.5× for a city-realistic figure.",
      ],
    },
    {
      question: "Why does the down payment requirement differ so much by country?",
      answer: [
        "Bank regulation, central bank macro-prudential rules, and cultural norms. Anglo countries (US, UK, Canada) developed liberal mortgage markets with very low minimums (5% or less). Continental Europe runs 10-20%. East Asia runs 25-30%, partly to cool speculative demand and partly because banks have less recourse on defaults.",
      ],
    },
    {
      question: "Should I include rent in monthly debt obligations?",
      answer: [
        "No. Lenders care about debts that follow you into the new mortgage — student loans, car loans, credit-card minimums. Rent ends when you buy, so it does not count against your debt-to-income.",
      ],
    },
    {
      question: "What is a price-to-income ratio?",
      answer: [
        "Country median home price divided by country median household income. The most-cited cross-country measure of housing affordability.",
        "Demographia's bands: under 3× is highly affordable (rare in 2025), 3-4× affordable, 4-5× moderately unaffordable, 5+× severely unaffordable. The OECD long-term average from 1990-2010 was ~4.3×.",
      ],
    },
    {
      question: "Why is housing so unaffordable now?",
      answer: [
        "Three big drivers: 1) restrictive zoning has held supply growth below household formation in most rich-country cities since 1990; 2) two decades of falling interest rates made existing homes more valuable as a financial asset; 3) housing has become a vehicle for global capital, especially in supply-constrained cities.",
        "The calculator does not solve the housing crisis. It tries to make the math visible.",
      ],
    },
    {
      question: "Should I buy or rent?",
      answer: [
        "Depends on hold period (typically 5+ years to break even), local price-to-rent ratio (under 15× rent is buy territory, over 25× is rent territory), and the opportunity cost of your down payment if invested elsewhere.",
        "We may add a buy-vs-rent calculator. For now this tool focuses on affordability, not the optimal choice.",
      ],
    },
    {
      question: "How accurate are the country numbers?",
      answer: [
        "Median prices and incomes are accurate to within a few percent for OECD countries. For non-OECD countries (Vietnam, Egypt, Nigeria) we are sometimes working from less consistent national stats and the numbers should be treated as ballpark.",
      ],
    },
    {
      question: "Does this account for property tax, insurance, maintenance?",
      answer: [
        "No, not yet. Those add 1-3% per year of the home price in most countries. Build a buffer into your max-affordable-price.",
      ],
    },
    {
      question: "What about FHA / Help-to-Buy / equivalent schemes?",
      answer: [
        "We use standard private-bank minimum down payments. Government schemes can lower these (e.g. FHA loans 3.5% in the US, prior UK Help to Buy 5%). Check the schemes available in your country.",
      ],
    },
  ],
};

const es: FaqContent = {
  h1: "Preguntas frecuentes",
  intro: "Respuestas breves y claras. Si no encuentras tu pregunta, abre un issue en GitHub.",
  entries: [
    {
      question: "¿Mis datos se envían a algún lugar?",
      answer: [
        "No. Todo se ejecuta en tu navegador. No hay backend. El sitio es HTML, CSS y JavaScript estáticos servidos desde una CDN. Sin analíticas, sin píxeles de seguimiento, sin cookies a las que no hayas dado tu consentimiento.",
      ],
    },
    {
      question: "¿Por qué el precio mediano de mi país es mucho más bajo que el de mi ciudad?",
      answer: [
        "Usamos medianas nacionales para que la comparación entre países tenga sentido. Londres es aproximadamente 2× la mediana del Reino Unido, San Francisco 2,5× la de Estados Unidos, Sídney 1,6× la de Australia y París 1,8× la de Francia.",
        "Si vives en una ciudad cara, multiplica la mediana nacional por 1,5-2,5× para una cifra más realista a nivel urbano.",
      ],
    },
    {
      question: "¿Por qué la entrada mínima cambia tanto entre países?",
      answer: [
        "Por la regulación bancaria, las reglas macroprudenciales del banco central y las normas culturales. Los países anglosajones (Estados Unidos, Reino Unido, Canadá) desarrollaron mercados hipotecarios laxos, con mínimos muy bajos (5% o menos). Europa continental se mueve entre el 10% y el 20%. El este de Asia, entre el 25% y el 30%, en parte para enfriar la demanda especulativa y en parte porque los bancos tienen menos recursos en caso de impago.",
      ],
    },
    {
      question: "¿Debo incluir el alquiler en mis deudas mensuales?",
      answer: [
        "No. A los bancos les interesan las deudas que te siguen hasta la nueva hipoteca: préstamos estudiantiles, créditos de coche, mínimos de tarjeta de crédito. El alquiler termina cuando compras, así que no cuenta para tu ratio de endeudamiento.",
      ],
    },
    {
      question: "¿Qué es la ratio precio-ingreso?",
      answer: [
        "El precio mediano de la vivienda en el país dividido entre el ingreso mediano del hogar en ese mismo país. Es la métrica más citada para comparar la asequibilidad de la vivienda entre países.",
        "Tramos de Demographia: por debajo de 3× es muy asequible (raro en 2025), 3-4× asequible, 4-5× moderadamente inasequible, más de 5× gravemente inasequible. La media OECD de 1990-2010 fue de unos 4,3×.",
      ],
    },
    {
      question: "¿Por qué la vivienda está tan poco asequible ahora?",
      answer: [
        "Tres grandes motores: 1) la zonificación restrictiva ha mantenido el crecimiento de la oferta por debajo de la formación de hogares en la mayoría de las ciudades ricas desde 1990; 2) dos décadas de tipos de interés a la baja han hecho que las viviendas existentes sean más valiosas como activo financiero; 3) la vivienda se ha convertido en un vehículo del capital global, sobre todo en ciudades con oferta restringida.",
        "La calculadora no resuelve la crisis de la vivienda. Intenta hacer visibles las cuentas.",
      ],
    },
    {
      question: "¿Comprar o alquilar?",
      answer: [
        "Depende del horizonte temporal (normalmente 5 años o más para amortizar costes), de la ratio precio-alquiler local (por debajo de 15× toca comprar, por encima de 25× toca alquilar) y del coste de oportunidad de tu entrada si la invirtieras en otro sitio.",
        "Quizá añadamos una calculadora de comprar contra alquilar. Por ahora, esta herramienta se centra en la asequibilidad, no en la decisión óptima.",
      ],
    },
    {
      question: "¿Qué precisión tienen las cifras por país?",
      answer: [
        "Los precios y los ingresos medianos son precisos en pocos puntos porcentuales para los países de la OECD. Para países fuera de la OECD (Vietnam, Egipto, Nigeria) trabajamos a veces con estadísticas nacionales menos consistentes y los números deben leerse como un orden de magnitud.",
      ],
    },
    {
      question: "¿Incluye impuestos sobre la propiedad, seguros y mantenimiento?",
      answer: [
        "Aún no. Esos costes suman entre el 1% y el 3% anual del precio de la vivienda en la mayoría de los países. Deja un margen en tu precio máximo asequible.",
      ],
    },
    {
      question: "¿Qué pasa con FHA, Help-to-Buy y programas equivalentes?",
      answer: [
        "Usamos las entradas mínimas estándar de la banca privada. Los programas públicos pueden reducirlas (por ejemplo, FHA 3,5% en Estados Unidos o el antiguo Help to Buy británico al 5%). Consulta qué programas hay disponibles en tu país.",
      ],
    },
  ],
};

const de: FaqContent = {
  h1: "Häufige Fragen",
  intro: "Kurze, klare Antworten. Falls Ihre Frage nicht dabei ist, öffnen Sie ein Issue auf GitHub.",
  entries: [
    {
      question: "Werden meine Daten irgendwohin gesendet?",
      answer: [
        "Nein. Alles läuft in Ihrem Browser. Es gibt kein Backend. Die Seite besteht aus statischem HTML, CSS und JavaScript, ausgeliefert über ein CDN. Keine Analyse-Tools, keine Tracking-Pixel, keine Cookies, denen Sie nicht zugestimmt haben.",
      ],
    },
    {
      question: "Warum liegt der Median meines Landes so weit unter meinem Stadt-Preis?",
      answer: [
        "Wir verwenden nationale Mediane, damit Länder vergleichbar bleiben. London entspricht rund dem 2-Fachen des Median im Vereinigten Königreich, San Francisco dem 2,5-Fachen des US-Median, Sydney dem 1,6-Fachen des Australien-Median, Paris dem 1,8-Fachen des französischen Median.",
        "Wer in einer teuren Großstadt lebt, multipliziert den nationalen Median mit 1,5-2,5×, um auf einen realistischeren Stadtwert zu kommen.",
      ],
    },
    {
      question: "Warum unterscheidet sich das Mindest-Eigenkapital so stark zwischen Ländern?",
      answer: [
        "Bankenregulierung, makroprudenzielle Regeln der Zentralbanken und kulturelle Konventionen. Angelsächsische Länder (USA, Vereinigtes Königreich, Kanada) haben liberale Hypothekenmärkte mit sehr niedrigen Mindestquoten (5% oder weniger). Kontinentaleuropa liegt bei 10-20%. Ostasien liegt bei 25-30%, teils zur Eindämmung spekulativer Nachfrage, teils weil die Banken bei Zahlungsausfall weniger Rückgriff haben.",
      ],
    },
    {
      question: "Soll die Miete in den monatlichen Verbindlichkeiten stehen?",
      answer: [
        "Nein. Banken interessieren sich für Verbindlichkeiten, die mit in die neue Hypothek hineinwirken: Studienkredite, Autokredite, Mindestraten von Kreditkarten. Die Miete endet beim Kauf und zählt deshalb nicht in den Schuldendienst.",
      ],
    },
    {
      question: "Was ist die Preis-Einkommens-Ratio?",
      answer: [
        "Der mediane Immobilienpreis eines Landes geteilt durch das mediane Haushaltseinkommen. Die meistzitierte länderübergreifende Kennzahl der Wohnungs-Erschwinglichkeit.",
        "Bänder nach Demographia: unter 3× ist sehr erschwinglich (2025 selten), 3-4× erschwinglich, 4-5× mäßig nicht erschwinglich, ab 5× stark nicht erschwinglich. Der OECD-Langfristdurchschnitt 1990-2010 lag bei rund 4,3×.",
      ],
    },
    {
      question: "Warum ist Wohnen heute so unerschwinglich?",
      answer: [
        "Drei wesentliche Treiber: 1) restriktive Bauleitplanung hält das Angebot in den meisten Großstädten reicher Länder seit 1990 hinter der Haushaltsbildung zurück; 2) zwei Jahrzehnte fallender Zinsen haben Bestandsimmobilien als Vermögensanlage aufgewertet; 3) Wohnraum ist zum Vehikel für globales Kapital geworden, besonders in angebotsbeschränkten Städten.",
        "Der Rechner löst die Wohnungskrise nicht. Er versucht, die Mathematik dahinter sichtbar zu machen.",
      ],
    },
    {
      question: "Kaufen oder mieten?",
      answer: [
        "Hängt von der Haltedauer (meist 5 Jahre und mehr, um die Kosten hereinzuholen), vom lokalen Preis-Miet-Verhältnis (unter 15× spricht für Kauf, über 25× für Miete) und von den Opportunitätskosten des Eigenkapitals ab, wenn es anderswo angelegt würde.",
        "Eventuell ergänzen wir später einen Mieten-vs-Kaufen-Rechner. Aktuell konzentriert sich dieses Tool auf die Erschwinglichkeit, nicht auf die optimale Entscheidung.",
      ],
    },
    {
      question: "Wie genau sind die Länderzahlen?",
      answer: [
        "Mediane Preise und Einkommen sind für OECD-Länder bis auf wenige Prozentpunkte genau. Für Nicht-OECD-Länder (Vietnam, Ägypten, Nigeria) arbeiten wir teils mit weniger konsistenten nationalen Statistiken; diese Werte sollten als Größenordnung verstanden werden.",
      ],
    },
    {
      question: "Sind Grundsteuer, Versicherung und Instandhaltung berücksichtigt?",
      answer: [
        "Noch nicht. Diese Posten kommen in den meisten Ländern auf 1-3% des Kaufpreises pro Jahr. Planen Sie einen Puffer in Ihrem maximal erschwinglichen Preis ein.",
      ],
    },
    {
      question: "Was ist mit FHA, Help-to-Buy oder vergleichbaren Programmen?",
      answer: [
        "Wir setzen die Standard-Mindestquoten der Privatbanken an. Staatliche Programme können diese senken (z. B. FHA 3,5% in den USA, das frühere Help to Buy in Großbritannien mit 5%). In Deutschland sorgt etwa ein Bausparvertrag de facto für eine niedrigere Eigenkapitalhürde. Prüfen Sie die Programme in Ihrem Land.",
      ],
    },
  ],
};

const fr: FaqContent = {
  h1: "Foire aux questions",
  intro: "Réponses courtes et claires. Si votre question n'apparaît pas, ouvrez une issue sur GitHub.",
  entries: [
    {
      question: "Mes données sont-elles envoyées quelque part ?",
      answer: [
        "Non. Tout se passe dans votre navigateur. Il n'y a pas de backend. Le site est composé de HTML, CSS et JavaScript statiques servis depuis un CDN. Pas d'analytique, pas de pixel de pistage, aucun cookie auquel vous n'auriez pas consenti.",
      ],
    },
    {
      question: "Pourquoi le prix médian de mon pays est-il bien plus bas que celui de ma ville ?",
      answer: [
        "Nous utilisons des médianes nationales pour rendre les pays comparables. Londres représente environ 2× la médiane du Royaume-Uni, San Francisco 2,5× celle des États-Unis, Sydney 1,6× celle de l'Australie, Paris 1,8× celle de la France.",
        "Si vous habitez une ville chère, multipliez la médiane nationale par 1,5-2,5× pour obtenir un chiffre plus réaliste.",
      ],
    },
    {
      question: "Pourquoi l'apport minimal varie-t-il autant d'un pays à l'autre ?",
      answer: [
        "Réglementation bancaire, règles macroprudentielles des banques centrales et conventions culturelles. Les pays anglo-saxons (États-Unis, Royaume-Uni, Canada) ont développé des marchés hypothécaires libéraux avec des minimums très bas (5% ou moins). L'Europe continentale tourne autour de 10-20%. L'Asie de l'Est se situe entre 25 et 30%, en partie pour refroidir la demande spéculative, en partie parce que les banques disposent de moins de recours en cas de défaut.",
      ],
    },
    {
      question: "Faut-il inclure le loyer dans les charges mensuelles ?",
      answer: [
        "Non. Les banques s'intéressent aux dettes qui vous suivent dans le nouveau crédit : prêts étudiants, prêts auto, mensualités minimales de cartes de crédit. Le loyer s'arrête à l'achat, donc il ne pèse pas dans le taux d'endettement.",
      ],
    },
    {
      question: "Qu'est-ce que le ratio prix-revenu ?",
      answer: [
        "Le prix médian d'un logement dans un pays divisé par le revenu médian des ménages. C'est la mesure transnationale la plus citée de l'accessibilité au logement.",
        "Les bandes de Demographia : sous 3× très abordable (rare en 2025), 3-4× abordable, 4-5× modérément inabordable, au-delà de 5× sévèrement inabordable. La moyenne OECD 1990-2010 était d'environ 4,3×.",
      ],
    },
    {
      question: "Pourquoi le logement est-il aussi peu accessible aujourd'hui ?",
      answer: [
        "Trois moteurs principaux : 1) des règles d'urbanisme restrictives ont maintenu la croissance de l'offre en deçà de la formation des ménages dans la plupart des grandes villes des pays riches depuis 1990 ; 2) deux décennies de baisse des taux ont rendu le parc existant plus précieux comme actif financier ; 3) l'immobilier est devenu un véhicule pour le capital mondial, en particulier dans les villes où l'offre est contrainte.",
        "La calculatrice ne résout pas la crise du logement. Elle essaie de rendre le calcul visible.",
      ],
    },
    {
      question: "Acheter ou louer ?",
      answer: [
        "Cela dépend de la durée de détention (souvent 5 ans ou plus pour amortir), du ratio prix-loyer local (sous 15× plutôt acheter, au-dessus de 25× plutôt louer) et du coût d'opportunité de l'apport s'il était investi ailleurs.",
        "Nous ajouterons peut-être un comparateur acheter contre louer. Pour l'instant cet outil se concentre sur l'accessibilité, pas sur le choix optimal.",
      ],
    },
    {
      question: "Quelle est la précision des chiffres par pays ?",
      answer: [
        "Les prix et revenus médians sont précis à quelques pour cent près pour les pays de l'OECD. Pour les pays hors OECD (Vietnam, Égypte, Nigeria), nous travaillons parfois sur des statistiques nationales moins cohérentes ; les chiffres doivent être lus comme un ordre de grandeur.",
      ],
    },
    {
      question: "La taxe foncière, l'assurance et l'entretien sont-ils pris en compte ?",
      answer: [
        "Pas encore. Ces postes représentent 1 à 3% du prix du logement par an dans la plupart des pays. Prévoyez une marge dans votre prix maximal accessible.",
      ],
    },
    {
      question: "Et les dispositifs FHA, Help-to-Buy ou équivalents ?",
      answer: [
        "Nous utilisons les apports minimaux standards des banques privées. Les dispositifs publics peuvent les abaisser (par exemple FHA 3,5% aux États-Unis, ancien Help to Buy britannique à 5%). Vérifiez les dispositifs disponibles dans votre pays.",
      ],
    },
  ],
};

const it: FaqContent = {
  h1: "Domande frequenti",
  intro: "Risposte brevi e chiare. Se non trovi la tua domanda, apri una issue su GitHub.",
  entries: [
    {
      question: "I miei dati vengono inviati da qualche parte?",
      answer: [
        "No. Tutto avviene nel tuo browser. Non c'è backend. Il sito è HTML, CSS e JavaScript statici serviti da una CDN. Nessuna analytics, nessun pixel di tracciamento, nessun cookie a cui non hai dato il consenso.",
      ],
    },
    {
      question: "Perché il prezzo mediano del mio paese è molto più basso di quello della mia città?",
      answer: [
        "Usiamo mediane nazionali per rendere confrontabili i paesi. Londra è circa 2× la mediana del Regno Unito, San Francisco 2,5× quella degli Stati Uniti, Sydney 1,6× quella dell'Australia, Parigi 1,8× quella della Francia.",
        "Se vivi in una città cara, moltiplica la mediana nazionale per 1,5-2,5× per avere un valore più realistico a livello urbano.",
      ],
    },
    {
      question: "Perché l'anticipo minimo cambia così tanto tra paesi?",
      answer: [
        "Per la regolamentazione bancaria, le regole macroprudenziali delle banche centrali e le abitudini culturali. I paesi anglosassoni (Stati Uniti, Regno Unito, Canada) hanno sviluppato mercati ipotecari liberali con minimi molto bassi (5% o meno). L'Europa continentale si attesta sul 10-20%. L'Asia orientale sul 25-30%, in parte per raffreddare la domanda speculativa e in parte perché le banche hanno meno strumenti di rivalsa in caso di default.",
      ],
    },
    {
      question: "Devo inserire l'affitto tra i debiti mensili?",
      answer: [
        "No. Alle banche interessano i debiti che ti seguono nel nuovo mutuo: prestiti studio, finanziamenti auto, rate minime delle carte di credito. L'affitto termina quando compri, quindi non incide sul rapporto rata-reddito.",
      ],
    },
    {
      question: "Che cos'è il rapporto prezzo-reddito?",
      answer: [
        "Prezzo mediano della casa nel paese diviso per il reddito mediano delle famiglie. È la misura più citata di accessibilità della casa nei confronti tra paesi.",
        "Le fasce di Demographia: sotto 3× molto accessibile (raro nel 2025), 3-4× accessibile, 4-5× moderatamente non accessibile, oltre 5× gravemente non accessibile. La media OECD 1990-2010 era circa 4,3×.",
      ],
    },
    {
      question: "Perché oggi la casa è così poco accessibile?",
      answer: [
        "Tre fattori principali: 1) la pianificazione urbanistica restrittiva ha tenuto la crescita dell'offerta sotto la formazione di nuove famiglie nella maggior parte delle città ricche dal 1990; 2) due decenni di tassi calanti hanno reso il patrimonio immobiliare esistente più prezioso come asset finanziario; 3) la casa è diventata un veicolo per il capitale globale, soprattutto nelle città con offerta vincolata.",
        "Il calcolatore non risolve la crisi abitativa. Cerca di rendere visibili i numeri.",
      ],
    },
    {
      question: "Comprare o affittare?",
      answer: [
        "Dipende dall'orizzonte temporale (di solito 5 anni o più per ammortizzare), dal rapporto prezzo-affitto locale (sotto 15× conviene comprare, sopra 25× conviene affittare) e dal costo opportunità dell'anticipo se fosse investito altrove.",
        "Forse aggiungeremo un calcolatore comprare contro affittare. Per ora questo strumento si concentra sull'accessibilità, non sulla scelta ottimale.",
      ],
    },
    {
      question: "Quanto sono accurati i numeri per paese?",
      answer: [
        "Prezzi e redditi mediani sono accurati entro pochi punti percentuali per i paesi OECD. Per i paesi non OECD (Vietnam, Egitto, Nigeria) lavoriamo talvolta con statistiche nazionali meno coerenti e i numeri vanno letti come ordine di grandezza.",
      ],
    },
    {
      question: "Considera IMU, assicurazione e manutenzione?",
      answer: [
        "Non ancora. Queste voci costano l'1-3% del prezzo della casa all'anno nella maggior parte dei paesi. Lascia un margine nel tuo prezzo massimo accessibile.",
      ],
    },
    {
      question: "E gli strumenti tipo FHA, Help-to-Buy o equivalenti?",
      answer: [
        "Usiamo gli anticipi minimi standard delle banche private. I programmi pubblici possono abbassarli (ad esempio FHA al 3,5% negli Stati Uniti o il precedente Help to Buy britannico al 5%). Controlla quali strumenti sono disponibili nel tuo paese.",
      ],
    },
  ],
};

const pt: FaqContent = {
  h1: "Perguntas frequentes",
  intro: "Respostas curtas e claras. Se não encontrar a sua pergunta, abra uma issue no GitHub.",
  entries: [
    {
      question: "Os meus dados são enviados para algum sítio?",
      answer: [
        "Não. Tudo corre no seu navegador. Não existe backend. O site é HTML, CSS e JavaScript estáticos servidos a partir de uma CDN. Sem analítica, sem pixéis de rastreio, sem cookies para os quais não tenha dado consentimento.",
      ],
    },
    {
      question: "Porque é que o preço mediano do meu país é muito mais baixo do que o da minha cidade?",
      answer: [
        "Usamos medianas nacionais para que os países sejam comparáveis. Londres é cerca de 2× a mediana do Reino Unido, São Francisco 2,5× a dos Estados Unidos, Sydney 1,6× a da Austrália, Paris 1,8× a da França.",
        "Se vive numa cidade cara, multiplique a mediana nacional por 1,5-2,5× para obter um valor mais realista ao nível urbano.",
      ],
    },
    {
      question: "Porque é que a entrada mínima varia tanto entre países?",
      answer: [
        "Devido à regulação bancária, às regras macroprudenciais dos bancos centrais e a hábitos culturais. Os países anglo-saxónicos (Estados Unidos, Reino Unido, Canadá) desenvolveram mercados hipotecários liberais com mínimos muito baixos (5% ou menos). A Europa continental fica nos 10-20%. O Leste Asiático nos 25-30%, em parte para travar a procura especulativa e em parte porque os bancos têm menos recurso em caso de incumprimento.",
      ],
    },
    {
      question: "Devo incluir a renda nas dívidas mensais?",
      answer: [
        "Não. Os bancos olham para as dívidas que o acompanham para o novo crédito: empréstimos de estudo, créditos automóvel, mínimos de cartões de crédito. A renda termina quando compra, por isso não pesa no rácio dívida-rendimento.",
      ],
    },
    {
      question: "O que é o rácio preço-rendimento?",
      answer: [
        "Preço mediano da habitação no país a dividir pelo rendimento mediano dos agregados. É a medida mais citada para comparar a acessibilidade da habitação entre países.",
        "Faixas da Demographia: abaixo de 3× é altamente acessível (raro em 2025), 3-4× acessível, 4-5× moderadamente inacessível, mais de 5× severamente inacessível. A média OECD entre 1990 e 2010 foi cerca de 4,3×.",
      ],
    },
    {
      question: "Porque é que a habitação está tão inacessível hoje?",
      answer: [
        "Três grandes motores: 1) o ordenamento restritivo manteve o crescimento da oferta abaixo da formação de novos agregados na maioria das cidades ricas desde 1990; 2) duas décadas de juros em queda tornaram o parque existente mais valioso enquanto activo financeiro; 3) a habitação tornou-se veículo para capital global, sobretudo em cidades com oferta limitada.",
        "A calculadora não resolve a crise da habitação. Tenta tornar a aritmética visível.",
      ],
    },
    {
      question: "Comprar ou arrendar?",
      answer: [
        "Depende do horizonte temporal (normalmente 5 anos ou mais para amortizar), do rácio preço-renda local (abaixo de 15× é território de comprar, acima de 25× é território de arrendar) e do custo de oportunidade da entrada se for investida noutro sítio.",
        "Poderemos juntar uma calculadora comprar contra arrendar. Por agora esta ferramenta foca-se na acessibilidade, não na escolha óptima.",
      ],
    },
    {
      question: "Quão exactos são os números por país?",
      answer: [
        "Preços e rendimentos medianos têm uma exactidão de alguns pontos percentuais nos países OECD. Para países fora da OECD (Vietname, Egipto, Nigéria) trabalhamos por vezes com estatísticas nacionais menos consistentes, pelo que os números devem ser lidos como ordem de grandeza.",
      ],
    },
    {
      question: "Considera IMI, seguro e manutenção?",
      answer: [
        "Ainda não. Estes custos somam 1-3% do preço da habitação por ano na maioria dos países. Deixe uma margem no seu preço máximo acessível.",
      ],
    },
    {
      question: "E os programas FHA, Help-to-Buy ou equivalentes?",
      answer: [
        "Usamos as entradas mínimas padrão da banca privada. Os programas públicos podem reduzi-las (por exemplo FHA a 3,5% nos Estados Unidos ou o anterior Help to Buy britânico a 5%). Verifique os programas disponíveis no seu país.",
      ],
    },
  ],
};

const ja: FaqContent = {
  h1: "よくある質問",
  intro: "短く、平易な答えを心がけています。質問が見つからなければ GitHub で Issue を立ててください。",
  entries: [
    {
      question: "入力したデータはどこかに送られますか？",
      answer: [
        "いいえ。すべてあなたのブラウザの中で動きます。バックエンドはありません。サイトは静的な HTML・CSS・JavaScript で、CDN から配信されています。アナリティクス、トラッキングピクセル、同意していない Cookie はありません。",
      ],
    },
    {
      question: "なぜ国の中央値は自分の住む都市よりずっと低いのですか？",
      answer: [
        "国どうしを比較できるように、全国の中央値を使っているためです。ロンドンはイギリスの中央値の約 2 倍、サンフランシスコはアメリカ合衆国の中央値の約 2.5 倍、シドニーはオーストラリアの中央値の約 1.6 倍、パリはフランスの中央値の約 1.8 倍です。",
        "高価格な都市にお住まいの場合は、全国中央値に 1.5〜2.5 倍を掛けると、より都市の実態に近い数字になります。",
      ],
    },
    {
      question: "頭金の最低水準が国によってこれほど違うのはなぜですか？",
      answer: [
        "銀行規制、中央銀行のマクロプルーデンス政策、そして慣習の違いです。英米圏（アメリカ合衆国、イギリス、カナダ）はリベラルな住宅ローン市場を発達させ、最低水準が非常に低くなっています（5% 以下）。大陸ヨーロッパは 10〜20%、東アジアは 25〜30% です。投機的な需要を抑える狙いと、債務不履行時に銀行が回収しにくい事情が背景にあります。",
      ],
    },
    {
      question: "毎月の債務に家賃も含めるべきですか？",
      answer: [
        "いいえ。銀行が見るのは新しい住宅ローンに「持ち越される」債務、すなわち学生ローン、自動車ローン、クレジットカードの最低支払い額などです。家賃は購入後に消えるので、債務収入比には含めません。",
      ],
    },
    {
      question: "住宅価格年収倍率（Price-to-income ratio）とは何ですか？",
      answer: [
        "国の住宅価格中央値を、国の世帯所得中央値で割った値です。住宅の手の届きやすさを国際比較する指標として最も広く引用されます。",
        "Demographia の区分では、3 倍未満は非常に手が届く（2025 年では稀）、3〜4 倍は手が届く、4〜5 倍はやや厳しい、5 倍超は深刻に手が届かないとされます。OECD の 1990〜2010 年の長期平均はおよそ 4.3 倍でした。",
      ],
    },
    {
      question: "なぜ今これほど住宅が手の届きにくくなっているのですか？",
      answer: [
        "大きな要因は 3 つです。1) 多くの先進国の都市では 1990 年以降、用途規制が厳しく、世帯形成のスピードに供給が追いついていません。2) 20 年に及ぶ低金利化で、既存住宅が金融資産として相対的に価値を増しました。3) 住宅は、特に供給が制約された都市では、グローバルマネーの受け皿になっています。",
        "この計算機は住宅危機を解決するものではありません。算数を「見える化」することを目指しています。",
      ],
    },
    {
      question: "買うべきか、借りるべきか？",
      answer: [
        "保有期間（取引コストを取り戻すには通常 5 年以上）、地域の価格-家賃比（15 倍未満なら購入優位、25 倍超なら賃貸優位）、頭金を他に投資した場合の機会費用などで決まります。",
        "賃貸対購入の比較計算機は将来追加するかもしれません。現時点ではこのツールは「最適解」ではなく「手の届きやすさ」に絞っています。",
      ],
    },
    {
      question: "国別の数字はどれくらい正確ですか？",
      answer: [
        "OECD 加盟国では、住宅価格と所得の中央値は数パーセント以内の精度です。OECD 非加盟国（ベトナム、エジプト、ナイジェリアなど）では一貫性に欠ける統計を使うこともあり、数字は概算として捉えてください。",
      ],
    },
    {
      question: "固定資産税・保険・修繕費は計算に入っていますか？",
      answer: [
        "まだ入っていません。多くの国で年あたり住宅価格の 1〜3% かかります。最大購入可能価格には余裕を持たせてください。",
      ],
    },
    {
      question: "FHA や Help-to-Buy などの公的制度は？",
      answer: [
        "本計算機は民間銀行の標準的な最低頭金を用いています。公的制度はそれを下げる場合があります（例：アメリカ合衆国の FHA ローン 3.5%、過去のイギリス Help to Buy 5% など）。お住まいの国で利用できる制度をご確認ください。",
      ],
    },
  ],
};

const zhCn: FaqContent = {
  h1: "常见问题",
  intro: "简短直白的回答。没找到你的问题？欢迎到 GitHub 提 issue。",
  entries: [
    {
      question: "我的数据会被送到哪里去吗？",
      answer: [
        "不会。所有运算都在你的浏览器内完成，没有后端。整个网站只是由 CDN 分发的静态 HTML、CSS 和 JavaScript。没有分析脚本，没有追踪像素，也没有你未同意的 Cookie。",
      ],
    },
    {
      question: "为什么我所在国家的房价中位数比我所在城市低这么多？",
      answer: [
        "我们使用全国中位数，方便跨国比较。伦敦大约是英国中位数的 2 倍，旧金山约为美国中位数的 2.5 倍，悉尼约为澳大利亚中位数的 1.6 倍，巴黎约为法国中位数的 1.8 倍。",
        "如果你住在高房价城市，可以把全国中位数乘以 1.5～2.5 倍，得到更接近现实的数字。",
      ],
    },
    {
      question: "为什么各国的最低首付差距这么大？",
      answer: [
        "原因是银行监管、央行的宏观审慎政策以及文化习惯。英美国家（美国、英国、加拿大）发展出宽松的房贷市场，最低首付非常低（5% 或更低）。欧洲大陆在 10%~20% 之间。东亚多在 25%~30%，部分是为了抑制投机性需求，部分是因为违约时银行追偿手段较少。",
      ],
    },
    {
      question: "每月的债务里要不要包含房租？",
      answer: [
        "不要。银行关心的是会跟着你进入新房贷的债务：学生贷款、车贷、信用卡最低还款额。买房后房租就停止了，因此不计入债务收入比。",
      ],
    },
    {
      question: "什么是房价收入比？",
      answer: [
        "用一个国家的住房价格中位数除以家庭收入中位数。它是跨国比较住房可负担性时被引用最多的指标。",
        "Demographia 的分级：3 倍以下属于高度可负担（2025 年罕见），3~4 倍可负担，4~5 倍中度难以负担，超过 5 倍严重难以负担。OECD 在 1990-2010 年的长期均值约为 4.3 倍。",
      ],
    },
    {
      question: "为什么现在的住房这么难以负担？",
      answer: [
        "三个主要原因：1) 自 1990 年以来，多数富裕国家的大城市采取限制性规划，住房供给增速落后于新家庭的形成；2) 二十年的利率下行让存量住房作为金融资产更值钱；3) 住房成了全球资本的载体，尤其是在供给受限的城市。",
        "这个计算器解决不了住房危机。它只是想让背后的算术变得可见。",
      ],
    },
    {
      question: "买房还是租房？",
      answer: [
        "取决于持有年限（通常 5 年以上才能摊平交易成本）、当地的房价租金比（小于 15 倍偏向买，大于 25 倍偏向租），以及如果把首付投资到别处所产生的机会成本。",
        "我们将来可能加入买房与租房比较的计算器。目前这个工具只关注可负担性，不评估最优选择。",
      ],
    },
    {
      question: "各国数据有多准确？",
      answer: [
        "OECD 国家的房价和收入中位数误差通常在几个百分点以内。对于非 OECD 国家（越南、埃及、尼日利亚等），数据有时来自不太一致的国家统计，应当作大致估算来看。",
      ],
    },
    {
      question: "是否考虑了房产税、保险和维护费？",
      answer: [
        "尚未考虑。在多数国家，这些费用每年约占房价的 1%~3%。请在你的最高可负担价格中预留余地。",
      ],
    },
    {
      question: "那 FHA、Help-to-Buy 等政府计划呢？",
      answer: [
        "我们采用商业银行的标准最低首付。政府计划可以降低这一比例（例如美国 FHA 贷款 3.5%、英国此前的 Help to Buy 为 5%）。请查看你所在国家可用的方案。",
      ],
    },
  ],
};

export const FAQ: Readonly<Record<LocaleCode, FaqContent>> = {
  en, es, de, fr, "zh-cn": zhCn, ja, pt, it,
};
