/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'ui-sans-serif', 'Inter', 'SF Pro Text', 'sans-serif'],
      },
      colors: {
        'ink-bg': '#020617', // slate-950 vibes
        'ink-primary': '#22d3ee', // cyan-400
        'ink-primary-soft': '#0f172a', // slate-900
        'ink-accent': '#a855f7', // purple-500
      },
      boxShadow: {
        'glow': '0 0 40px rgba(34,211,238,0.25)',
      },
    },
  },
  plugins: [],
};
