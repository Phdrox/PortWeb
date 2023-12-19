/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'phone':{'min':'320px', 'max':'640px'},
      
      'tablet':{'min':'640px','max':'1023px'},
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    colors:{
      'transparent':colors.transparent,
      'blue':colors.blue,
      'gray-dark': '#273444',
      'gray-light': '#d3dce6',
      'black':colors.black,
      'white':colors.white,
      'gray': colors.slate,
      'green': colors.emerald,
      'purple': colors.violet,
      'yellow': colors.amber,
      'pink': colors.fuchsia,
      'sky':colors.sky,
      'indigo':colors.indigo,
       
    },
     fontFamily:{
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
     },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }, 
      
      borderRadius: {
      '4xl': '2rem',
    }
    },
  },
  plugins: [],
}

