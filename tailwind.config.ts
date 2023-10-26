import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        errorColor:"#FF5757"
      },
      screens: {
        'mobile': '320px',   
        'tablet': '768px',    
        'desktop': '1280px', 
        'bigMobile':'480px'
      },
      backgroundImage: {
        'header-bg': "url('/images/header.png')",
        'about-bg': "url('/images/about-couple.png')",
        'career-bg': "url('/images/career.png')",
         'gallery-bg':"url('/images/gallery-tree.png')",
         'contact-bg':"url('/images/contact.png')",
      },
       fontSize: {
         title: ["40px", { fontWeight: "500", lineHeight: "56px" }],
         titleTb: ["67px", { fontWeight: "500" }],
         titleDt: ["98px", { fontWeight: "500" }],
        subTitle: ["14px", { fontWeight: "400" }],
        text: ["14px", { fontWeight: "200" }],
        subText: ["10px", { fontWeight: "200" }],
      },
    },
  },
  plugins: [],
}
export default config
