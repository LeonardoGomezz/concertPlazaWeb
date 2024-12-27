import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'Lato': ['Lato','serif'],
    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(359.77deg, #090D12 6.4%, #0D1421 80.01%)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'xs': '430px',
        'base': '1440px'
      }
    },
  },
  plugins: [],
} satisfies Config;
