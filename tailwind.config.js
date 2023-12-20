/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      limeGreen: "hsl(163, 72%, 41%)",
      brightRed: "hsl(356, 69%, 56%)",
      facebook: "hsl(208, 92%, 53%)",
      twitter: "hsl(203, 89%, 53%)",
      instLin1: "hsl(37, 97%, 70%)",
      instLin2: "hsl(329, 70%, 58%)",
      youtube: "hsl(348, 97%, 39%)",
      // LightMode
      lm_white: "hsl(0, 0%, 100%)",
      lm_paleBlue: "hsl(225, 100%, 98%)",
      lm_grayBlue: "hsl(227, 47%, 96%)",
      lm_darkGrayBlue: "hsl(228, 12%, 44%)",
      lm_darkBlue: "hsl(230, 17%, 14%)",
      lm_toggle: "hsl(230, 22%, 74%)",
      // DarkMode
      dm_darkBlue: "hsl(230, 17%, 14%)",
      dm_darkBlueBg: "hsl(232, 19%, 15%)",
      dm_darkDesaturaedBlue: "hsl(228, 28%, 20%)",
      dm_desaturatedBlue: "hsl(228, 34%, 66%)",
      dm_white: "hsl(0, 0%, 100%)",
      dm_toggleLin1: "hsl(210, 78%, 56%)",
      dm_toggleLin2: "hsl(146, 68%, 55%)",
    },
    fontFamily: {
      inter: ["Inter"],
    },
    extend: {},
  },
  plugins: [],
};
