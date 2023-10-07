import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#eef3ff",
          "100": "#d9e4ff",
          "200": "#bcd1ff",
          "300": "#8eb4ff",
          "400": "#598aff",
          "500": "#3361ff",
          "600": "#1b3df5",
          "700": "#142ae1",
          "800": "#1723b6",
          "900": "#19258f",
          "950": "#141957",
        },
      },
    },
  },
  plugins: [],
};
export default config;
