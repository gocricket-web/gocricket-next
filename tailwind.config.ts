import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBackground: "#00001B",
        accent: "#00FF88",
        highlight: "#FFD400",
      },
      backgroundImage: {
        "gradient-main": "linear-gradient(180deg, #00001B 0%, #1B0030 100%)",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
} satisfies Config;
