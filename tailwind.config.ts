import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "3d": "2px 2px 5px 0px rgba(0,0,0,0.75),-1px -1px 1px 0px rgba(0,0,0,0.75)",
        "3d-hovered":
          "-2px -2px 5px 0px rgba(0,0,0,0.5),1px 1px 1px 0px rgba(0,0,0,0.5)",
        // '3d-hovered': '0px 0px 30px 1px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [],
}
export default config
