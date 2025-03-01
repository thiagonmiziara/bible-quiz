import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#E0F2F1",
          200: "#B2DFDB",
          300: "#80CBC4",
          400: "#4DB6AC",
          500: "#26A69A",
          600: "#009688",
          700: "#00897B",
          800: "#00796B",
          900: "#00695C",
        },
        secondary: {
          100: "#FFEBEE",
          200: "#FFCDD2",
          300: "#EF9A9A",
          400: "#E57373",
          500: "#EF5350",
          600: "#F44336",
          700: "#E53935",
          800: "#D32F2F",
          900: "#C62828",
        },
        accent: {
          100: "#F3E5F5",
          200: "#E1BEE7",
          300: "#CE93D8",
          400: "#BA68C8",
          500: "#AB47BC",
          600: "#9C27B0",
          700: "#8E24AA",
          800: "#7B1FA2",
          900: "#6A1B9A",
        },
        // Add other colors as needed
      },
    },
  },
  plugins: [],
} satisfies Config;
