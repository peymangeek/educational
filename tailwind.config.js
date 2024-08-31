/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
    },
    extend: {
      container: {
        center: true
      },
      fontFamily: {
        "Sans-Thin": "Sans-Thin",
        "Sans-Light": "Sans-Light",
        "Sans-Regular": "Sans-Regular",
        "Sans-Medium": "Sans-Medium",
        "Sans-DemiBold": "Sans-DemiBold",
        "Sans-Bold": "Sans-Bold",
        "Sans-ExtraBold": "Sans-ExtraBold",
        "Sans-Black": "Sans-Black",

      }
    },
  },
  plugins: [function ({ addVariant }) {
    addVariant("child", "& > *")
    addVariant("child-hover", "& > *:hover")
  }],
};
