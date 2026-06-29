import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind classes safely.
 *
 * Example:
 * className={cn("p-4", isActive && "bg-blue-500")}
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format large numbers.
 * Example:
 * 1250 -> 1.3K
 */
export function formatNumber(value: number) {
  return new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

/**
 * Format temperatures.
 * Example:
 * 430 -> 430°C
 */
export function formatTemperature(value: number) {
  return `${value}°C`;
}

/**
 * Format percentages.
 * Example:
 * 74 -> 74%
 */
export function formatPercentage(value: number) {
  return `${value}%`;
}

/**
 * Delay helper for animations.
 */
export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Clamp values between a minimum and maximum.
 */
export function clamp(
  value: number,
  min: number,
  max: number
) {
  return Math.min(Math.max(value, min), max);
}