/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pop': ["Poppins",],
        'Karma': ["Karma",],
        'roboto': ["Roboto Slab",],
       
      },
      colors: {
        'hoverColor': '#243c5a',
        'borderColor':'#309DC1',
      },
      backgroundImage: {
        'bannerbg': "url('./assets/bannerbg.png')",
       
        
      },
      
        maxWidth: {
          'monitorsContainer': '1150px',
          'productContainer': '1050px',
        },
      
    },
  },
  plugins: [],
}

