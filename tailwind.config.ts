import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
      },
      screens: {
        "2xl": "1440px",
        xl: "1280px",
        lg: "1024px",
        md: "768px",
        sm: "640px",
        xs: "480px",
      },
      colors: {
        "body-color": "#4F4F4F",
        "orange-bg-font-color": "#EE5719",
        "blue-font-color": "#061A48",
        "white-font-color": "#FFFFFF",
        "gray-font-color": "#6D717A",
        "orange-gray": "#ECE7DB",
        "red-color": "#DB0C0C",
        "login-input-font": "#656A92",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        "body-color": "#4F4F4F",
        "orange-bg-font-color": "#EE5719",
        "blue-font-color": "#061A48",
        "white-font-color": "#FFFFFF",
        "gray-font-color": "#6D717A",
        "orange-gray": "#ECE7DB",
        "red-color": "#DB0C0C",
        "login-input-font": "#656A92",
      },
    ],
  },
};
export default config;
