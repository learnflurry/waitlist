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
                "nord-dark-grey": "#D8DEE9",
                "nord-white": "#FFFFFF",
                "nord-purple": {
                    100: "#f0e8ef",
                    200: "#e1d2de",
                    300: "#d2bbce",
                    400: "#c3a5bd",
                    500: "#b48ead",
                    550: "#A486A3",
                    600: "#90728a",
                    700: "#6c5568",
                    800: "#483945",
                    900: "#241c23",
                },
            },
            backgroundImage: {
                "intro-desktop":
                    "url('/src/assets/desktop/swirl-desktop-1.svg')",
                "intro-mobile-top":
                    "url('/src/assets/mobile/swirl-mobile-1.svg')",
                "intro-mobile-bottom":
                    "url('/src/assets/mobile/swirl-mobile-2.svg')",

                "about-desktop":
                    "url('/src/assets/desktop/swirl-desktop-2.svg')",
                "about-mobile": "url('/src/assets/mobile/swirl-mobile-3.svg')",

                "faq-desktop": "url('/src/assets/desktop/swirl-desktop-3.svg')",
                "faq-mobile": "url('/src/assets/mobile/swirl-mobile-4.svg')",

                footer: "url('/src/assets/footer-swirl.svg')",
            },
        },
        fontFamily: {
            "zen-maru": ["Zen Maru Gothic", "sans-serif"],
        },
    },
    plugins: [],
};
