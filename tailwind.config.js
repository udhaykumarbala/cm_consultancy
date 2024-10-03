/** @type {import('tailwindcss').Config} */
const config = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         animation: {
            "move-left": "move-left 1s linear infinite",
            "move-right": "move-right 5s linear infinite",
         },

         keyframes: {
            "move-left": {
               "0%": {
                  transform: "translateX(0%)",
               },
               "100%": {
                  transform: "translateX(-50%)",
               },
            },

            "move-right": {
               "0%": {
                  transform: "translateX(-50%)",
               },
               "100%": {
                  transform: "translateX(0%)",
               },
            },
         },
      },
   },
   plugins: [],
};

export default config;
