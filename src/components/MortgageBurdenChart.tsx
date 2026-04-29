"use client";

/**
 * Horizontal stacked bar showing where the user's mortgage burden sits
 * across the comfort / manageable / stretched / over-limit DTI bands.
 */

interface Props {
  /** User's mortgage as a percentage of gross monthly income (0-100). */
  readonly burdenPct: number;
  readonly youLabel: string;
}

const COMFORTABLE_MAX = 28;
const MANAGEABLE_MAX = 36;
const STRETCHED_MAX = 43;
const SCALE_MAX = 60;

const BANDS = [
  { from: 0, to: COMFORTABLE_MAX, color: "var(--accent-sage)", label: "Comfortable", labelPct: "<28%" },
  { from: COMFORTABLE_MAX, to: MANAGEABLE_MAX, color: "var(--accent-periwinkle)", label: "Manageable", labelPct: "28-36%" },
  { from: MANAGEABLE_MAX, to: STRETCHED_MAX, color: "var(--accent-amber)", label: "Stretched", labelPct: "36-43%" },
  { from: STRETCHED_MAX, to: SCALE_MAX, color: "var(--accent-rose)", label: "Over limit", labelPct: ">43%" },
] as const;

export default function MortgageBurdenChart({ burdenPct, youLabel }: Props) {
  const clamped = Math.max(0, Math.min(SCALE_MAX, burdenPct));
  const youPct = (clamped / SCALE_MAX) * 100;

  return (
    <div className="w-full">
      <div className="relative h-7 flex rounded-full overflow-hidden border border-border-subtle">
        {BANDS.map((b) => (
          <div
            key={b.label}
            className="h-full opacity-80"
            style={{
              width: `${((b.to - b.from) / SCALE_MAX) * 100}%`,
              background: b.color,
            }}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* You marker */}
      <div className="relative h-6 mt-1">
        <div
          className="absolute -translate-x-1/2 flex flex-col items-center"
          style={{ left: `${youPct}%` }}
        >
          <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-transparent border-b-text-primary" />
          <span className="text-xs font-semibold text-text-primary mt-0.5 whitespace-nowrap">
            {youLabel}: {burdenPct}%
          </span>
        </div>
      </div>

      {/* Band labels */}
      <div className="grid grid-cols-4 gap-1 text-center mt-2">
        {BANDS.map((b) => (
          <div key={b.label}>
            <div
              aria-hidden="true"
              className="h-1 rounded-full mx-auto"
              style={{ width: "20px", background: b.color }}
            />
            <div className="text-[10px] uppercase tracking-wider text-text-muted mt-1 leading-tight">
              {b.label}
            </div>
            <div className="text-[10px] text-text-muted">{b.labelPct}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
