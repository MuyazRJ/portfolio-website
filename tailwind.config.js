/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%'
      },
      screens: {
        'md1': '822px',
        // => @media (min-width: 992px) { ... }
      },
      colors: {
        'main-gold': '#7EB3CE',
        'nav-grey': '#626262',
        'main-black': '#1A1A1A'
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateX(0)' },
          '40%': { transform: 'translateX(4px)' },
          '100%': { transform: 'translateX(-4px)' },
        },
        entry: {
          '0%' : { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        leave: {
          '100%' : { transform: 'translateX(100%)' },
          '0%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.18s 2',
        entry: 'entry 1s',
        leave: 'leave 0.5s'
      }
    },
  },
  plugins: [],
}
