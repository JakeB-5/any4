import { useState } from "react";
import { useEarthquakes } from "@/hooks/use-earthquakes";
import { EarthquakeMap } from "@/components/earthquakes/EarthquakeMap";
import { EarthquakeList } from "@/components/earthquakes/EarthquakeList";
import { EarthquakeFilters } from "@/components/earthquakes/EarthquakeFilters";
import type { TimeRange, MagnitudeFilter } from "@/types/earthquake";
import { Activity, AlertTriangle } from "lucide-react";

export default function EarthquakesPage() {
  const [timeRange, setTimeRange] = useState<TimeRange>("day");
  const [magnitude, setMagnitude] = useState<MagnitudeFilter>("2.5");
  const { data, isLoading, isError } = useEarthquakes(timeRange, magnitude);

  const count = data?.metadata?.count ?? 0;

  return (
    <div className="space-y-4 h-full flex flex-col">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <Activity className="h-5 w-5 text-primary" />
          <h1 className="text-xl font-bold text-foreground">Earthquakes</h1>
          {data && (
            <span className="text-xs bg-secondary text-muted-foreground px-2.5 py-1 rounded-full">
              {count} events
            </span>
          )}
        </div>
        <EarthquakeFilters
          timeRange={timeRange}
          magnitude={magnitude}
          onTimeRangeChange={setTimeRange}
          onMagnitudeChange={setMagnitude}
        />
      </div>

      {isError && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
          <AlertTriangle className="h-4 w-4" />
          Failed to load earthquake data. Retrying...
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 flex-1 min-h-0">
        <div className="lg:col-span-2 rounded-xl border border-border overflow-hidden bg-card min-h-[400px]">
          {isLoading ? (
            <div className="h-full flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent" />
            </div>
          ) : (
            <EarthquakeMap earthquakes={data?.features ?? []} />
          )}
        </div>
        <div>
          <h2 className="text-sm font-medium text-muted-foreground mb-3">Recent Events</h2>
          {isLoading ? (
            <div className="space-y-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-16 bg-card border border-border rounded-lg animate-pulse" />
              ))}
            </div>
          ) : (
            <EarthquakeList earthquakes={data?.features ?? []} />
          )}
        </div>
      </div>
    </div>
  );
}
