import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import type { EarthquakeFeature } from "@/types/earthquake";
import { formatMagnitude, formatDate, getDepthColor, getMagnitudeRadius } from "@/lib/utils";
import "leaflet/dist/leaflet.css";

interface Props {
  earthquakes: EarthquakeFeature[];
}

export function EarthquakeMap({ earthquakes }: Props) {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      minZoom={2}
      maxZoom={12}
      className="h-full w-full rounded-lg"
      style={{ minHeight: "400px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
      {earthquakes.map((eq) => {
        const [lng, lat, depth] = eq.geometry.coordinates;
        return (
          <CircleMarker
            key={eq.id}
            center={[lat, lng]}
            radius={getMagnitudeRadius(eq.properties.mag)}
            fillColor={getDepthColor(depth)}
            fillOpacity={0.7}
            color={getDepthColor(depth)}
            weight={1}
            opacity={0.9}
          >
            <Popup>
              <div className="text-sm space-y-1 min-w-[200px]">
                <p className="font-semibold text-foreground">{eq.properties.title}</p>
                <p>Magnitude: <strong>{formatMagnitude(eq.properties.mag)}</strong></p>
                <p>Depth: {depth.toFixed(1)} km</p>
                <p>Time: {formatDate(eq.properties.time)}</p>
                {eq.properties.felt && <p>Felt by: {eq.properties.felt} people</p>}
              </div>
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
