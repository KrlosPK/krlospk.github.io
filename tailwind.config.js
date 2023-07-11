/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      sans: ["sans-serif"],
    },
    extend: {
      colors: {
        "custom-50": "#111222",
        "custom-100": "#2C0E37",
        "custom-200": "#8c5b94",
        "custom-300": "#0C6291",
        "custom-400": "#C0FDFB",
        "custom-500": "#F7FFFF",
        "custom-600": "#054c72",
        "custom-700": "#75467c",
        "gradient-1": "#124591",
        "gradient-2": "#0066FF",
      },
    },
  },
  plugins: [],
};
