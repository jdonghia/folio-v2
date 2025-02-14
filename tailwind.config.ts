import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        kakhi: "#bba086",
        eerie: "#161818",
        powder: "#fefefa",
      },
    },
  },
  plugins: [],
} satisfies Config;
