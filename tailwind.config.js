module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",

      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      xm: "968px",
    },

    extend: {
      display: ["group-hover"],
      height: {
        100: "25rem",
      },
      boxShadow: {
        "3xl": "0 10px 20px rgba(0, 0, 0, 0.2)",
      },
      colors: {

        
        //THEME 1

        "Dark-main": "hsl(222, 26%, 31%)",
        "Dark-screen": "hsl(224, 36%, 15%)",
        "Dark-keypad": "hsl(223, 31%, 20%)",
        "Dark-toggle-background": "hsl(223, 31%, 20%)",

        /////////////////////////////////

        "Dark-blue-key-background": "hsl(225, 21%, 49%)",
        "Dark-blue-key-shadow": "hsl(224, 28%, 35%)",

        /////////////////////////////////

        "Dark-red-key-background": "hsl(6, 63%, 50%)",
        "Dark-red-key-shadow": "hsl(6, 70%, 34%)",

        /////////////////////////////////

        "Dark-gray-key-background": "hsl(30, 25%, 89%)",
        "Dark-gray-key-shadow": "hsl(30, 25%, 89%)",

        /////////////////////////////////

        "Dark-blue-text": "hsl(221, 14%, 31%)",
        "Dark-white-text": "hsl(0, 0, 100%)",

        //THEME 2

        "Light-main": "hsl(0, 0%, 90%)",
        "Light-screen": "hsl(0, 0%, 93%)",
        "Light-keypad": "hsl(0, 5%, 81%)",
        "Light-toggle-background": "hsl(0, 5%, 81%)",

        /////////////////////////////////

        "Light-blue-key-background": "hsl(185, 42%, 37%)",
        "Light-blue-key-shadow": "hsl(185, 58%, 25%)",

        /////////////////////////////////

        "Light-red-key-background": "hsl(25, 98%, 40%)",
        "Light-red-key-shadow": "hsl(25, 99%, 27%)",

        /////////////////////////////////

        "Light-gray-key-background": "hsl(45, 7%, 89%)",
        "Light-gray-key-shadow": "hsl(35, 11%, 61%)",

        /////////////////////////////////

        "Light-blue-text": "hsl(60, 10%, 19%)",
        "Light-white-text": "hsl(0, 0, 100%)",

        //THEME 3

        "Violette-main": "hsl(268, 75%, 9%)",
        "Violette-screen": "hsl(268, 71%, 12%)",
        "Violette-keypad": "hsl(268, 71%, 12%)",
        "Violette-toggle-background": "hsl(268, 71%, 12%)",

        /////////////////////////////////

        "Violette-blue-key-background": "hsl(281, 89%, 26%)",
        "Violette-blue-key-shadow": "hsl(285, 91%, 52%)",

        /////////////////////////////////

        "Violette-red-key-background": "hsl(176, 100%, 44%)",
        "Violette-red-key-shadow": "hsl(177, 92%, 70%)",

        /////////////////////////////////

        "Violette-gray-key-background": "hsl(268, 47%, 21%)",
        "Violette-gray-key-shadow": "hsl(290, 70%, 36%)",

        /////////////////////////////////

        "Violette-blue-text": "hsl(198, 20%, 13%)",
        "Violette-white-text": "hsl(0, 0, 100%)",
        "Violette-yellow-text": "hsl(52, 100%, 62%)",
      },
      fontSize: {
        xxxs: ".50rem",
        xxs: ".65rem",
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
    },
  },
  plugins: [],
};
