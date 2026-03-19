import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../api/weather";
import type { City } from "../types/weather";

export function useWeather(city: City) {
  return useQuery({
    queryKey: ["weather", city.name],
    queryFn: () => fetchWeather(city.lat, city.lng, city.timezone),
    staleTime: 10 * 60 * 1000,
    refetchInterval: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
}
