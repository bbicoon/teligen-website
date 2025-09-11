import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        aurora: {
          "0%": {
            transform: "rotate(0deg) scale(1)",
            background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981)",
          },
          "25%": {
            transform: "rotate(90deg) scale(1.1)",
            background: "linear-gradient(135deg, #8b5cf6, #06b6d4, #10b981, #f59e0b)",
          },
          "50%": {
            transform: "rotate(180deg) scale(1.2)",
            background: "linear-gradient(225deg, #06b6d4, #10b981, #f59e0b, #ef4444)",
          },
          "75%": {
            transform: "rotate(270deg) scale(1.1)",
            background: "linear-gradient(315deg, #10b981, #f59e0b, #ef4444, #3b82f6)",
          },
          "100%": {
            transform: "rotate(360deg) scale(1)",
            background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981)",
          },
        },
      },
      animation: {
        aurora: "aurora 20s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
