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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#382673',
        secondary: '#383c41',
        'border-color': '#e4e9f8',
        'swiper-theme': '#007aff',
      },
      fontFamily: {
        mansory: ['Mansory', 'sans-serif'],
        sans: ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
