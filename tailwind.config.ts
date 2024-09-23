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
        background: "var(--background)",
        foreground: "var(--foreground)",
        backgroundColor: "#f1f5f9",
      },
      boxShadow: {
        shadowCategory: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        shadowInput: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
      // fontFamily: {
      //   nunito_Sans: "Nunito Sans",
      // },
    },
  },
  plugins: [],
};
export default config;
