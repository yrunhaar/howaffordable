import type { Dictionary } from "../dictionary";

export const ja: Dictionary = {
  meta: {
    siteTitle: "家を買えますか？",
    homeTitleTemplate: "家を買えますか？| howaffordable.org",
    homeDescription:
      "収入と貯蓄から、あなたの国でどんな家が買えるのか、1990年以降に住宅取得のしやすさがどう変わったのか、そして世界のどこであなたのお金が一番遠くまで届くのかを教える、無料でオープンなツールです。",
    homeOgTitle: "家を買えますか？",
    homeOgDescription:
      "本当の価格、本当の収入、本当の金利。あなたの国と他47カ国での住宅取得スコアを確認できます。ログイン不要。",
  },
  nav: {
    home: "どれくらい手頃？",
    compare: "国を比較",
    report: "Report",
    methodology: "方法論",
    faq: "FAQ",
    about: "概要",
    menu: "メニュー",
    close: "閉じる",
  },
  home: {
    headline: "あなたは家を買えますか？",
    subheadline:
      "収入と貯蓄を入れる。買える家の価格、頭金までの年数、1990年との比較が出ます。",
    chooseCountryLabel: "お住まいはどこですか？",
  },
  country: {
    headlineTemplate: "{country}で家を買えますか？",
    verdictAffordable: "歴史的水準では手が届く",
    verdictStretch: "ぎりぎり、歴史的な標準を上回る",
    verdictUnaffordable: "Demographiaの分類では手が届かない",
    verdictOutOfReach: "中央値世帯にとっては遠く及ばない",
    bodyTemplate:
      "{country}の住宅価格の中央値は{price}、中央値世帯の所得は{income}で、価格対所得比は{ratio}倍です。所得に対する住宅費用で{total}カ国中{rank}位。",
    statMedianHomeLabel: "住宅価格の中央値",
    statMedianHomeSub: "{anchor}",
    statMedianIncomeLabel: "世帯所得の中央値",
    statMedianIncomeSub: "税引き後",
    statMortgageLabel: "平均住宅ローン金利",
    statMortgageSub: "最低頭金{pct}％",
    historyHeading: "{country}の住宅取得性の推移",
    historyBodyTemplate:
      "価格対所得比は{peakYear}年に{peakValue}倍でピークでした。現在は{todayValue}倍。{shift} 同じ期間にOECD平均は{oecdYear}年の{oecdStart}倍から現在の{oecdToday}倍に推移しました。",
    historyShiftTemplate:
      "{startYear}年に現在の所得があったなら、国の中央値住宅に対して現在の購買力の{pct}％を手にできた計算になります。",
    calculatorHeadingTemplate: "あなたにとって{country}はどれくらい手が届きますか？",
    calculatorSubheadingTemplate:
      "所得と貯蓄を入力すると、あなた個人の上限価格、頭金までの年数、{country}の中央値との比較が表示されます。",
  },
  calculator: {
    heading: "あなたの家計について教えてください",
    intro: "年間の数字です。変更しない限り、各国の典型的な金利と最低頭金比率を使います。",
    incomeLabel: "世帯の年間所得（税引き後）",
    incomeHelp: "世帯全員の手取り収入の合計です。",
    savingsLabel: "頭金にあてられる貯蓄",
    savingsHelp: "流動性のある貯蓄のみ。年金資産は含めません。",
    debtLabel: "現在の月々の返済額",
    debtHelp: "学生ローン、自動車ローン、クレジットカードの最低支払い。家賃は含めません。",
    mortgageYearsLabel: "住宅ローンの期間（年）",
    savingsRateLabel: "貯蓄率（年収に対する％）",
    savingsRateHelp: "毎年、収入のうちどれだけ貯蓄に回せるか。OECDの中央値は約7％です。",
    seeResults: "買えるか確認する",
    recalculate: "やり直す",
  },
  result: {
    heading: "あなたの住宅取得スナップショット",
    maxPriceLabel: "あなたが買える上限価格",
    priceToIncomeLabel: "国の住宅価格の中央値",
    priceToIncomeYears: "あなたの年収の{ratio}倍",
    verdict: {
      affordable: "手が届く：中央値の住宅は年収の4倍未満",
      stretch: "ぎりぎり：中央値の住宅は年収の4〜6倍",
      unaffordable: "手が届かない：中央値の住宅は年収の6〜10倍",
      out_of_reach: "遠く及ばない：中央値の住宅は年収の10倍超",
    },
    downPaymentLabel: "中央値住宅の最低頭金",
    yearsToDownPaymentLabel: "頭金を貯めるのにかかる年数",
    yearsToDownPaymentTemplate: "現在の貯蓄率で{years}年",
    mortgageMonthlyLabel: "中央値住宅の月々の返済",
    burdenLabel: "月々の手取りに対する％",
    compareHeading: "他との比較",
    compareCountry: "{country}の中央値住宅",
    compareOECD: "OECD平均の価格対所得比",
    compareHistoric: "長期の歴史的平均（1990-2010）",
    narrativeHeading: "これが意味するもの",
    narrativeBody: "あなたの上限価格は、国の平均住宅ローン金利と標準的な36％の所得対返済テストに基づき、銀行があなたの所得に対して認める融資額の上限です。判定の帯は、Demographiaの取得性分類に従い、国の中央値住宅価格をあなたの所得の倍数として見ます。両方を合わせると、あなた自身がどれだけ借りられるか、そしてあなたの所得に対して市場がどこに位置しているかが分かります。両者が近いほど、中央値ぎりぎりに立っており、安全マージンはわずかです。",
    burdenHeading: "ローン負担と銀行の基準",
    burdenIntro: "多くの銀行は月々のローンを総所得の36％までに制限します。一部は43％まで。28％未満は余裕があり、基準を超えるとローンは否決されるか、条件付きでしか承認されません。",
    burdenComfortable: "余裕：銀行のDTI上限を大きく下回り、修繕、貯蓄、金利上昇への余地があります。",
    burdenManageable: "対応可能：36％の上限内ですが、緊急時の余裕は限られます。",
    burdenStretched: "厳しい：標準の36％上限を超えています。43％まで認める銀行もありますが、金利が1ポイント上がるたびに家計を圧迫します。",
    burdenOverLimit: "限界超過：多くの銀行はこの水準では承認しません。より安い住宅、より多い頭金、より長い返済期間が必要です。",
    burdenYouLabel: "あなた",
    historyHeading: "取得性の推移",
    historyIntro: "1990年から現在までの{country}の価格対所得比。線が上がるほど、同じ所得で買える住宅は減ります。",
    historyAffordabilityShiftTemplate: "{year}年に同じ所得があったなら、国の中央値住宅に対して現在の購買力の{pct}を手にできた計算になります。",
    crossHeading: "あなたの相対所得で世界では何が買えるか",
    crossIntro: "自国の所得分布における自分の位置を、他国に当てはめます。同じ相対所得、異なる市場。",
    crossColumnCountry: "国",
    crossColumnAffordable: "上限価格",
    crossColumnRatio: "中央値 × あなたの所得",
    crossColumnVerdict: "判定",
    rentHeading: "購入と賃貸の比較",
    rentIntro: "国の中央値住宅の月々のローン返済と、国の中央値家賃の比較です。",
    rentMonthlyLabel: "中央値の月額家賃",
    mortgageMonthlyOnMedianLabel: "中央値住宅のローン返済",
    rentBuyDiffMore: "中央値で購入すると賃貸より月々約{amount}高くなりますが、時間とともに資産を築けます。",
    rentBuyDiffLess: "中央値で購入すると賃貸より月々約{amount}安くなります。購入と賃貸の計算は保有期間や価格上昇にも左右されます。",
    takeawaysHeading: "注意すべき点",
    takeawaysIntro: "あなたのスナップショットから読み取れる実務的な要点。",
  },
  chart: {
    historicalHeading: "1990年以降の価格対所得比",
    historicalSubtitle: "{country}とOECD平均",
    currentLabel: "現在",
  },
  cta: {
    support: {
      heading: "このプロジェクトを応援する",
      body:
        "無料、オープン、広告なし、追跡なし。役に立ったなら、少額のチップでオープンな教育ツールを作り続けられます。",
      ctaLabel: "Ko-fiでチップを送る",
    },
    furtherReading: {
      heading: "さらに読む",
      body:
        "この計算ツールの土台になった本。Bookshop.org経由で買うと、地域の独立系書店に一部が回ります。",
      ctaLabel: "リーディングリストを見る",
      disclosure: "Bookshopのアフィリエイトリンクです。",
    },
    sister: {
      heading: "姉妹プロジェクト",
      body: "同じデザイン、違う問い。",
      howpoorami: "私はどれくらい貧しい？",
      howgreenami: "私のカーボンフットプリントはどれくらい？",
    },
  },
  footer: {
    tagline: "オープンデータ、実数値、追跡なし。",
    source: "データソース",
    license: "ライセンス",
    madeBy: "Yohan Runhaarが制作",
    about: "概要",
    faq: "よくある質問",
    methodology: "手法",
    github: "GitHub",
    support: "コーヒーをおごる",
    buildDateTemplate: "データ更新日 {date}",
  },
  report: {
    title: "個人向け住宅取得性レポート",
    subtitle: "実際の価格、実際の所得、実際の金利を、あなたの数字に合わせて。",
    preparedFor: "対象：{country}、{date}",
    landingTitle: "あなたの個人向け住宅取得性レポート",
    landingFreeBadge: "無料。登録、支払い、メールアドレス、すべて不要",
    landingFeatureA: {
      title: "あなたの上限価格",
      body:
        "あなたの所得と貯蓄、国の住宅ローン金利、そして標準的な36％の所得対返済比率の上限から計算されます。加えて国の中央値との差も。",
    },
    landingFeatureB: {
      title: "国と歴史の文脈",
      body:
        "あなたの国が世界の取得性ランキングのどこに位置し、価格対所得比が数十年にわたってどう推移してきたか。",
    },
    landingFeatureC: {
      title: "完全にプライベート",
      body:
        "PDFはブラウザ内で生成されます。サーバーには何も送信されません。メールも、アカウントも、トラッキングもありません。",
    },
    landingPicker: {
      title: "レポートを生成する",
      subtitle: "国を選び、所得と貯蓄を入力するだけ。あとはこちらで処理します。",
      countryLabel: "国",
      incomeLabel: "世帯の年間所得（税引き後）",
      incomeHelp: "世帯全員の手取り収入の合計です。",
      savingsLabel: "頭金にあてられる貯蓄",
      savingsHelp: "流動性のある貯蓄のみ。年金資産は含めません。",
      generateButton: "PDFを生成する",
      generatingButton: "生成中...",
    },
    pdfPageLabel: "ページ",
    pdfFooterAttribution: "howaffordable.org・オープンデータ・トラッキングなし",
    pdfCoverGeneratedLabel: "生成日",
    pdfYourPriceLabel: "あなたが買える上限価格",
    pdfMaxPriceLeadIn: "あなたの借入上限",
    pdfCoverNarrative:
      "あなたの上限価格は、国の平均住宅ローン金利と36％のDTIテストに基づき、銀行があなたの所得に対して認める融資額の上限です。以降のページでは、国の中央値、国の歴史的推移、購入と賃貸の経済性に照らしてこの数字を位置づけます。",
    pdfSection1Title: "あなたのスナップショット",
    pdfSection1Body:
      "上限価格、国の中央値住宅に対する月々のローン返済、あなたの上限と国の中央値との差、現在の貯蓄率で典型的な頭金を貯めるのにかかる年数。",
    pdfSection2Title: "国の位置",
    pdfSection2Body:
      "国の住宅価格中央値、世帯所得中央値、住宅ローン金利、最低頭金比率。",
    pdfSection3Title: "国の比較",
    pdfSection3Body:
      "あなたの国の所得分布における相対的な位置を他の市場に当てはめた結果。同じパーセンタイル、異なる市場。",
    pdfHistoricalTitle: "取得性の推移",
    pdfHistoricalBody:
      "OECDとBISのデータで利用可能な期間における、あなたの国の価格対所得比。線が高いほど、中央値世帯にとって市場は厳しくなります。",
    pdfHistoricalInsightTemplate:
      "{country}の価格対所得比は{firstYear}年に{firstValue}倍でした。{lastYear}年には{lastValue}倍。{direction} 期間中{magnitude}倍。",
    pdfHistoricalNoData:
      "この国には長期の歴史的時系列がありません。上のスナップショットはそのまま当てはまります。",
    pdfTakeawaysTitle: "実務的に意味するもの",
    pdfTakeawaysIntro:
      "返済負担、比率、国の制度を踏まえた、あなたのスナップショットの個別の読み取り。",
    pdfTakeawaysAffordable:
      "あなたの国の中央値住宅は十分手の届く範囲です。価格は中央値所得の4倍未満。残る決断は、どこで買うか、どれだけ大胆にレバレッジを効かせるかです。",
    pdfTakeawaysStretch:
      "あなたの国の中央値住宅はぎりぎりの水準です。所得の4〜6倍では、購入には通常、強い頭金、長いローン期間、または小さめか郊外の住宅を受け入れることが必要になります。",
    pdfTakeawaysUnaffordable:
      "あなたの国の中央値住宅はDemographiaの分類で手が届きません。所得の6〜10倍。購入には家族の支援、共働き、または広さや立地の大幅な妥協が求められることが多いです。",
    pdfTakeawaysOutOfReach:
      "所得の10倍を超えると、外部資本なしに国の中央値住宅を所有することは事実上不可能です。地域の家賃対価格比に注意し、長期的には賃貸のほうが優位な可能性もあります。",
    pdfTakeawaysBuyVsRent:
      "年間家賃の約15倍を下回る場合、5年以上の保有では通常、購入が賃貸を上回ります。約25倍を超えると賃貸が明らかに有利です。購入と賃貸の計算は比率だけでなく、保有期間と価格上昇にも左右されます。",
    pdfMethodologyTitle: "方法論",
    pdfMethodologyBody:
      "住宅価格中央値と価格対所得比はOECD Affordable Housing DatabaseとBIS Selected Property Price Seriesから。住宅ローン金利はECB SDW（ユーロ圏）、Federal Reserve H.15（米国）、Bank of England（英国）、その他は各国中央銀行から。取得性の分類にはDemographiaの帯を使用。計算は完全にクライアント側で実行され、サーバーには何も送信されません。",
    pdfTipTitle: "このレポートが気に入りましたか？",
    pdfTipBody:
      "無料、広告なし。役立ったなら、Ko-fiでの少額のチップが、開かれた教育ツールを作り続ける助けになります。",
    pdfFilenameTemplate: "howaffordable-{country}-{date}.pdf",
  },
  common: {
    perYear: "年あたり",
    perMonth: "月あたり",
    years: "年",
    loading: "読み込み中. .",
    errorTitle: "問題が発生しました",
    errorBody: "ページを再読み込みしてください。それでも続く場合は、GitHubでissueを開いてください。",
  },
};
