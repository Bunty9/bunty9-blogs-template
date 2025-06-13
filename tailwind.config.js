const {heroui} = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      typography: {
        DEFAULT: {
          css: {
            h2: {   
              fontSize: "1rem",
              fontWeight: "600",
            },
            h3: {
              fontSize: "1.5rem",
              fontWeight: "500",
            },
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui(),require("@tailwindcss/typography")],
}

export default config;