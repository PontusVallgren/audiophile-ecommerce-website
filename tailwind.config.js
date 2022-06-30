module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "white",
      black: "#191919",
      primary: "#D87D4A",
      "primary-hover": "#FBAF85",
      "secondary-hover": "#4C4C4C",
      gray: "#979797",
      lightGray: "#F1F1F1",
      blue: "#4708F9",
    },
    fontFamily: {
      manrope: ["Manrope"],
    },

    extend: {
      backgroundImage: {
        "hero-mobile": "url('../public/banner-mobile.jpg')",
        "hero-tablet": "url('../public/banner-tablet.jpg')",
        "hero-desktop": "url('../public/banner-desktop.jpg')",
      },
      letterSpacing: {
        Char10: "10px",
      },
      fontSize: {
        Body: "15px",
        Title: "56px",
      },
      screens: {
        "lg-1": "1140px",
      },
    },
  },
  plugins: [],
};
