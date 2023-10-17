import TopNavBar from "@/components/NavBars/topnavbar/TopNavBar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

import localFont from 'next/font/local'
 
// Font files can be colocated inside of `pages`
const myFont = localFont({
  src: [
    {
      path: '../../public/bebas_neue/Roboto-Light.ttf',
      weight: '200',
      style: 'light',
    },
    {
      path: '../../public/bebas_neue/Roboto-Thin.ttf',
      weight: '100',
      style: 'thin',
    },
    {
      path: '../../public/bebas_neue/Roboto-Regular.ttf',
      weight: '300',
      style: 'bold',
    },
    {
      path: '../../public/bebas_neue/Roboto-Bold.ttf',
      weight: '600',
      style: 'bold',
    },
    {
      path: '../../public/bebas_neue/Roboto-Black.ttf',
      weight: '700',
      style: 'black',
    },
    {
      path: '../../public/bebas_neue/logo.ttf',
      weight: '900',
      style: 'bolder',
    },
  ],
})

export const metadata = {
  title: "ISH 24 Inc",
  description: "Developer and Graphics Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <TopNavBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
