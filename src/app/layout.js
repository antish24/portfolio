import TopNavBar from "@/components/NavBars/topnavbar/TopNavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anteneh Ashenafi",
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
