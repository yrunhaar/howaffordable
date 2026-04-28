/**
 * Country-level housing affordability data.
 *
 * Sources:
 * - Median home price and median household income: OECD Housing Database (Q4 2024 update),
 *   national statistics offices, BIS Selected Property Price Series.
 *   https://www.oecd.org/housing/data/affordable-housing-database/
 * - Mortgage interest rate: ECB Statistical Data Warehouse (eurozone),
 *   FRED H.15 (US 30Y fixed mortgage average), national central banks elsewhere (2025 Q1).
 * - Down payment requirement: typical bank policy by country, expressed as
 *   the minimum equity share needed to qualify for a standard mortgage.
 * - Price-to-income ratio: OECD ratio of nominal house prices to nominal
 *   disposable income per household (OECD index 2015 = 100 rebased to absolute).
 *
 * Currency is local. All prices in country currency.
 */

export type CountryCode =
  | "US" | "CA" | "MX" | "BR" | "AR"
  | "GB" | "FR" | "DE" | "IT" | "ES" | "NL" | "BE" | "CH" | "AT"
  | "SE" | "NO" | "DK" | "FI" | "IE" | "PT" | "PL" | "CZ" | "GR" | "HU" | "RO"
  | "RU" | "TR"
  | "CN" | "JP" | "KR" | "IN" | "ID" | "VN" | "TH" | "PH" | "MY" | "SG"
  | "AU" | "NZ"
  | "ZA" | "EG" | "NG" | "MA"
  | "IL" | "AE" | "SA";

export interface CountryHousingData {
  readonly code: CountryCode;
  readonly name: string;
  readonly flag: string;
  readonly currency: string;
  /** Median home price for an apartment or house (urban areas), in local currency. */
  readonly medianHomePrice: number;
  /** Median household disposable income, in local currency. */
  readonly medianHouseholdIncome: number;
  /** Average annual mortgage interest rate, as a percentage. */
  readonly mortgageRatePct: number;
  /** Typical minimum down payment as fraction of price (e.g. 0.10 = 10%). */
  readonly minDownPaymentFraction: number;
  /** Median monthly rent for a city centre apartment, local currency. */
  readonly medianRentMonthly: number;
  /** Capital city or representative city for the country anchor. */
  readonly anchorCity: string;
}

/**
 * 47 countries covering most OECD members + key emerging markets.
 * Numbers reflect Q1 2025 values where available, OECD/BIS Q4 2024 otherwise.
 * National medians, not city. City premiums vary widely.
 */
export const COUNTRIES: Readonly<Record<CountryCode, CountryHousingData>> = {
  US: { code: "US", name: "United States", flag: "🇺🇸", currency: "USD", medianHomePrice: 412_000, medianHouseholdIncome: 80_610, mortgageRatePct: 6.85, minDownPaymentFraction: 0.05, medianRentMonthly: 1_750, anchorCity: "United States average" },
  CA: { code: "CA", name: "Canada", flag: "🇨🇦", currency: "CAD", medianHomePrice: 720_000, medianHouseholdIncome: 79_720, mortgageRatePct: 5.04, minDownPaymentFraction: 0.05, medianRentMonthly: 2_100, anchorCity: "Canada average" },
  MX: { code: "MX", name: "Mexico", flag: "🇲🇽", currency: "MXN", medianHomePrice: 2_200_000, medianHouseholdIncome: 220_000, mortgageRatePct: 10.5, minDownPaymentFraction: 0.10, medianRentMonthly: 12_000, anchorCity: "Mexico City" },
  BR: { code: "BR", name: "Brazil", flag: "🇧🇷", currency: "BRL", medianHomePrice: 580_000, medianHouseholdIncome: 36_000, mortgageRatePct: 11.2, minDownPaymentFraction: 0.20, medianRentMonthly: 2_500, anchorCity: "São Paulo" },
  AR: { code: "AR", name: "Argentina", flag: "🇦🇷", currency: "USD", medianHomePrice: 95_000, medianHouseholdIncome: 9_600, mortgageRatePct: 4.0, minDownPaymentFraction: 0.30, medianRentMonthly: 480, anchorCity: "Buenos Aires (USD)" },

  GB: { code: "GB", name: "United Kingdom", flag: "🇬🇧", currency: "GBP", medianHomePrice: 285_000, medianHouseholdIncome: 36_700, mortgageRatePct: 4.65, minDownPaymentFraction: 0.05, medianRentMonthly: 1_350, anchorCity: "United Kingdom average" },
  FR: { code: "FR", name: "France", flag: "🇫🇷", currency: "EUR", medianHomePrice: 245_000, medianHouseholdIncome: 26_700, mortgageRatePct: 3.45, minDownPaymentFraction: 0.10, medianRentMonthly: 950, anchorCity: "France average" },
  DE: { code: "DE", name: "Germany", flag: "🇩🇪", currency: "EUR", medianHomePrice: 310_000, medianHouseholdIncome: 47_600, mortgageRatePct: 3.85, minDownPaymentFraction: 0.10, medianRentMonthly: 1_050, anchorCity: "Germany average" },
  IT: { code: "IT", name: "Italy", flag: "🇮🇹", currency: "EUR", medianHomePrice: 175_000, medianHouseholdIncome: 22_600, mortgageRatePct: 3.55, minDownPaymentFraction: 0.20, medianRentMonthly: 750, anchorCity: "Italy average" },
  ES: { code: "ES", name: "Spain", flag: "🇪🇸", currency: "EUR", medianHomePrice: 200_000, medianHouseholdIncome: 28_400, mortgageRatePct: 3.30, minDownPaymentFraction: 0.20, medianRentMonthly: 900, anchorCity: "Spain average" },
  NL: { code: "NL", name: "Netherlands", flag: "🇳🇱", currency: "EUR", medianHomePrice: 460_000, medianHouseholdIncome: 36_500, mortgageRatePct: 3.80, minDownPaymentFraction: 0.00, medianRentMonthly: 1_650, anchorCity: "Netherlands average" },
  BE: { code: "BE", name: "Belgium", flag: "🇧🇪", currency: "EUR", medianHomePrice: 295_000, medianHouseholdIncome: 31_200, mortgageRatePct: 3.30, minDownPaymentFraction: 0.10, medianRentMonthly: 950, anchorCity: "Belgium average" },
  CH: { code: "CH", name: "Switzerland", flag: "🇨🇭", currency: "CHF", medianHomePrice: 1_180_000, medianHouseholdIncome: 92_700, mortgageRatePct: 2.05, minDownPaymentFraction: 0.20, medianRentMonthly: 2_100, anchorCity: "Switzerland average" },
  AT: { code: "AT", name: "Austria", flag: "🇦🇹", currency: "EUR", medianHomePrice: 320_000, medianHouseholdIncome: 32_700, mortgageRatePct: 3.50, minDownPaymentFraction: 0.20, medianRentMonthly: 1_050, anchorCity: "Austria average" },
  SE: { code: "SE", name: "Sweden", flag: "🇸🇪", currency: "SEK", medianHomePrice: 3_650_000, medianHouseholdIncome: 510_000, mortgageRatePct: 4.10, minDownPaymentFraction: 0.15, medianRentMonthly: 9_800, anchorCity: "Sweden average" },
  NO: { code: "NO", name: "Norway", flag: "🇳🇴", currency: "NOK", medianHomePrice: 4_350_000, medianHouseholdIncome: 720_000, mortgageRatePct: 5.45, minDownPaymentFraction: 0.15, medianRentMonthly: 14_500, anchorCity: "Norway average" },
  DK: { code: "DK", name: "Denmark", flag: "🇩🇰", currency: "DKK", medianHomePrice: 2_750_000, medianHouseholdIncome: 350_000, mortgageRatePct: 4.30, minDownPaymentFraction: 0.05, medianRentMonthly: 9_500, anchorCity: "Denmark average" },
  FI: { code: "FI", name: "Finland", flag: "🇫🇮", currency: "EUR", medianHomePrice: 220_000, medianHouseholdIncome: 32_800, mortgageRatePct: 3.50, minDownPaymentFraction: 0.10, medianRentMonthly: 950, anchorCity: "Finland average" },
  IE: { code: "IE", name: "Ireland", flag: "🇮🇪", currency: "EUR", medianHomePrice: 345_000, medianHouseholdIncome: 49_000, mortgageRatePct: 4.05, minDownPaymentFraction: 0.10, medianRentMonthly: 1_750, anchorCity: "Ireland average" },
  PT: { code: "PT", name: "Portugal", flag: "🇵🇹", currency: "EUR", medianHomePrice: 250_000, medianHouseholdIncome: 19_700, mortgageRatePct: 3.50, minDownPaymentFraction: 0.20, medianRentMonthly: 950, anchorCity: "Portugal average" },
  PL: { code: "PL", name: "Poland", flag: "🇵🇱", currency: "PLN", medianHomePrice: 580_000, medianHouseholdIncome: 76_000, mortgageRatePct: 7.85, minDownPaymentFraction: 0.20, medianRentMonthly: 3_200, anchorCity: "Poland average" },
  CZ: { code: "CZ", name: "Czech Republic", flag: "🇨🇿", currency: "CZK", medianHomePrice: 5_400_000, medianHouseholdIncome: 580_000, mortgageRatePct: 5.20, minDownPaymentFraction: 0.20, medianRentMonthly: 18_000, anchorCity: "Czech Republic average" },
  GR: { code: "GR", name: "Greece", flag: "🇬🇷", currency: "EUR", medianHomePrice: 165_000, medianHouseholdIncome: 17_000, mortgageRatePct: 4.10, minDownPaymentFraction: 0.20, medianRentMonthly: 600, anchorCity: "Greece average" },
  HU: { code: "HU", name: "Hungary", flag: "🇭🇺", currency: "HUF", medianHomePrice: 65_000_000, medianHouseholdIncome: 7_200_000, mortgageRatePct: 7.10, minDownPaymentFraction: 0.20, medianRentMonthly: 220_000, anchorCity: "Hungary average" },
  RO: { code: "RO", name: "Romania", flag: "🇷🇴", currency: "RON", medianHomePrice: 380_000, medianHouseholdIncome: 76_000, mortgageRatePct: 7.20, minDownPaymentFraction: 0.15, medianRentMonthly: 2_700, anchorCity: "Romania average" },
  RU: { code: "RU", name: "Russia", flag: "🇷🇺", currency: "RUB", medianHomePrice: 8_500_000, medianHouseholdIncome: 750_000, mortgageRatePct: 18.5, minDownPaymentFraction: 0.20, medianRentMonthly: 45_000, anchorCity: "Russia average" },
  TR: { code: "TR", name: "Turkey", flag: "🇹🇷", currency: "TRY", medianHomePrice: 4_500_000, medianHouseholdIncome: 290_000, mortgageRatePct: 41.0, minDownPaymentFraction: 0.30, medianRentMonthly: 22_000, anchorCity: "Turkey average" },

  CN: { code: "CN", name: "China", flag: "🇨🇳", currency: "CNY", medianHomePrice: 1_350_000, medianHouseholdIncome: 90_000, mortgageRatePct: 3.45, minDownPaymentFraction: 0.30, medianRentMonthly: 3_500, anchorCity: "China major cities" },
  JP: { code: "JP", name: "Japan", flag: "🇯🇵", currency: "JPY", medianHomePrice: 36_000_000, medianHouseholdIncome: 4_590_000, mortgageRatePct: 1.45, minDownPaymentFraction: 0.10, medianRentMonthly: 90_000, anchorCity: "Japan average" },
  KR: { code: "KR", name: "South Korea", flag: "🇰🇷", currency: "KRW", medianHomePrice: 760_000_000, medianHouseholdIncome: 65_000_000, mortgageRatePct: 4.50, minDownPaymentFraction: 0.30, medianRentMonthly: 1_400_000, anchorCity: "South Korea average" },
  IN: { code: "IN", name: "India", flag: "🇮🇳", currency: "INR", medianHomePrice: 6_000_000, medianHouseholdIncome: 380_000, mortgageRatePct: 8.75, minDownPaymentFraction: 0.20, medianRentMonthly: 22_000, anchorCity: "India urban" },
  ID: { code: "ID", name: "Indonesia", flag: "🇮🇩", currency: "IDR", medianHomePrice: 750_000_000, medianHouseholdIncome: 75_000_000, mortgageRatePct: 9.50, minDownPaymentFraction: 0.20, medianRentMonthly: 4_500_000, anchorCity: "Indonesia urban" },
  VN: { code: "VN", name: "Vietnam", flag: "🇻🇳", currency: "VND", medianHomePrice: 3_200_000_000, medianHouseholdIncome: 165_000_000, mortgageRatePct: 9.50, minDownPaymentFraction: 0.30, medianRentMonthly: 9_000_000, anchorCity: "Vietnam urban" },
  TH: { code: "TH", name: "Thailand", flag: "🇹🇭", currency: "THB", medianHomePrice: 4_200_000, medianHouseholdIncome: 360_000, mortgageRatePct: 6.25, minDownPaymentFraction: 0.20, medianRentMonthly: 16_000, anchorCity: "Thailand urban" },
  PH: { code: "PH", name: "Philippines", flag: "🇵🇭", currency: "PHP", medianHomePrice: 4_500_000, medianHouseholdIncome: 320_000, mortgageRatePct: 7.50, minDownPaymentFraction: 0.20, medianRentMonthly: 22_000, anchorCity: "Philippines urban" },
  MY: { code: "MY", name: "Malaysia", flag: "🇲🇾", currency: "MYR", medianHomePrice: 450_000, medianHouseholdIncome: 80_000, mortgageRatePct: 4.40, minDownPaymentFraction: 0.10, medianRentMonthly: 1_900, anchorCity: "Malaysia urban" },
  SG: { code: "SG", name: "Singapore", flag: "🇸🇬", currency: "SGD", medianHomePrice: 1_650_000, medianHouseholdIncome: 122_000, mortgageRatePct: 3.10, minDownPaymentFraction: 0.25, medianRentMonthly: 4_500, anchorCity: "Singapore" },

  AU: { code: "AU", name: "Australia", flag: "🇦🇺", currency: "AUD", medianHomePrice: 798_000, medianHouseholdIncome: 100_700, mortgageRatePct: 6.30, minDownPaymentFraction: 0.10, medianRentMonthly: 2_400, anchorCity: "Australia average" },
  NZ: { code: "NZ", name: "New Zealand", flag: "🇳🇿", currency: "NZD", medianHomePrice: 802_000, medianHouseholdIncome: 86_000, mortgageRatePct: 6.45, minDownPaymentFraction: 0.20, medianRentMonthly: 2_350, anchorCity: "New Zealand average" },

  ZA: { code: "ZA", name: "South Africa", flag: "🇿🇦", currency: "ZAR", medianHomePrice: 1_350_000, medianHouseholdIncome: 320_000, mortgageRatePct: 11.75, minDownPaymentFraction: 0.10, medianRentMonthly: 8_500, anchorCity: "South Africa urban" },
  EG: { code: "EG", name: "Egypt", flag: "🇪🇬", currency: "EGP", medianHomePrice: 2_800_000, medianHouseholdIncome: 165_000, mortgageRatePct: 26.0, minDownPaymentFraction: 0.30, medianRentMonthly: 9_500, anchorCity: "Egypt urban" },
  NG: { code: "NG", name: "Nigeria", flag: "🇳🇬", currency: "NGN", medianHomePrice: 60_000_000, medianHouseholdIncome: 3_500_000, mortgageRatePct: 22.0, minDownPaymentFraction: 0.30, medianRentMonthly: 250_000, anchorCity: "Nigeria urban" },
  MA: { code: "MA", name: "Morocco", flag: "🇲🇦", currency: "MAD", medianHomePrice: 1_200_000, medianHouseholdIncome: 90_000, mortgageRatePct: 5.30, minDownPaymentFraction: 0.20, medianRentMonthly: 4_500, anchorCity: "Morocco urban" },

  IL: { code: "IL", name: "Israel", flag: "🇮🇱", currency: "ILS", medianHomePrice: 2_350_000, medianHouseholdIncome: 270_000, mortgageRatePct: 5.10, minDownPaymentFraction: 0.25, medianRentMonthly: 5_800, anchorCity: "Israel average" },
  AE: { code: "AE", name: "United Arab Emirates", flag: "🇦🇪", currency: "AED", medianHomePrice: 1_700_000, medianHouseholdIncome: 360_000, mortgageRatePct: 4.85, minDownPaymentFraction: 0.20, medianRentMonthly: 7_500, anchorCity: "UAE urban" },
  SA: { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", currency: "SAR", medianHomePrice: 980_000, medianHouseholdIncome: 230_000, mortgageRatePct: 5.85, minDownPaymentFraction: 0.10, medianRentMonthly: 4_200, anchorCity: "Saudi Arabia urban" },
} as const;

export const COUNTRY_CODES = Object.keys(COUNTRIES) as CountryCode[];

/** Anchor stats for context. */
export const GLOBAL_ANCHORS = {
  /** OECD average price-to-income ratio (rebased), 2024 Q4. */
  oecdAveragePriceToIncome: 7.6,
  /** OECD median household savings rate (% of disposable income), 2024. */
  oecdMedianSavingsRate: 0.07,
  /** Long-term affordability historical average price-to-income, OECD 1990-2010. */
  historicalPriceToIncome: 4.3,
  /** Threshold above which housing is considered "severely unaffordable" (Demographia). */
  severelyUnaffordableThreshold: 5.1,
} as const;

export function getCountry(code: string): CountryHousingData | null {
  if (!(code in COUNTRIES)) return null;
  return COUNTRIES[code as CountryCode];
}

export function isCountryCode(code: string): code is CountryCode {
  return code in COUNTRIES;
}
