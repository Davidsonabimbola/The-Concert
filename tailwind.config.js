/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        wavey: {
          "0%, 100%": {
            transform:"scaleY(0.5)"
          },
          "50%":{
            transform:"scaleY(1.5)"
          }
        }
      },
      animation:{
        wavey:"wavey 1s linear infinite"
      },
    },
  },
  plugins: [require("./src/plugins/animationSetup")],
}

