"use client";

/**
 * Compact line chart showing price-to-income evolution since 1990 for the
 * given country, with the OECD average overlaid for context. Hand-rolled
 * SVG, no chart library — keeps the bundle small and matches the design
 * system tokens.
 */

import {
  HISTORICAL_PRICE_TO_INCOME,
  OECD_AVERAGE,
  type HistoricalPoint,
} from "@/data/historical-affordability";
import type { CountryCode } from "@/data/housing-data";

interface Props {
  readonly countryCode: CountryCode;
  readonly countryName: string;
}

const WIDTH = 600;
const HEIGHT = 220;
const PADDING = { top: 16, right: 16, bottom: 28, left: 36 };

export default function HistoricalChart({ countryCode, countryName }: Props) {
  const series = HISTORICAL_PRICE_TO_INCOME[countryCode] ?? [];
  const countrySeries: HistoricalPoint[] = [...series];

  const oecdSeries = OECD_AVERAGE;

  const all = [...countrySeries, ...oecdSeries];
  if (all.length === 0) {
    return null;
  }

  const minYear = Math.min(...all.map((p) => p.year));
  const maxYear = Math.max(...all.map((p) => p.year));
  const maxRatio = Math.max(...all.map((p) => p.priceToIncome), 13);
  const minRatio = 0;

  const xScale = (year: number) =>
    PADDING.left +
    ((year - minYear) / (maxYear - minYear)) * (WIDTH - PADDING.left - PADDING.right);
  const yScale = (ratio: number) =>
    PADDING.top +
    (1 - (ratio - minRatio) / (maxRatio - minRatio)) *
      (HEIGHT - PADDING.top - PADDING.bottom);

  const lineFor = (s: readonly HistoricalPoint[]) =>
    s
      .map((p, i) => `${i === 0 ? "M" : "L"} ${xScale(p.year)} ${yScale(p.priceToIncome)}`)
      .join(" ");

  // Y-axis ticks every 2× ratio
  const yTicks = Array.from({ length: Math.ceil(maxRatio / 2) + 1 }, (_, i) => i * 2).filter(
    (v) => v <= maxRatio,
  );
  // X-axis: every 5 years
  const xTicks = Array.from(
    { length: Math.floor((maxYear - minYear) / 5) + 1 },
    (_, i) => minYear + i * 5,
  ).filter((y) => y <= maxYear);

  const last = countrySeries.at(-1);

  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="w-full h-auto"
        role="img"
        aria-label={`Price-to-income ratio in ${countryName} since ${minYear}`}
      >
        {/* Y-axis grid + labels */}
        {yTicks.map((v) => (
          <g key={`y-${v}`}>
            <line
              x1={PADDING.left}
              x2={WIDTH - PADDING.right}
              y1={yScale(v)}
              y2={yScale(v)}
              stroke="var(--border-subtle)"
              strokeWidth={1}
            />
            <text
              x={PADDING.left - 6}
              y={yScale(v)}
              dy="0.32em"
              textAnchor="end"
              fontSize="10"
              fill="var(--text-muted)"
            >
              {v}×
            </text>
          </g>
        ))}

        {/* X-axis labels */}
        {xTicks.map((year) => (
          <text
            key={`x-${year}`}
            x={xScale(year)}
            y={HEIGHT - PADDING.bottom + 16}
            textAnchor="middle"
            fontSize="10"
            fill="var(--text-muted)"
          >
            {year}
          </text>
        ))}

        {/* OECD average line (thinner, muted) */}
        <path
          d={lineFor(oecdSeries)}
          fill="none"
          stroke="var(--text-muted)"
          strokeWidth={1.5}
          strokeDasharray="4 4"
          opacity={0.7}
        />

        {/* Country line (highlighted) */}
        {countrySeries.length > 0 && (
          <path
            d={lineFor(countrySeries)}
            fill="none"
            stroke="var(--accent-periwinkle)"
            strokeWidth={2.25}
          />
        )}

        {/* Country end-point marker */}
        {last && (
          <g>
            <circle
              cx={xScale(last.year)}
              cy={yScale(last.priceToIncome)}
              r={4}
              fill="var(--accent-periwinkle)"
              stroke="var(--bg-card)"
              strokeWidth={2}
            />
            <text
              x={xScale(last.year) - 6}
              y={yScale(last.priceToIncome) - 8}
              textAnchor="end"
              fontSize="11"
              fontWeight="600"
              fill="var(--accent-periwinkle)"
            >
              {last.priceToIncome.toFixed(1)}× ({last.year})
            </text>
          </g>
        )}
      </svg>
      <div className="flex justify-center gap-5 text-xs mt-2 text-text-muted">
        <span className="inline-flex items-center gap-1.5">
          <span
            aria-hidden="true"
            className="inline-block w-3 h-0.5 rounded"
            style={{ background: "var(--accent-periwinkle)" }}
          />
          {countryName}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span
            aria-hidden="true"
            className="inline-block w-3 h-0.5 rounded"
            style={{
              background: "transparent",
              borderTop: "2px dashed var(--text-muted)",
            }}
          />
          OECD average
        </span>
      </div>
    </div>
  );
}
