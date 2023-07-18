/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      sans: [
        "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif",
      ],
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
        "custom-800": "#e0f2ff",
        "custom-900": "#132130cc",
        "gradient-1": "#124591",
        "gradient-2": "#0066FF",
        "gradient-3": "#3b82f6",
        "gradient-4": "#06b6d4",
      },
    },
  },
  plugins: [],
};
