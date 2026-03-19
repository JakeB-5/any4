import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatMagnitude(mag: number): string {
  return mag.toFixed(1);
}

export function formatDate(timestamp: number): string {
  return new Date(timestamp).toLocaleString();
}

export function getDepthColor(depth: number): string {
  if (depth < 10) return "#22c55e";
  if (depth < 30) return "#eab308";
  if (depth < 70) return "#f97316";
  if (depth < 150) return "#ef4444";
  return "#991b1b";
}

export function getMagnitudeRadius(mag: number): number {
  return Math.max(4, Math.pow(2, mag) * 0.8);
}
