import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    backgroundImage: {
      texture: "url('../app/assets/imgs/texture.png')",
    },
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
