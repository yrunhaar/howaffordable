/**
 * Historical price-to-income ratios for select countries, 1990-2024.
 * Source: OECD Affordable Housing Database, BIS Selected Property Price Series.
 * Index rebased to absolute multiples (price / annual disposable income).
 */

import type { CountryCode } from "./housing-data";

export interface HistoricalPoint {
  readonly year: number;
  readonly priceToIncome: number;
}

/** Anchor: OECD average has roughly doubled since 1990. */
export const HISTORICAL_PRICE_TO_INCOME: Partial<Record<CountryCode, readonly HistoricalPoint[]>> = {
  US: [
    { year: 1990, priceToIncome: 4.5 },
    { year: 2000, priceToIncome: 5.0 },
    { year: 2006, priceToIncome: 6.4 },
    { year: 2010, priceToIncome: 4.9 },
    { year: 2015, priceToIncome: 5.2 },
    { year: 2020, priceToIncome: 6.0 },
    { year: 2024, priceToIncome: 5.1 },
  ],
  GB: [
    { year: 1990, priceToIncome: 4.0 },
    { year: 2000, priceToIncome: 4.5 },
    { year: 2007, priceToIncome: 7.4 },
    { year: 2010, priceToIncome: 6.6 },
    { year: 2015, priceToIncome: 7.6 },
    { year: 2020, priceToIncome: 8.4 },
    { year: 2024, priceToIncome: 7.8 },
  ],
  CA: [
    { year: 1990, priceToIncome: 4.0 },
    { year: 2000, priceToIncome: 3.7 },
    { year: 2010, priceToIncome: 5.5 },
    { year: 2015, priceToIncome: 6.6 },
    { year: 2020, priceToIncome: 8.5 },
    { year: 2022, priceToIncome: 9.2 },
    { year: 2024, priceToIncome: 9.0 },
  ],
  AU: [
    { year: 1990, priceToIncome: 3.5 },
    { year: 2000, priceToIncome: 4.4 },
    { year: 2007, priceToIncome: 6.5 },
    { year: 2015, priceToIncome: 7.0 },
    { year: 2020, priceToIncome: 7.9 },
    { year: 2024, priceToIncome: 7.9 },
  ],
  DE: [
    { year: 1990, priceToIncome: 4.5 },
    { year: 2000, priceToIncome: 4.0 },
    { year: 2010, priceToIncome: 4.0 },
    { year: 2015, priceToIncome: 5.5 },
    { year: 2020, priceToIncome: 6.7 },
    { year: 2024, priceToIncome: 6.5 },
  ],
  FR: [
    { year: 1990, priceToIncome: 5.0 },
    { year: 2000, priceToIncome: 5.0 },
    { year: 2010, priceToIncome: 8.0 },
    { year: 2015, priceToIncome: 8.0 },
    { year: 2020, priceToIncome: 8.5 },
    { year: 2024, priceToIncome: 9.2 },
  ],
  NL: [
    { year: 1990, priceToIncome: 4.5 },
    { year: 2000, priceToIncome: 7.0 },
    { year: 2008, priceToIncome: 8.7 },
    { year: 2014, priceToIncome: 7.0 },
    { year: 2020, priceToIncome: 9.0 },
    { year: 2024, priceToIncome: 12.6 },
  ],
  JP: [
    { year: 1990, priceToIncome: 11.6 },
    { year: 2000, priceToIncome: 5.6 },
    { year: 2010, priceToIncome: 5.5 },
    { year: 2015, priceToIncome: 6.0 },
    { year: 2020, priceToIncome: 6.7 },
    { year: 2024, priceToIncome: 7.8 },
  ],
};

export const OECD_AVERAGE: readonly HistoricalPoint[] = [
  { year: 1990, priceToIncome: 4.3 },
  { year: 2000, priceToIncome: 4.7 },
  { year: 2008, priceToIncome: 6.5 },
  { year: 2014, priceToIncome: 6.3 },
  { year: 2020, priceToIncome: 7.4 },
  { year: 2024, priceToIncome: 7.6 },
];
