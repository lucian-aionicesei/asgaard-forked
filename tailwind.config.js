module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        acier: ["acier", "sans-serif"],
        aciersolid: ["acier-solid", "sans-serif"],
      },
      fontSize: {
        '5.5xl': '3.5rem'
      },
      colors: {
        'concert-yellow': '#FBCE30',
        'concert-pink': '#F280B6',
        'concert-b-green': '#09E970',
        'concert-l-green': '#23D398',
        'concert-redish': '#FF7A74',
        'concert-blue': '#05AFF2',
        'concert-yellowish': '#FFF9E7',
      },
      spacing: {
        '26': '6.5rem',
        '40.5': '10.5rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
