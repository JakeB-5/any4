import { WeatherCard } from "@/components/weather/WeatherCard";
import { defaultCities } from "@/constants/cities";
import { CloudSun } from "lucide-react";

export default function WeatherPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <CloudSun className="h-5 w-5 text-primary" />
        <h1 className="text-xl font-bold text-foreground">Weather</h1>
        <span className="text-xs bg-secondary text-muted-foreground px-2.5 py-1 rounded-full">
          {defaultCities.length} cities
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {defaultCities.map((city) => (
          <WeatherCard key={city.name} city={city} />
        ))}
      </div>
    </div>
  );
}
