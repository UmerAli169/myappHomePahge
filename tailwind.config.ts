import type { Config } from 'tailwindcss';

export default {
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
      },
      dropShadow: {
        'custom': '4px 4px 0px #2E2F35',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'covered-by-your-grace': ['"Covered By Your Grace"', 'sans-serif'], // Make sure to include quotes if the font has spaces
      },
    },
  },
  plugins: [],
} satisfies Config;
