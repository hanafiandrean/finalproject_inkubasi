// tailwind.config.js (ESM)
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          sans: ['system-ui', 'ui-sans-serif', 'Inter', 'SF Pro Text', 'sans-serif'],
        },
        colors: {
          'ink-bg': '#020617', // background utama
          'ink-primary': '#22d3ee', // cyan
          'ink-primary-soft': '#0f172a', // card bg
          'ink-accent': '#a855f7', // purple
        },
        boxShadow: {
          glow: '0 0 40px rgba(34,211,238,0.25)',
        },
      },
    },
    plugins: [],
  };
  