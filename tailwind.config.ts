import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // اللون الأساسي: كحلي داكن
        brand: {
          50: "#eaf0f7",
          100: "#c9d7e6",
          200: "#94b0c8",
          300: "#5e87aa",
          400: "#355f89",
          500: "#183964",
          600: "#132f55",
          700: "#0f2644",
          800: "#0b1c34",
          900: "#081326",
        },
        // اللون الثانوي: سماوي — يستخدم بإمساك شديد
        accent: {
          50: "#e6f9fc",
          100: "#bfeff6",
          200: "#88e1ed",
          300: "#4ed1e4",
          400: "#2ec6dc",
          500: "#1dc0df",
          600: "#169cb6",
          700: "#11788d",
          800: "#0c5768",
          900: "#083b47",
        },
        ink: {
          50: "#f7f8fa",
          100: "#eceff3",
          200: "#d5dbe3",
          300: "#a9b4c2",
          400: "#7a8798",
          500: "#556273",
          600: "#3d4857",
          700: "#2a3340",
          800: "#1a212c",
          900: "#0d121a",
        },
        canvas: "#f6f8fb",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 16px rgba(24, 57, 100, 0.06)",
        card: "0 1px 3px rgba(24, 57, 100, 0.04), 0 4px 16px rgba(24, 57, 100, 0.04)",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(6px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
