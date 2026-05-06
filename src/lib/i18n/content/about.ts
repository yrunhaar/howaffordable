import type { LocaleCode } from "../locales";

export interface AboutContent {
  readonly h1: string;
  readonly intro: string;
  readonly howItWorks: { readonly heading: string; readonly body: readonly string[] };
  readonly why: { readonly heading: string; readonly body: readonly string[] };
  readonly limits: { readonly heading: string; readonly body: readonly string[] };
  readonly contact: { readonly heading: string; readonly body: string };
}

const en: AboutContent = {
  h1: "About howaffordable.org",
  intro:
    "A free, open tool that takes your income and savings and tells you what kind of home that buys in your country, how affordability has changed since 1990, and where in the world the same paycheck buys more roof. No login. No tracking. Static pages, all data baked at build time.",
  howItWorks: {
    heading: "How it works",
    body: [
      "Enter your annual after-tax household income, your savings, your existing monthly debt, and we run a standard lender debt-to-income test.",
      "We use country-typical mortgage rates from central banks (ECB, Federal Reserve, Bank of England, etc.) and country-typical minimum down-payment fractions (5% in Anglo markets, 20-30% in much of Asia and southern Europe).",
      "The price-to-income ratio is the country median home price divided by the country median household income, sourced from the OECD Housing Database and BIS property price series.",
      "Country comparisons let you take the same income and see how far it goes elsewhere — useful if you are considering moving, or just curious where the housing markets are most distorted.",
    ],
  },
  why: {
    heading: "Why this exists",
    body: [
      "Housing affordability is the most-talked-about, least-quantified topic in personal finance for a generation that came of age post-2008.",
      "Most online affordability calculators are run by mortgage brokers. Their incentive is to tell you that you can afford more than you actually can. We have no such incentive — this is open source and runs in your browser.",
      "We also show the long-term trajectory. The same multiple of income that bought a house in 1990 buys a small flat in 2025. That is not your fault, but knowing it helps.",
    ],
  },
  limits: {
    heading: "What this is not",
    body: [
      "Not financial advice. The lender debt-to-income limit we apply (36%) is a rough industry default — actual limits vary by lender, loan type, and credit profile.",
      "National medians hide huge city premiums. London is much higher than the UK median; Tokyo is much higher than the Japan median.",
      "Owning is not always better than renting. The math on that depends on hold period, opportunity cost of the down payment, and local rent-to-price ratio. We may add a rent-vs-buy calculator later.",
    ],
  },
  contact: {
    heading: "Who made this",
    body:
      "Yohan Runhaar (yohanrunhaar.com), with help from open data communities. Same family as howpoorami.org and howgreenami.org.",
  },
};

const es: AboutContent = {
  h1: "Acerca de howaffordable.org",
  intro:
    "Una herramienta gratuita y abierta que toma tus ingresos y tus ahorros y te dice qué tipo de vivienda puedes permitirte en tu país, cómo ha cambiado la asequibilidad desde 1990 y en qué parte del mundo el mismo sueldo compra más techo. Sin registro. Sin seguimiento. Páginas estáticas, con todos los datos compilados en tiempo de build.",
  howItWorks: {
    heading: "Cómo funciona",
    body: [
      "Introduce los ingresos anuales netos de tu hogar, tus ahorros y la deuda mensual que ya tienes, y aplicamos la prueba estándar de deuda sobre ingresos que usan los bancos.",
      "Utilizamos los tipos de interés hipotecarios típicos de cada país publicados por los bancos centrales (BCE, Reserva Federal, Bank of England, etc.) y las entradas mínimas habituales (5% en mercados anglosajones, 20-30% en gran parte de Asia y el sur de Europa).",
      "La ratio precio-ingreso es el precio medio nacional de la vivienda dividido entre los ingresos medianos del hogar en ese país, según la OECD Housing Database y la serie de precios inmobiliarios del BIS.",
      "Las comparaciones entre países te permiten ver hasta dónde llega ese mismo sueldo en otros lugares, útil si te planteas mudarte o simplemente sientes curiosidad por saber dónde está más distorsionado el mercado.",
    ],
  },
  why: {
    heading: "Por qué existe",
    body: [
      "La asequibilidad de la vivienda es el tema más comentado y menos cuantificado en las finanzas personales de una generación que llegó a la edad adulta después de 2008.",
      "La mayoría de las calculadoras de asequibilidad en línea las gestionan brokers hipotecarios. Su incentivo es decirte que puedes permitirte más de lo que realmente puedes. Nosotros no tenemos ese incentivo: esto es código abierto y se ejecuta en tu navegador.",
      "También mostramos la trayectoria a largo plazo. El mismo múltiplo de ingresos que en 1990 compraba una casa, en 2025 compra un piso pequeño. No es culpa tuya, pero saberlo ayuda.",
    ],
  },
  limits: {
    heading: "Lo que esto no es",
    body: [
      "No es asesoramiento financiero. El límite de deuda sobre ingresos que aplicamos (36%) es una referencia aproximada del sector: los límites reales varían según el banco, el tipo de préstamo y tu perfil crediticio.",
      "Las medianas nacionales ocultan grandes primas urbanas. Londres está muy por encima de la mediana del Reino Unido; Tokio está muy por encima de la mediana de Japón.",
      "Comprar no siempre es mejor que alquilar. Esa cuenta depende del horizonte temporal, del coste de oportunidad de la entrada y de la ratio alquiler-precio local. Puede que añadamos una calculadora de comprar contra alquilar más adelante.",
    ],
  },
  contact: {
    heading: "Quién la ha hecho",
    body:
      "Yohan Runhaar (yohanrunhaar.com), con ayuda de las comunidades de datos abiertos. Misma familia que howpoorami.org y howgreenami.org.",
  },
};

const de: AboutContent = {
  h1: "Über howaffordable.org",
  intro:
    "Ein kostenloses, offenes Tool, das aus Ihrem Einkommen und Ihren Ersparnissen ableitet, was für eine Immobilie Sie sich in Ihrem Land leisten können, wie sich die Erschwinglichkeit seit 1990 entwickelt hat und wo auf der Welt dasselbe Gehalt mehr Wohnraum kauft. Kein Login. Kein Tracking. Statische Seiten, alle Daten zur Build-Zeit eingebrannt.",
  howItWorks: {
    heading: "So funktioniert es",
    body: [
      "Geben Sie Ihr jährliches Haushaltseinkommen nach Steuern, Ihre Ersparnisse und Ihre bestehenden monatlichen Verbindlichkeiten ein. Wir prüfen das mit dem üblichen Schuldendienst-zu-Einkommen-Test der Banken.",
      "Wir verwenden landestypische Hypothekenzinsen der Zentralbanken (EZB, Federal Reserve, Bank of England usw.) und landestypische Mindest-Eigenkapitalquoten (5% in angelsächsischen Märkten, 20-30% in weiten Teilen Asiens und Südeuropas).",
      "Die Preis-Einkommens-Ratio ist der Median der Immobilienpreise eines Landes geteilt durch das Medianeinkommen der Haushalte, basierend auf der OECD Housing Database und den Immobilienpreis-Serien des BIS.",
      "Mit dem Länderabgleich sehen Sie, wie weit dasselbe Einkommen anderswo reicht. Nützlich, wenn Sie über einen Umzug nachdenken oder einfach wissen wollen, wo die Wohnungsmärkte am stärksten verzerrt sind.",
    ],
  },
  why: {
    heading: "Warum es das gibt",
    body: [
      "Die Erschwinglichkeit von Wohnraum ist das meistdiskutierte und am wenigsten quantifizierte Thema in den Finanzen einer Generation, die nach 2008 erwachsen wurde.",
      "Die meisten Online-Rechner zur Erschwinglichkeit werden von Hypothekenmaklern betrieben. Deren Anreiz ist es, Ihnen zu erzählen, Sie könnten sich mehr leisten, als Sie es tatsächlich können. Wir haben diesen Anreiz nicht: Das hier ist Open Source und läuft in Ihrem Browser.",
      "Wir zeigen außerdem den langfristigen Verlauf. Dasselbe Vielfache des Einkommens, das 1990 ein Haus gekauft hat, kauft 2025 eine kleine Wohnung. Das ist nicht Ihre Schuld, aber zu wissen, wie es kam, hilft.",
    ],
  },
  limits: {
    heading: "Was das nicht ist",
    body: [
      "Keine Finanzberatung. Das Schuldendienst-zu-Einkommen-Limit, das wir anwenden (36%), ist ein grober Branchenwert: Die tatsächlichen Grenzen variieren je nach Bank, Darlehensart und Bonitätsprofil.",
      "Nationale Mediane verbergen große Großstadt-Aufschläge. London liegt deutlich über dem Median des Vereinigten Königreichs, Tokio deutlich über dem Median Japans.",
      "Kaufen ist nicht immer besser als Mieten. Die Rechnung hängt von der Haltedauer, den Opportunitätskosten des Eigenkapitals und dem lokalen Miet-Kauf-Verhältnis ab. Eine Mieten-vs-Kaufen-Rechnung könnte später folgen.",
    ],
  },
  contact: {
    heading: "Wer das gebaut hat",
    body:
      "Yohan Runhaar (yohanrunhaar.com), mit Unterstützung der Open-Data-Communities. Aus derselben Familie wie howpoorami.org und howgreenami.org.",
  },
};

const fr: AboutContent = {
  h1: "À propos de howaffordable.org",
  intro:
    "Un outil gratuit et ouvert qui prend votre revenu et votre épargne et vous dit quel type de logement cela achète dans votre pays, comment l'accessibilité a évolué depuis 1990 et où, dans le monde, le même salaire achète plus de toit. Pas d'inscription. Pas de pistage. Pages statiques, toutes les données figées à la compilation.",
  howItWorks: {
    heading: "Comment ça marche",
    body: [
      "Saisissez le revenu annuel net de votre foyer, votre épargne et vos mensualités de crédit en cours. Nous appliquons le test classique du taux d'endettement utilisé par les banques.",
      "Nous utilisons les taux d'emprunt typiques de chaque pays publiés par les banques centrales (BCE, Federal Reserve, Bank of England, etc.) et les apports minimaux usuels (5% sur les marchés anglo-saxons, 20-30% dans une grande partie de l'Asie et du sud de l'Europe).",
      "Le ratio prix sur revenu correspond au prix médian d'un logement dans le pays divisé par le revenu médian des ménages, à partir de la OECD Housing Database et des séries de prix immobiliers du BIS.",
      "Les comparaisons entre pays vous permettent de voir jusqu'où va ce même revenu ailleurs. Utile si vous envisagez de déménager ou si vous êtes simplement curieux de savoir où les marchés sont les plus déformés.",
    ],
  },
  why: {
    heading: "Pourquoi cet outil existe",
    body: [
      "L'accessibilité du logement est le sujet le plus discuté et le moins chiffré dans les finances personnelles d'une génération devenue adulte après 2008.",
      "La plupart des calculatrices d'accessibilité en ligne sont gérées par des courtiers en crédit. Leur intérêt est de vous dire que vous pouvez emprunter plus que ce que vous pouvez réellement supporter. Nous n'avons pas cet intérêt : ce code est ouvert et tourne dans votre navigateur.",
      "Nous montrons aussi la trajectoire de long terme. Le même multiple du revenu qui achetait une maison en 1990 achète un petit appartement en 2025. Ce n'est pas de votre faute, mais le savoir aide.",
    ],
  },
  limits: {
    heading: "Ce que ce n'est pas",
    body: [
      "Pas un conseil financier. Le plafond d'endettement que nous appliquons (36%) est une valeur indicative du secteur : les plafonds réels varient selon la banque, le type de prêt et votre profil de crédit.",
      "Les médianes nationales masquent des écarts énormes par ville. Londres est très au-dessus de la médiane du Royaume-Uni ; Tokyo est très au-dessus de la médiane du Japon.",
      "Acheter n'est pas toujours mieux que louer. Le calcul dépend de la durée de détention, du coût d'opportunité de l'apport et du ratio loyer sur prix local. Nous ajouterons peut-être un calculateur acheter contre louer plus tard.",
    ],
  },
  contact: {
    heading: "Qui a fait ça",
    body:
      "Yohan Runhaar (yohanrunhaar.com), avec l'aide des communautés open data. Même famille que howpoorami.org et howgreenami.org.",
  },
};

const it: AboutContent = {
  h1: "Informazioni su howaffordable.org",
  intro:
    "Uno strumento gratuito e aperto che prende il tuo reddito e i tuoi risparmi e ti dice che tipo di casa puoi permetterti nel tuo paese, come è cambiata l'accessibilità dal 1990 e in quale parte del mondo lo stesso stipendio compra più tetto. Nessun login. Nessun tracciamento. Pagine statiche, tutti i dati congelati al momento del build.",
  howItWorks: {
    heading: "Come funziona",
    body: [
      "Inserisci il reddito annuo netto della tua famiglia, i tuoi risparmi e la rata mensile dei debiti in corso, e applichiamo il classico test del rapporto rata-reddito usato dalle banche.",
      "Usiamo i tassi di mutuo tipici di ciascun paese pubblicati dalle banche centrali (BCE, Federal Reserve, Bank of England, ecc.) e gli anticipi minimi usuali (5% nei mercati anglosassoni, 20-30% in gran parte dell'Asia e nel sud Europa).",
      "Il rapporto prezzo-reddito è il prezzo mediano nazionale della casa diviso per il reddito mediano delle famiglie, dalla OECD Housing Database e dalle serie sui prezzi immobiliari del BIS.",
      "I confronti tra paesi ti permettono di vedere fino a dove arriva lo stesso reddito altrove. Utile se stai pensando di trasferirti o se vuoi solo sapere dove i mercati immobiliari sono più distorti.",
    ],
  },
  why: {
    heading: "Perché esiste",
    body: [
      "L'accessibilità della casa è il tema più discusso e meno quantificato delle finanze personali di una generazione cresciuta dopo il 2008.",
      "La maggior parte dei calcolatori di accessibilità online è gestita da broker di mutui. Il loro incentivo è dirti che puoi permetterti più di quanto in realtà puoi. Noi non abbiamo questo incentivo: questo è codice aperto e gira nel tuo browser.",
      "Mostriamo anche la traiettoria di lungo periodo. Lo stesso multiplo del reddito che nel 1990 comprava una casa, nel 2025 compra un piccolo appartamento. Non è colpa tua, ma saperlo aiuta.",
    ],
  },
  limits: {
    heading: "Cosa non è",
    body: [
      "Non è una consulenza finanziaria. Il limite rata-reddito che applichiamo (36%) è una soglia indicativa del settore: i limiti reali variano in base alla banca, al tipo di mutuo e al profilo creditizio.",
      "Le mediane nazionali nascondono grandi premi urbani. Londra è molto sopra la mediana del Regno Unito; Tokyo è molto sopra la mediana del Giappone.",
      "Comprare non è sempre meglio che affittare. Il conto dipende dall'orizzonte temporale, dal costo opportunità dell'anticipo e dal rapporto affitto-prezzo locale. Potremmo aggiungere in futuro un calcolatore comprare contro affittare.",
    ],
  },
  contact: {
    heading: "Chi l'ha fatto",
    body:
      "Yohan Runhaar (yohanrunhaar.com), con l'aiuto delle comunità open data. Stessa famiglia di howpoorami.org e howgreenami.org.",
  },
};

const pt: AboutContent = {
  h1: "Sobre howaffordable.org",
  intro:
    "Uma ferramenta gratuita e aberta que pega no seu rendimento e nas suas poupanças e lhe diz que tipo de habitação isso compra no seu país, como a acessibilidade mudou desde 1990 e em que ponto do mundo o mesmo salário compra mais teto. Sem registo. Sem rastreio. Páginas estáticas, com todos os dados fixados no momento do build.",
  howItWorks: {
    heading: "Como funciona",
    body: [
      "Introduza o rendimento anual líquido do agregado, as suas poupanças e a sua dívida mensal já existente, e aplicamos o teste-padrão de rácio dívida-rendimento usado pelos bancos.",
      "Usamos as taxas de crédito habitação típicas de cada país publicadas pelos bancos centrais (BCE, Federal Reserve, Bank of England, etc.) e as entradas mínimas habituais (5% nos mercados anglo-saxónicos, 20-30% em boa parte da Ásia e do sul da Europa).",
      "O rácio preço-rendimento é o preço mediano nacional da habitação a dividir pelo rendimento mediano dos agregados, com base na OECD Housing Database e nas séries de preços imobiliários do BIS.",
      "As comparações entre países permitem-lhe ver até onde vai o mesmo rendimento noutros sítios. Útil se está a pensar mudar-se ou se simplesmente quer saber onde os mercados de habitação estão mais distorcidos.",
    ],
  },
  why: {
    heading: "Porque existe",
    body: [
      "A acessibilidade da habitação é o tema mais comentado e menos quantificado das finanças pessoais de uma geração que entrou na vida adulta depois de 2008.",
      "A maior parte das calculadoras de acessibilidade online é gerida por intermediários de crédito. O incentivo deles é dizer-lhe que pode comprar mais do que realmente consegue. Nós não temos esse incentivo: isto é código aberto e corre no seu navegador.",
      "Mostramos também a trajetória de longo prazo. O mesmo múltiplo do rendimento que comprava uma casa em 1990 compra um pequeno apartamento em 2025. A culpa não é sua, mas saber disto ajuda.",
    ],
  },
  limits: {
    heading: "O que isto não é",
    body: [
      "Não é aconselhamento financeiro. O limite dívida-rendimento que aplicamos (36%) é um valor de referência do setor: os limites reais variam consoante o banco, o tipo de empréstimo e o perfil de crédito.",
      "As medianas nacionais escondem grandes prémios urbanos. Londres está bem acima da mediana do Reino Unido; Tóquio está bem acima da mediana do Japão.",
      "Comprar nem sempre é melhor do que arrendar. As contas dependem do horizonte temporal, do custo de oportunidade da entrada e do rácio renda-preço local. Poderemos acrescentar mais tarde uma calculadora arrendar contra comprar.",
    ],
  },
  contact: {
    heading: "Quem fez isto",
    body:
      "Yohan Runhaar (yohanrunhaar.com), com a ajuda das comunidades de dados abertos. Mesma família que howpoorami.org e howgreenami.org.",
  },
};

const ja: AboutContent = {
  h1: "howaffordable.org について",
  intro:
    "あなたの収入と貯蓄から、自国でどんな住まいが買えるのか、1990年以降に住宅の手の届きやすさがどう変わったのか、そして世界のどこなら同じ給料でもっと広い屋根が買えるのかを示す、無料のオープンなツールです。ログイン不要。トラッキングなし。静的ページで、すべてのデータはビルド時に焼き込まれています。",
  howItWorks: {
    heading: "仕組み",
    body: [
      "世帯の年間税引後収入、貯蓄、毎月返済中の債務を入力すると、銀行が用いる標準的な債務収入比（DTI）テストを実行します。",
      "各国の代表的な住宅ローン金利は中央銀行（ECB、Federal Reserve、Bank of England など）の公表値を使い、頭金の最低水準も国別の慣行（英米圏で5%、アジアや南欧の多くで20〜30%）に合わせています。",
      "住宅価格年収倍率は、各国の住宅価格中央値を世帯所得中央値で割ったもので、OECD Housing Database および BIS の住宅価格系列を出典としています。",
      "国別比較では、同じ収入が他の国でどこまで届くかを確認できます。引っ越しを検討している方や、住宅市場がどこで最もゆがんでいるか知りたい方に向いています。",
    ],
  },
  why: {
    heading: "なぜ作ったのか",
    body: [
      "住宅の手の届きやすさは、2008年以降に大人になった世代にとって最も語られながら、最も数値化されていない家計のテーマです。",
      "オンラインの住宅ローン試算ツールの多くはモーゲージ・ブローカーが運営しています。彼らの動機は「実際より多く借りられる」と告げることです。私たちにそのような動機はありません。ソースコードは公開されており、計算はあなたのブラウザの中だけで完結します。",
      "長期の推移も示します。1990年に一軒家を買えたのと同じ年収倍率で、2025年には小さなマンションしか買えません。あなたのせいではありませんが、知っておくと判断に役立ちます。",
    ],
  },
  limits: {
    heading: "これは何ではないか",
    body: [
      "金融アドバイスではありません。当ツールが用いる債務収入比の上限（36%）は業界の目安にすぎず、実際の上限は銀行・ローン商品・与信プロファイルによって異なります。",
      "全国の中央値は、大都市の上乗せを覆い隠します。ロンドンはイギリスの中央値より大幅に高く、東京は日本の中央値より大幅に高くなります。",
      "購入が常に賃貸より有利とは限りません。保有期間、頭金の機会費用、地域の家賃価格比によって結論は変わります。賃貸対購入の計算機は将来追加するかもしれません。",
    ],
  },
  contact: {
    heading: "作った人",
    body:
      "Yohan Runhaar（yohanrunhaar.com）。オープンデータコミュニティの協力を得て制作。howpoorami.org および howgreenami.org と同じファミリーです。",
  },
};

const zhCn: AboutContent = {
  h1: "关于 howaffordable.org",
  intro:
    "一个免费、开放的工具：根据你的收入和储蓄，告诉你在自己国家能买什么样的房子、自 1990 年以来住房可负担程度的变化，以及在世界的哪些地方同样的工资可以买到更多屋顶。无需登录，无追踪。纯静态页面，所有数据在构建时一次性打包。",
  howItWorks: {
    heading: "工作原理",
    body: [
      "输入家庭年度税后收入、现有储蓄以及每月在还的债务，我们就会运行银行常用的债务收入比（DTI）测试。",
      "我们采用各国央行（欧洲央行、Federal Reserve、Bank of England 等）公布的本国典型房贷利率，以及各国普遍要求的最低首付比例（英美市场约 5%，亚洲和南欧多数地区为 20%~30%）。",
      "房价收入比是该国房价中位数除以家庭收入中位数，数据来源为 OECD Housing Database 与 BIS 的房地产价格系列。",
      "通过跨国比较，你可以看到同样的收入在其他地方能走多远。准备搬家或想知道哪里的房地产市场最扭曲的人会觉得有用。",
    ],
  },
  why: {
    heading: "为什么有这个工具",
    body: [
      "对 2008 年之后步入社会的一代人来说，住房可负担性是个人理财中被讨论最多、却被量化最少的话题。",
      "网上多数房贷计算器都是由按揭中介运营的。他们的动机是告诉你：你能买得起的比实际更多。我们没有这种动机：代码开源，运算全在你浏览器里完成。",
      "我们还展示了长期走势。1990 年用同样的收入倍数能买一套独栋，2025 年只能买一套小公寓。这不是你的错，但知道这件事有帮助。",
    ],
  },
  limits: {
    heading: "它不是什么",
    body: [
      "不是财务建议。我们使用的债务收入比上限（36%）只是行业惯用的粗略默认值，实际额度因银行、贷款类型和信用情况而异。",
      "全国中位数会掩盖大城市的溢价。伦敦远高于英国中位数；东京远高于日本中位数。",
      "买房并非总是优于租房。这笔账要看持有年限、首付的机会成本以及当地的租售比。我们以后可能会加一个买房与租房比较的计算器。",
    ],
  },
  contact: {
    heading: "是谁做的",
    body:
      "Yohan Runhaar（yohanrunhaar.com），并感谢开放数据社区的协助。与 howpoorami.org、howgreenami.org 同属一个项目家族。",
  },
};

export const ABOUT: Readonly<Record<LocaleCode, AboutContent>> = {
  en, es, de, fr, "zh-cn": zhCn, ja, pt, it,
};
