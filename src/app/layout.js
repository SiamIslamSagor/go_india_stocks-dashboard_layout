import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Go India Stocks",
  description:
    "We are empowering retail investors by giving them access to high-quality equity research with help of cutting-edge artificial intelligence technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <div className="border4 border-red-600 flex">
          <SideBar />
          {children}
        </div>
      </body>
    </html>
  );
}
