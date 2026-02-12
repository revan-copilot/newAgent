/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#143A79',
        'primary-blue-dark': '#163A6B',
        'primary-blue-light': '#2563EB',
        'accent-teal': '#2DD4BF',
        'accent-teal-light': '#5EEAD4',
        'dark-bg': '#0F172A',
        'dark-bg-lighter': '#1E293B',
        'light-bg': '#F8FAFC',
        'text-dark': '#0F172A',
        'text-gray': '#64748B',
        'text-light': '#94A3B8',
        'text-white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lateef', 'serif'],
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        'full': 'var(--radius-full)',
      },
      container: {
        center: true,
        padding: '24px',
        screens: {
          '2xl': '1280px',
        }
      }
    },
  },
  plugins: [],
}
