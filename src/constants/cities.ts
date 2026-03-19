import type { City } from "../types/weather";

export const defaultCities: City[] = [
  { name: "Seoul", country: "KR", lat: 37.5665, lng: 126.978, timezone: "Asia/Seoul" },
  { name: "Tokyo", country: "JP", lat: 35.6762, lng: 139.6503, timezone: "Asia/Tokyo" },
  { name: "New York", country: "US", lat: 40.7128, lng: -74.006, timezone: "America/New_York" },
  { name: "London", country: "GB", lat: 51.5074, lng: -0.1278, timezone: "Europe/London" },
  { name: "Sydney", country: "AU", lat: -33.8688, lng: 151.2093, timezone: "Australia/Sydney" },
  { name: "São Paulo", country: "BR", lat: -23.5505, lng: -46.6333, timezone: "America/Sao_Paulo" },
  { name: "Dubai", country: "AE", lat: 25.2048, lng: 55.2708, timezone: "Asia/Dubai" },
  { name: "Singapore", country: "SG", lat: 1.3521, lng: 103.8198, timezone: "Asia/Singapore" },
];
