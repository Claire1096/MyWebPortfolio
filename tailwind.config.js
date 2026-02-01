// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["'Playfair Display', serif"],
        poppins: ["'Poppins', sans-serif"],
        petrona: ["'Petrona', 'sans-serif'"]
      },
    },
  },
  plugins: [],
};
