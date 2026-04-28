/**
 * Affordability calculator for housing.
 *
 * Inputs: household income, current savings, monthly debt obligations, country.
 * Outputs: max affordable home price, years to down-payment, monthly mortgage,
 * mortgage-to-net-income ratio, price-to-income vs the country median.
 *
 * Pure functions, no side effects.
 */

import type { CountryHousingData } from "@/data/housing-data";

export interface AffordabilityInputs {
  /** Annual household disposable income, local currency. */
  readonly annualIncome: number;
  /** Liquid savings available for down payment. */
  readonly savings: number;
  /** Existing monthly debt obligations (loans, etc.) excluding rent and the new mortgage. */
  readonly monthlyDebt: number;
  /** Mortgage term in years. */
  readonly mortgageYears: number;
  /** Savings rate (% of income saved per year). */
  readonly savingsRatePct: number;
}

export interface AffordabilityResult {
  /** Maximum home price the household can afford given lender debt-to-income limits. */
  readonly maxAffordableHomePrice: number;
  /** Monthly mortgage payment for that price. */
  readonly monthlyMortgage: number;
  /** % of net monthly income going to mortgage at that price. */
  readonly mortgageBurdenPct: number;
  /** Years required to save the minimum down payment for the country median home. */
  readonly yearsToDownPayment: number;
  /** Country median price as a multiple of household income. */
  readonly priceToIncomeRatio: number;
  /** Verdict: how affordable is the country median home for this household. */
  readonly verdict: "affordable" | "stretch" | "unaffordable" | "out_of_reach";
}

const LENDER_DTI_LIMIT = 0.36;

export function defaultInputs(country: CountryHousingData): AffordabilityInputs {
  return {
    annualIncome: country.medianHouseholdIncome,
    savings: 0,
    monthlyDebt: 0,
    mortgageYears: 30,
    savingsRatePct: 7,
  };
}

export function computeAffordability(
  inputs: AffordabilityInputs,
  country: CountryHousingData,
): AffordabilityResult {
  const annualIncome = Math.max(0, inputs.annualIncome);
  const monthlyIncome = annualIncome / 12;
  const monthlyRate = country.mortgageRatePct / 100 / 12;
  const months = Math.max(12, Math.round(inputs.mortgageYears * 12));

  const maxMonthlyMortgage = Math.max(0, monthlyIncome * LENDER_DTI_LIMIT - inputs.monthlyDebt);
  const principalLimit =
    monthlyRate === 0
      ? maxMonthlyMortgage * months
      : maxMonthlyMortgage * (1 - Math.pow(1 + monthlyRate, -months)) / monthlyRate;

  const downPaymentLeverage = 1 / Math.max(0.001, 1 - country.minDownPaymentFraction);
  const maxAffordableHomePrice = Math.max(0, principalLimit * downPaymentLeverage);

  const downPaymentNeeded = country.medianHomePrice * country.minDownPaymentFraction;
  const annualSavings = annualIncome * (inputs.savingsRatePct / 100);
  const yearsToDownPayment =
    annualSavings > 0
      ? Math.max(0, (downPaymentNeeded - inputs.savings) / annualSavings)
      : Number.POSITIVE_INFINITY;

  const principalForMedian = country.medianHomePrice * (1 - country.minDownPaymentFraction);
  const monthlyMortgageAtMedian =
    monthlyRate === 0
      ? principalForMedian / months
      : (principalForMedian * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
  const mortgageBurdenPct = monthlyIncome > 0 ? (monthlyMortgageAtMedian / monthlyIncome) * 100 : 100;

  const priceToIncomeRatio = annualIncome > 0 ? country.medianHomePrice / annualIncome : Number.POSITIVE_INFINITY;

  const verdict: AffordabilityResult["verdict"] =
    priceToIncomeRatio <= 4
      ? "affordable"
      : priceToIncomeRatio <= 6
        ? "stretch"
        : priceToIncomeRatio <= 10
          ? "unaffordable"
          : "out_of_reach";

  return {
    maxAffordableHomePrice: Math.round(maxAffordableHomePrice),
    monthlyMortgage: Math.round(monthlyMortgageAtMedian),
    mortgageBurdenPct: Math.round(mortgageBurdenPct),
    yearsToDownPayment: Number.isFinite(yearsToDownPayment) ? Math.round(yearsToDownPayment * 10) / 10 : Number.POSITIVE_INFINITY,
    priceToIncomeRatio: Math.round(priceToIncomeRatio * 10) / 10,
    verdict,
  };
}
