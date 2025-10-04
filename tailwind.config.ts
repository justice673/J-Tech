import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#0B1120",
        surface: "#0F172A",
        text: "#E5E7EB",
        muted: "#94A3B8",
        accent: "#22D3EE",
        accentAlt: "#A78BFA",
        border: "#1E293B",
      },
      borderRadius: {
        'none': '0',
        DEFAULT: '0',
      },
      backgroundImage: {
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
