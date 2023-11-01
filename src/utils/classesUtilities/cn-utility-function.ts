import { clsx, ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMergeConfigExtention = {
  classGroups: {
    "font-size": [{ text: ["small", "base", "medium", "big"] }],
  },
  prefix: "gwk-",
};

const twMerge = extendTailwindMerge(twMergeConfigExtention);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
