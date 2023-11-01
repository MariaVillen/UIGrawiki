import { configTailwindExtention } from "./TailwindCustomStyles";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: configTailwindExtention,
  plugins: [],
  prefix: "gwk-",
};
