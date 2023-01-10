/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
            },
        },
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
