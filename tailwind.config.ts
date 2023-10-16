import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '320px',   
        'md': '768px',    
        'lg': '1280px',   
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
         'header-bg': "url('/images/header.png')",
      },
       fontSize: {
        title: ["40px", { fontWeight: "500", lineHeight: "56px" }],
        // subTitle: ["14px", { fontWeight: "400" }],
        text: ["14px", { fontWeight: "200" }],
        subText: ["10px", { fontWeight: "200" }],
      },
    },
  },
  plugins: [],
}
export default config
