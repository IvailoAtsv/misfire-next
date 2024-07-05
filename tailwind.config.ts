import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
                primary: '#101010',
                secondary: '#fff',
                accent: '#F01E2C',
                accentDark:'#A30A15',
                gray: '#21222f',
                textGray: '#d9d9d9',
                background: '#1a2635',
                backgroundDark: '#2b3a50',
            },
              fontSize: {
        h1clamp: "clamp(4rem, 6.5vw, 10rem)",
        h2clamp: "clamp(3rem, 3.4vw, 6.5rem)",
        labelClamp:"clamp(1.9rem, 2vw, 2.7rem)",
        iconClamp: "clamp(4em, 10vw, 13rem)",
      },
            borderRadius: {
                blob: '25% 75% 35% 65% / 60% 23% 77% 40%',
                blobHover: '35% 65% 32% 60% / 65% 27% 67% 50%',
            },
            maxWidth:{
            container:'1440px'  
            },
            backgroundImage: {
                hero: "url('/src/images/hero.jpg')",
                heroPhone: "url('/src/images/heroPhone.jpg')",
                location: "url('/src/images/location.jpg')",
                about: "url('/src/images/about.jpg')",
            },
    },
  },
  plugins: [],
};
export default config;
