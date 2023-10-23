/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1dace0",

          secondary: "#a165bf",

          accent: "#eaa98f",

          neutral: "#1c2331",

          "base-100": "#422f51",

          info: "#467ee7",

          success: "#228771",

          warning: "#99800f",

          error: "#f52714",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
