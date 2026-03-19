import type { ApodResponse } from "../types/apod";

const BASE_URL = "https://api.nasa.gov/planetary/apod";
const API_KEY = "DEMO_KEY";

export async function fetchApod(date?: string): Promise<ApodResponse> {
  const params = new URLSearchParams({ api_key: API_KEY });
  if (date) params.set("date", date);

  const res = await fetch(`${BASE_URL}?${params}`);
  if (!res.ok) throw new Error(`NASA APOD API error: ${res.status}`);
  return res.json();
}
