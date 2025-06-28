/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
            primary: "#OEOEOE",
            secondary: "#D42BD8",
            tertiary: "#FFFFFF",
        },
        boxShadow: {
            "3d": "3px 3px 0px #D42BD8",
        },
    },
  },
  plugins: [],
};
