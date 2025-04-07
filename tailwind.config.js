/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        "--Bungee_Tint":"Bungee_Tint"
      },
      colors: {
        "--main-color": "#c21329",
        "--footer-light-color": "#394150",
        "--footer-dark-color": "#202935",
      },
      borderWidth: {
        "--thin": "1px"
      },
      width: {
        "--small": "110px"
      },
      screens: {
        "costum-2xs": "370px",
        "costum-xs": "500px",
        "costum-sm": "640px",
        "costum-md": "700px",
        "costum-lg": "768px",
        "costum-xl": "900px",
        "costum-2xl": "1200px",
        "costum-3xl": "1500px",
        
      }

    }
  },
  plugins: [],
}

