const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // default
        sans: ['Asap', ...defaultTheme.fontFamily.sans],
        serif: defaultTheme.fontFamily.serif,
        mono: defaultTheme.fontFamily.mono,
        // custom
        body: ['Sono'],
        // layout
        nav: ['MavenPro'],
        footer: ['MavenPro'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
