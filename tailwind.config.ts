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
        'bigMobile': '480px',
        'bigScreen':'1440px'
      },
      backgroundImage: {
        'header-bg': "url('/images/header.png')",
        'header-bg@2x': "url('/images/header@2x.png')",
        'about-bg': "url('/images/about-couple.png')",
        'about-bg@2x': "url('/images/about-couple@2x.png')",
        'career-bg': "url('/images/career.png')",
        'career-bg@2x': "url('/images/career@2x.png')",
         'gallery-bg':"url('/images/gallery-tree.png')",
         'gallery-bg@2x':"url('/images/gallery-tree@2x.png')",
         'contact-bg':"url('/images/contact.png')",
         'contact-bg@2x':"url('/images/contact@2x.png')",
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
