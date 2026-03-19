import { useQuery } from "@tanstack/react-query";
import { fetchApod } from "../api/apod";

export function useApod(date?: string) {
  return useQuery({
    queryKey: ["apod", date],
    queryFn: () => fetchApod(date),
    staleTime: 60 * 60 * 1000,
    gcTime: 24 * 60 * 60 * 1000,
  });
}
