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
    home: "計算ツール",
    compare: "国を比較",
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
  },
  common: {
    perYear: "年あたり",
    perMonth: "月あたり",
    years: "年",
    loading: "読み込み中...",
    errorTitle: "問題が発生しました",
    errorBody: "ページを再読み込みしてください。それでも続く場合は、GitHubでissueを開いてください。",
  },
};
