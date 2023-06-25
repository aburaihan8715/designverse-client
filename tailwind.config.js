/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a6d1fc",

          secondary: "#8e28c9",

          accent: "#f7f76a",

          neutral: "#161424",

          "base-100": "#fcfcfd",

          info: "#87d3e8",

          success: "#33dba0",

          warning: "#efb06c",

          error: "#e3594a",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
