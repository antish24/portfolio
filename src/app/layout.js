import TopNavBar from "@/components/NavBars/topnavbar/TopNavBar";
import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const inter = Roboto({ subsets: ["latin"],weight:['100','300','400','700','900']});

export const metadata = {
  title: "ISH 24",
  description: "Developer and Graphics Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNavBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
