/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#FEAF00",
        secondary: "#F8D442",
        textColor: "#6C6C6C",
        inputBorder: "#E5E5E5",
        accent: "#FEAF00",
        title: "#FEAF00",
        red: "#FF4E3E",
      }
    },
  },
  plugins: [],
}

