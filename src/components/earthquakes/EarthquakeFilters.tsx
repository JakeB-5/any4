import type { TimeRange, MagnitudeFilter } from "@/types/earthquake";

interface Props {
  timeRange: TimeRange;
  magnitude: MagnitudeFilter;
  onTimeRangeChange: (v: TimeRange) => void;
  onMagnitudeChange: (v: MagnitudeFilter) => void;
}

const timeOptions: { value: TimeRange; label: string }[] = [
  { value: "hour", label: "Past Hour" },
  { value: "day", label: "Past Day" },
  { value: "week", label: "Past Week" },
  { value: "month", label: "Past Month" },
];

const magOptions: { value: MagnitudeFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "1.0", label: "M1.0+" },
  { value: "2.5", label: "M2.5+" },
  { value: "4.5", label: "M4.5+" },
];

export function EarthquakeFilters({ timeRange, magnitude, onTimeRangeChange, onMagnitudeChange }: Props) {
  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Time:</span>
        <div className="flex bg-secondary rounded-lg p-0.5">
          {timeOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onTimeRangeChange(opt.value)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                timeRange === opt.value
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Magnitude:</span>
        <div className="flex bg-secondary rounded-lg p-0.5">
          {magOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onMagnitudeChange(opt.value)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                magnitude === opt.value
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
