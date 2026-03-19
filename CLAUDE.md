# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Earth & Sky Monitor — a React SPA dashboard that aggregates real-time data from three free public APIs: USGS Earthquake, Open-Meteo Weather, and NASA APOD. No backend; all API calls are client-side.

## Commands

```bash
npm run dev          # Start Vite dev server (http://localhost:5173)
npm run build        # Production build to dist/
npm run preview      # Preview production build
npx tsc --noEmit     # Type check without emitting
```

## Architecture

- **Vite + React 19 + TypeScript** with Tailwind CSS v4 for styling
- **`@` path alias** maps to `src/` (configured in vite.config.ts and tsconfig.app.json)
- **Data flow**: `src/api/` (pure fetch functions) → `src/hooks/` (TanStack Query wrappers) → `src/pages/` (orchestrate hooks + state) → `src/components/` (presentational)
- **No global state store** — server state via TanStack Query, UI state via local useState per page
- **Pages are lazy-loaded** via React.lazy + Suspense in App.tsx
- **Dark theme only** — colors defined as CSS custom properties in `src/index.css` via `@theme`

## Key Patterns

- API clients in `src/api/` are pure async functions that return typed data. They do not handle caching or state.
- Each API has a corresponding TanStack Query hook in `src/hooks/` with configured `staleTime` and `refetchInterval`.
- Leaflet map uses CartoDB dark tiles; Leaflet CSS is imported in `src/index.css` with dark-theme overrides.
- The `cn()` utility in `src/lib/utils.ts` combines clsx + tailwind-merge for conditional class names.

## External APIs

- **USGS**: `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson` — no auth
- **Open-Meteo**: `https://api.open-meteo.com/v1/forecast` — no auth
- **NASA APOD**: `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY` — DEMO_KEY has 30 req/hr limit
