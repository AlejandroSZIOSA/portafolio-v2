import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "/src/components/header/NavBar";
import FooterContent from "/src/components/footer/FooterContent";
import LogoHeader from "/src/components/header/LogoHeader";
import UpdatedDatePanel from "@/components/header/UpdatedDatePanel";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "My personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="body_" className={inter.className}>
        {/* <header>
          <LogoHeader />
          <UpdatedDatePanel />
          <NavBar />
        </header> */}
        {children}
        {/* <footer>
          <FooterContent />
        </footer> */}
      </body>
    </html>
  );
}
