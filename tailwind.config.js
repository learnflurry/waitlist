/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "nord-black": "#4C566A",
                "nord-grey": "#ECEFF4",
                "nord-white": "#FFFFFF",
                "nord-purple": "#B48EAD",
            },
        },
        fontFamily: {
            "zen-maru": ["Zen Maru Gothic", "sans-serif"],
        },
    },
    plugins: [],
};
