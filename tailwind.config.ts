import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: { 
      'mossGreen': '#9FB063',
      'white':'#ffffff',
      'red': {
        500: '#EF4444',
      },
      'purple': {
        600: '#A855F7',
        800: '#7E22CE',
      },
      'violet':{
        100: '#F4E9FF',
        200: '#DDD6FE',
      },   
      'slate':{
        100: '#F1F5F9',
      },  
      'zinc':{
        400: '#A1A1AA',
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
