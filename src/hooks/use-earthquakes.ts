import { useQuery } from "@tanstack/react-query";
import { fetchEarthquakes } from "../api/earthquakes";
import type { TimeRange, MagnitudeFilter } from "../types/earthquake";

export function useEarthquakes(timeRange: TimeRange = "day", minMagnitude: MagnitudeFilter = "2.5") {
  return useQuery({
    queryKey: ["earthquakes", timeRange, minMagnitude],
    queryFn: () => fetchEarthquakes(timeRange, minMagnitude),
    staleTime: 5 * 60 * 1000,
    refetchInterval: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
}
