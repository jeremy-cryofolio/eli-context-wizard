import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...args: ClassValue[]) => twMerge(clsx(args));

export const formatText = <T>(value: T) => {
  if (typeof value === "string") {
    return value.trim() === "" ? "N/A" : value;
  } else {
    return value ?? "N/A";
  }
};
