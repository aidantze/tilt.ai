/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-blue': '#1A2B43',
                'accent-cyan': '#00C8FF',
                'background-grey': '#F5F7FA',
                'dark-text': '#2C3E50',
                'sentiment-positive': '#27AE60',
                'sentiment-negative': '#C0392B',
                'sentiment-neutral': '#F1C40F',
            }
        },
    },
    plugins: [],
}