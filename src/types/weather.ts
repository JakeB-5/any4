export interface WeatherResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: Record<string, string>;
  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    is_day: number;
    precipitation: number;
    weather_code: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
  };
  hourly_units: Record<string, string>;
  hourly: {
    time: string[];
    temperature_2m: number[];
    relative_humidity_2m: number[];
    precipitation_probability: number[];
    precipitation: number[];
    weather_code: number[];
    wind_speed_10m: number[];
  };
  daily_units: Record<string, string>;
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_sum: number[];
    precipitation_probability_max: number[];
    wind_speed_10m_max: number[];
  };
}

export interface City {
  name: string;
  country: string;
  lat: number;
  lng: number;
  timezone: string;
}

export const weatherCodeMap: Record<number, { label: string; icon: string }> = {
  0: { label: "Clear sky", icon: "☀️" },
  1: { label: "Mainly clear", icon: "🌤" },
  2: { label: "Partly cloudy", icon: "⛅" },
  3: { label: "Overcast", icon: "☁️" },
  45: { label: "Foggy", icon: "🌫" },
  48: { label: "Rime fog", icon: "🌫" },
  51: { label: "Light drizzle", icon: "🌦" },
  53: { label: "Moderate drizzle", icon: "🌦" },
  55: { label: "Dense drizzle", icon: "🌧" },
  61: { label: "Slight rain", icon: "🌦" },
  63: { label: "Moderate rain", icon: "🌧" },
  65: { label: "Heavy rain", icon: "🌧" },
  71: { label: "Slight snow", icon: "🌨" },
  73: { label: "Moderate snow", icon: "🌨" },
  75: { label: "Heavy snow", icon: "❄️" },
  80: { label: "Slight showers", icon: "🌦" },
  81: { label: "Moderate showers", icon: "🌧" },
  82: { label: "Violent showers", icon: "⛈" },
  95: { label: "Thunderstorm", icon: "⛈" },
  96: { label: "Thunderstorm w/ hail", icon: "⛈" },
  99: { label: "Thunderstorm w/ heavy hail", icon: "⛈" },
};
