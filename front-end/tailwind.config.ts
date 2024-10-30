import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: "#0B1E33",
        primary: "#EEF4F8",
        white: "#ffffff",
        black: "#000000"
      },
      width:{
        threecol: "32%",
        twocol: "49%"
      }
    },
  },
  plugins: [],
};
export default config;
