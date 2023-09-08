/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{tsx,ts}",
    "./src/**/*.{jsx,js}",
  ],
  theme: {
    // screens: {
    //   "xs": ""
    // },
    extend: {
      screens: {
        "xs": "450px",
        "3xl": "1800px",
      },
      colors: {
        "primary": "#FFC700",
        "secondary": "#052E58",
        "black_light": "#424242",
        "white_light": "#E0E0E0",
        "gray-100": "#F5F5F5",
        "gray-200": "#BDBDBD",
        "black-500": "#2F2F2F",
        "gray-300": "#F2F2F2",
        "gray-400": "#727272",

      },
      backdropGrayscale: {

      },
      fontFamily: {

      },
      backgroundImage: {

        "primary-image": "url(/images/theme-bg.png)",
        "header-image": "url(/images/header.png)",
        "primary-image-mobile": "url(/images/theme-bg-mobile.png)",
      },
      backdropBlur: {
        'primary-image': "blur(500px)"
      },
      borderRadius: {

      },
      backgroundPosition: {
        "primary-image": "center",
        "primary-image-mobile": "center",
      },
      backgroundSize: {
        "primary-image": "cover",
        "primary-image-mobile": "cover",
      },
      boxShadow: {

      },

    },

  },
  plugins: [
    // require("daisyui"),
  ],
}

