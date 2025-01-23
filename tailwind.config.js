/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      primary: {
        DEFAULT: "hsl(var(--primary))",
      },
      background: {
        DEFAULT: "hsl(var(--background))",
      },
    },
  },
};
export const plugins = [];
