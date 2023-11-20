import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "var(--inter)",
      },
    },
    aspectRatio: {
      "2/3": "2 / 3",
    },
    gridTemplateColumns: {
      results: "repeat(auto-fit, minmax(250px, 1fr))",
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
