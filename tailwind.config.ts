import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        mytheme: {
          "body-color": "#4F4F4F",
          "orange-bg-font-color": "#EE5719",
          "blue-font-color": "#061A48",
          "white-font-color": "#FFFFFF",
          "gray-font-color": "#6D717A",
          "gray-font-color": "#6D717A",
          "orange-gray": "#6D717A",
          "red-color": "#6D717A",
          "login-input-font": "#6D717A",
        },
      },
    ],
  },
};
export default config;
