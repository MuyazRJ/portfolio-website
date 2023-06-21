/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-gold': '#EFB55A',
        'nav-grey': '#626262',
        'main-black': '#1A1A1A'
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateX(0)' },
          '40%': { transform: 'translateX(4px)' },
          '100%': { transform: 'translateX(-4px)' },
        }
      },
      animation: {
        wiggle: 'wiggle 0.18s 2',
      }
    },
  },
  plugins: [],
}
