import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router";
import { AppLayout } from "./components/layout/AppLayout";

const EarthquakesPage = lazy(() => import("./pages/EarthquakesPage"));
const WeatherPage = lazy(() => import("./pages/WeatherPage"));
const ApodPage = lazy(() => import("./pages/ApodPage"));

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to="/earthquakes" replace />} />
        <Route
          path="earthquakes"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <EarthquakesPage />
            </Suspense>
          }
        />
        <Route
          path="weather"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <WeatherPage />
            </Suspense>
          }
        />
        <Route
          path="apod"
          element={
            <Suspense fallback={<LoadingFallback />}>
              <ApodPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center h-full">
              <p className="text-muted-foreground text-lg">404 - Page not found</p>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}
