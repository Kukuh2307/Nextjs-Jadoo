/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ["'Poppins', 'sans-serif'"],
        serif: ["'Volkhov', 'serif'"],
      },
      colors:{
        "accent-1":"#F1A501",
        "accent-2":"#DF6951",
        "accent-3":"#D5AEE4",
        "accent-4":"#FFF1DA",
        "accent-5":"#FF7152",
        "accent-6":"#6246E5",
        "accent-7":"#006380",
        "accent-8":"#59B1E6",
        "accent-9":"#DFD7F9",
        "gardient-social":"conic-gradient(from 180deg at 50% 50%, #B8D2F1 0deg, #F289AA 60deg, #C68BF0 106.09deg, #D164DA 153.75deg, #C963E8 221.25deg, #BFC2E8 258.75deg, #FFC999 288.75deg, #D0D8C9 315deg, #BAD0F1 334.13deg, #CED8CB 358.97deg, rgba(255, 255, 255, 0) 360deg)",
      }
    },
  },
  plugins: [],
}
