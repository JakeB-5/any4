# Earth & Sky Monitor

Real-time dashboard combining earthquake monitoring, weather data, and astronomy content from free public APIs.

## Features

- **Earthquake Map** — Interactive global map with real-time USGS earthquake data. Filter by magnitude (M1.0+ to M4.5+) and time range (past hour to past month). Circle markers sized by magnitude, colored by depth.
- **Weather Dashboard** — Current conditions and 7-day forecast for 8 major cities worldwide. Temperature charts, humidity, wind speed, and weather conditions via Open-Meteo API.
- **Astronomy Picture of the Day** — NASA APOD with date picker to browse the archive back to 1995. Supports both images and video content with HD links.

## Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 (dark theme)
- **Maps**: Leaflet + react-leaflet with CartoDB dark tiles
- **Charts**: Recharts
- **Data Fetching**: TanStack Query (auto-caching, background refetch)
- **Routing**: React Router v7
- **Icons**: Lucide React

## APIs Used

| API | Auth | Rate Limit |
|-----|------|------------|
| [USGS Earthquake](https://earthquake.usgs.gov/fdsnws/event/1/) | None | Fair use |
| [Open-Meteo](https://open-meteo.com/) | None | Fair use |
| [NASA APOD](https://api.nasa.gov/) | DEMO_KEY | 30 req/hr |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── api/          # API client functions (fetch + type mapping)
├── hooks/        # TanStack Query hooks per data source
├── types/        # TypeScript interfaces for API responses
├── pages/        # Route-level page components
├── components/   # Presentational UI components
│   ├── layout/   # App shell (sidebar, layout)
│   ├── earthquakes/  # Map, list, filters
│   ├── weather/      # Weather cards, forecast charts
│   └── apod/         # APOD viewer
├── constants/    # Static data (city list)
└── lib/          # Utilities (cn, formatting helpers)
```

## Architecture

- **No global state** — Server state managed by TanStack Query, UI state is local per page
- **Code splitting** — Pages lazy-loaded with React.lazy + Suspense
- **Auto-refresh** — Earthquake data refreshes every 5 min, weather every 10 min
- **Error resilience** — Per-section error states with automatic retry

## License

MIT
