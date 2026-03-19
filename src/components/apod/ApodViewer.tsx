import { useApod } from "@/hooks/use-apod";
import { useState } from "react";
import { Calendar, ExternalLink } from "lucide-react";

export function ApodViewer() {
  const [date, setDate] = useState<string>("");
  const { data, isLoading, isError, error } = useApod(date || undefined);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <input
            type="date"
            value={date}
            max={new Date().toISOString().split("T")[0]}
            min="1995-06-16"
            onChange={(e) => setDate(e.target.value)}
            className="bg-secondary border border-border rounded-lg px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        {date && (
          <button
            onClick={() => setDate("")}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            Today
          </button>
        )}
      </div>

      {isLoading && (
        <div className="rounded-xl bg-card border border-border overflow-hidden animate-pulse">
          <div className="aspect-video bg-secondary" />
          <div className="p-6 space-y-3">
            <div className="h-6 bg-secondary rounded w-2/3" />
            <div className="h-4 bg-secondary rounded w-full" />
            <div className="h-4 bg-secondary rounded w-4/5" />
          </div>
        </div>
      )}

      {isError && (
        <div className="rounded-xl bg-card border border-border p-6">
          <p className="text-destructive">
            Failed to load APOD: {error instanceof Error ? error.message : "Unknown error"}
          </p>
        </div>
      )}

      {data && (
        <div className="rounded-xl bg-card border border-border overflow-hidden">
          {data.media_type === "image" ? (
            <img
              src={data.url}
              alt={data.title}
              className="w-full max-h-[70vh] object-contain bg-black"
              loading="lazy"
            />
          ) : (
            <div className="aspect-video">
              <iframe
                src={data.url}
                title={data.title}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          )}
          <div className="p-6 space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-foreground">{data.title}</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {data.date}
                  {data.copyright && ` — ${data.copyright}`}
                </p>
              </div>
              {data.hdurl && (
                <a
                  href={data.hdurl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 flex items-center gap-1.5 text-xs text-primary hover:underline"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  HD
                </a>
              )}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {data.explanation}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
