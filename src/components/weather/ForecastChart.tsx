import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { WeatherResponse } from "@/types/weather";

interface Props {
  daily: WeatherResponse["daily"];
}

export function ForecastChart({ daily }: Props) {
  const data = daily.time.map((date, i) => ({
    date: new Date(date).toLocaleDateString("en", { weekday: "short" }),
    max: Math.round(daily.temperature_2m_max[i]),
    min: Math.round(daily.temperature_2m_min[i]),
  }));

  return (
    <div className="h-28">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="tempGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="date"
            tick={{ fontSize: 10, fill: "#71717a" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 10, fill: "#71717a" }}
            axisLine={false}
            tickLine={false}
            domain={["auto", "auto"]}
          />
          <Tooltip
            contentStyle={{
              background: "#18181b",
              border: "1px solid #3f3f46",
              borderRadius: "8px",
              fontSize: "12px",
            }}
            labelStyle={{ color: "#e4e4e7" }}
          />
          <Area
            type="monotone"
            dataKey="max"
            stroke="#6366f1"
            fill="url(#tempGrad)"
            strokeWidth={2}
            name="High"
          />
          <Area
            type="monotone"
            dataKey="min"
            stroke="#a78bfa"
            fill="none"
            strokeWidth={1.5}
            strokeDasharray="4 4"
            name="Low"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
