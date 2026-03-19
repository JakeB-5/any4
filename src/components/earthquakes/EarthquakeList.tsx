import type { EarthquakeFeature } from "@/types/earthquake";
import { formatMagnitude, formatDate, getDepthColor } from "@/lib/utils";

interface Props {
  earthquakes: EarthquakeFeature[];
}

function getMagBg(mag: number): string {
  if (mag >= 6) return "bg-red-900/50 text-red-300";
  if (mag >= 5) return "bg-orange-900/50 text-orange-300";
  if (mag >= 4) return "bg-yellow-900/50 text-yellow-300";
  if (mag >= 3) return "bg-green-900/50 text-green-300";
  return "bg-secondary text-muted-foreground";
}

export function EarthquakeList({ earthquakes }: Props) {
  if (earthquakes.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        No earthquakes found for the selected filters.
      </div>
    );
  }

  return (
    <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
      {earthquakes.slice(0, 100).map((eq) => {
        const [, , depth] = eq.geometry.coordinates;
        return (
          <div
            key={eq.id}
            className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
          >
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-lg text-sm font-bold shrink-0 ${getMagBg(eq.properties.mag)}`}
            >
              {formatMagnitude(eq.properties.mag)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                {eq.properties.place || "Unknown location"}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {formatDate(eq.properties.time)}
              </p>
            </div>
            <div className="text-right shrink-0">
              <div className="flex items-center gap-1.5">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: getDepthColor(depth) }}
                />
                <span className="text-xs text-muted-foreground">{depth.toFixed(0)} km</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
