module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1160px",
        },
      },
      fontFamily: {
        "lexend-deca": "lexend-deca",
        "space-bold": "space-bold",
      },
      screens: {
        'tablet': '768px',
        'mobile': '378px',
      },
      backgroundImage: {
        bgi1: "url('/public/mock-imges/img/backgroudimg.svg')",
        bgi0: "url('/public/mock-imges/img/Bitmap.jpg')",
      },
      colors: {
        yellow: {
          DEFAULT: "#FCB72B",
          1: "#FFF4DF",
        },
        globalDark: {
          DEFAULT: "#495567",
          1: "#939CAA",
        },
        grey: {
          DEFAULT: "#E5ECF4",
          1: "#F2F5F9",
        },
        'white': '#ffffff',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const columnFuntion = {
        ".dfcol": {
          display: "flex",
          flexDirection: "column",
        },
        ".dfrow": {
          display: "flex",
          flexDirection: "row",
        },
      };

      addUtilities(columnFuntion, ["responsive", "hover"]);
    },
  ],
};
