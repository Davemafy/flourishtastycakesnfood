/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            colors: {
                white: "#fff",
                lightBrown: "#EBC6B0",
                darkBrown: "#EBC6B0",
                dark: "#111111",
                veryYellow: "#F8CB10",
                lighterDark: "#242424"
            },
            fontFamily: {
                bd: ["romanBold", "sans-serif"],
                roman: ["roman", "sans-serif"]
            }
        }
    },
    plugins: []
};
