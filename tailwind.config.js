module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        select: "var(--select)",
        "select-item": "var(--select-item)",
        "select-item-active": "var(--select-item-active)",
        form: "var(--form)",
        "tabs-list": "var(--tabs-list)",
        error: "var(--error)",
        warning: "var(--warning)",
        success: "var(--success)",
        contrast: "var(--contrast)",
      },
    },
  },
  plugins: [],
};
