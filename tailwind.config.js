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
        'main-gold': '#FBB03B',
        'nav-grey': '#626262'
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
