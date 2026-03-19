import { useWeather } from "@/hooks/use-weather";
import { weatherCodeMap, type City } from "@/types/weather";
import { ForecastChart } from "./ForecastChart";
import { Droplets, Wind, Thermometer, Eye } from "lucide-react";

interface Props {
  city: City;
}

export function WeatherCard({ city }: Props) {
  const { data, isLoading, isError } = useWeather(city);

  if (isLoading) {
    return (
      <div className="rounded-xl bg-card border border-border p-5 animate-pulse">
        <div className="h-6 bg-secondary rounded w-1/3 mb-4" />
        <div className="h-16 bg-secondary rounded mb-4" />
        <div className="h-32 bg-secondary rounded" />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="rounded-xl bg-card border border-border p-5">
        <p className="text-destructive text-sm">Failed to load weather for {city.name}</p>
      </div>
    );
  }

  const current = data.current;
  const weather = weatherCodeMap[current.weather_code] ?? { label: "Unknown", icon: "?" };

  return (
    <div className="rounded-xl bg-card border border-border p-5 hover:border-primary/30 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-foreground">{city.name}</h3>
          <p className="text-xs text-muted-foreground">{city.country}</p>
        </div>
        <span className="text-3xl">{weather.icon}</span>
      </div>

      <div className="flex items-end gap-2 mb-1">
        <span className="text-4xl font-bold text-foreground">
          {Math.round(current.temperature_2m)}°
        </span>
        <span className="text-sm text-muted-foreground mb-1">{weather.label}</span>
      </div>
      <p className="text-xs text-muted-foreground mb-4">
        Feels like {Math.round(current.apparent_temperature)}°C
      </p>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Droplets className="h-3.5 w-3.5" />
          <span>{current.relative_humidity_2m}% humidity</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Wind className="h-3.5 w-3.5" />
          <span>{current.wind_speed_10m} km/h</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Thermometer className="h-3.5 w-3.5" />
          <span>{current.precipitation} mm precip</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Eye className="h-3.5 w-3.5" />
          <span>{current.is_day ? "Daytime" : "Night"}</span>
        </div>
      </div>

      {data.daily && <ForecastChart daily={data.daily} cityId={city.name} />}
    </div>
  );
}
