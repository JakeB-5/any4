export interface EarthquakeFeature {
  id: string;
  type: "Feature";
  properties: {
    mag: number;
    place: string;
    time: number;
    updated: number;
    url: string;
    detail: string;
    felt: number | null;
    cdi: number | null;
    mmi: number | null;
    alert: string | null;
    status: string;
    tsunami: number;
    sig: number;
    net: string;
    code: string;
    ids: string;
    sources: string;
    types: string;
    nst: number | null;
    dmin: number | null;
    rms: number;
    gap: number | null;
    magType: string;
    type: string;
    title: string;
  };
  geometry: {
    type: "Point";
    coordinates: [number, number, number]; // [lng, lat, depth]
  };
}

export interface EarthquakeCollection {
  type: "FeatureCollection";
  metadata: {
    generated: number;
    url: string;
    title: string;
    status: number;
    api: string;
    count: number;
  };
  features: EarthquakeFeature[];
}

export type TimeRange = "hour" | "day" | "week" | "month";
export type MagnitudeFilter = "all" | "1.0" | "2.5" | "4.5" | "significant";
