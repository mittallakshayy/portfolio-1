/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          bg: '#ffffff',
          'bg-secondary': '#f8fafc',
          'bg-card': '#ffffff',
          text: '#1e293b',
          'text-secondary': '#64748b',
          'text-muted': '#94a3b8',
          border: '#e2e8f0',
          'border-hover': '#cbd5e1',
        },
        dark: {
          bg: '#0f172a',
          'bg-secondary': '#1e293b',
          'bg-card': '#334155',
          text: '#f8fafc',
          'text-secondary': '#cbd5e1',
          'text-muted': '#94a3b8',
          border: '#334155',
          'border-hover': '#475569',
        }
      }
    },
  },
  plugins: [],
};
