import { defineConfig } from "windicss/helpers";
import typography from "windicss/plugin/typography";

export default defineConfig({
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
  },
  extract: {
    include: ["**/*.{jsx,tsx,css}"],
    exclude: ["node_modules", ".git", ".next"],
  },
  darkMode: "media",
  attributify: true,
  plugins: [
    typography({
      dark: true,
    }),
  ],
});
