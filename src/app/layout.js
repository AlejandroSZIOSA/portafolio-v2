import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/header/NavBar";
import FooterContent from "./components/footer/FooterContent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex flex-col sticky top-0 w-full bg-[#343434]">
          <h1 className="text-[#F24E1E] text-center my-1">Portafolio V2</h1>
          <NavBar />
        </header>
        {children}
        <footer className="flex flex-col w-full py-4 gap-3">
          <FooterContent />
        </footer>
      </body>
    </html>
  );
}
