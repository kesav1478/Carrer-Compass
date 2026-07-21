import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#1B1E24",
          surface: "#242830",
          elevated: "#2C313B",
          border: "#343A46",
        },
        offwhite: {
          DEFAULT: "#E7E4DC",
          muted: "#A8A59D",
          dark: "#706E67",
        },
        slateAccent: {
          DEFAULT: "#4C6580",
          hover: "#5B7796",
          subtle: "rgba(76, 101, 128, 0.15)",
        },
        brassAccent: {
          DEFAULT: "#B98D46",
          hover: "#D1A153",
          subtle: "rgba(185, 141, 70, 0.15)",
        },
        sageState: {
          DEFAULT: "#7C8F72",
          hover: "#8FA384",
          subtle: "rgba(124, 143, 114, 0.15)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};
export default config;
