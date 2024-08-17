/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#de2c4d",
        secondary:"#fb923c"
      },
      fontFamily:{
        poppins: ["poppins","san-serif"],
        averia:["Averia Serif Libre"],
      },
      container:{
        center: true,
        padding:{
          DEFAULT: "1rem",
          sm:"2rem",
          lg:"4rem",
          xl:"5rem",
          "2xl":"6rem"
        }
      }
    },
  },
  plugins: [],
}