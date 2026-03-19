import { ApodViewer } from "@/components/apod/ApodViewer";
import { Telescope } from "lucide-react";

export default function ApodPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center gap-3">
        <Telescope className="h-5 w-5 text-primary" />
        <h1 className="text-xl font-bold text-foreground">Astronomy Picture of the Day</h1>
      </div>
      <ApodViewer />
    </div>
  );
}
