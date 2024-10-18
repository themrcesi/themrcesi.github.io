import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function event({ action, category, label, value }: any) {
  (window as any).gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
