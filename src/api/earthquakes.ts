import type { EarthquakeCollection, TimeRange, MagnitudeFilter } from "../types/earthquake";

const BASE_URL = "https://earthquake.usgs.gov/fdsnws/event/1/query";

export async function fetchEarthquakes(
  timeRange: TimeRange = "day",
  minMagnitude: MagnitudeFilter = "2.5"
): Promise<EarthquakeCollection> {
  const now = new Date();
  const startTime = new Date(now);

  switch (timeRange) {
    case "hour":
      startTime.setHours(now.getHours() - 1);
      break;
    case "day":
      startTime.setDate(now.getDate() - 1);
      break;
    case "week":
      startTime.setDate(now.getDate() - 7);
      break;
    case "month":
      startTime.setMonth(now.getMonth() - 1);
      break;
  }

  const params = new URLSearchParams({
    format: "geojson",
    starttime: startTime.toISOString(),
    endtime: now.toISOString(),
    orderby: "time",
  });

  if (minMagnitude !== "all" && minMagnitude !== "significant") {
    params.set("minmagnitude", minMagnitude);
  }

  const res = await fetch(`${BASE_URL}?${params}`);
  if (!res.ok) throw new Error(`USGS API error: ${res.status}`);
  return res.json();
}
