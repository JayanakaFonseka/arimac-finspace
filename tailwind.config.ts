import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "450px",
      sm: "575px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
      "3xl": "1600px",
      "4xl": "1850px",
    },
    extend: {
      colors: {
        primary: "#3B36AB", // Your primary color
        secondary: "#79CC56", // Your secondary color
      },
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"], // sets Inter as default sans
        manrope: ["'Manrope'", "sans-serif"],
      },
      fontSize: {
        "4xl": "3.5rem",
        "3xl": "2.25rem",
        "2xl": "1.875rem",
        xl: "1.5rem",
        lg: "1.25rem",
        base: "1rem",
        sm: "0.875rem",
        xs: "0.75rem",
      },
      lineHeight: {
        "4xl": "3.5rem",
        "3xl": "2.75rem",
        "2xl": "2.375rem",
        xl: "2rem",
        lg: "1.75rem",
        base: "1.5rem",
        sm: "1.25rem",
        xs: "1rem",
      },
      letterSpacing: {
        tightest: "-0.5px",
        tighter: "-0.25px",
        tight: "-0.15px",
        normal: "0px",
        wide: "0.05px",
        wider: "0.1px",
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
