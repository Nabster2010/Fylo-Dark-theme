/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        DarkBlueIntro: "hsl(217, 28%, 15%)",
        DarkBlueMain: "hsl(218, 28%, 13%)",
        DarkBlueFooter: "hsl(216, 53%, 9%)",
        DarkBlueTestimonials: "hsl(219, 30%, 18%)",
        Cyan: "hsl(176, 68%, 64%)",
        Blue: "hsl(198, 60%, 50%)",
        LightRed: "hsl(0, 100%, 63%)",
        White: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        OpenSans: "Open Sans,sans-serif",
        Raleway: "Raleway,sans-serif",
      },
      backgroundImage: {
        sectionDesktop: 'url("/images/bg-curvy-desktop.svg")',
        sectionMobile: 'url("/images/bg-curvy-mobile.svg")',
      },
    },
  },
  plugins: [],
};
