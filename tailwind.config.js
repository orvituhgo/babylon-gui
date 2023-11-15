/** @type {import('tailwindcss').Config} */

import colors from './src/config/colors'

export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,tsx,jsx}" 
],
  theme: {
    extend: {
      colors: {
        primary: colors.primary, 
        primaryDark: colors.primaryDark, 
        secondary: colors.secondary, 
        secondaryDark: colors.secondaryDark, 
        dark: colors.dark, 
      }
    },
  },
  plugins: [],
}

