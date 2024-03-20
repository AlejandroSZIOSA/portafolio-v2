import FooterContent from "./components/footer/FooterContent";
import NavBar from "./components/header/NavBar";
import HeroSection from "./components/main/HeroSection";
import ProjectsSection from "./components/main/ProjectsSection";

export default function Home() {
  return (
    <div id="mainContainer" className="flex flex-col items-center">
      <header className="flex flex-col fixed w-full bg-[#343434]">
        <h1 className="text-[#F24E1E] text-center my-2 text-5xl">
          Portafolio V2
        </h1>
        <NavBar />
      </header>
      <main className="flex flex-col items-center">
        <HeroSection />
        <ProjectsSection />
      </main>
      <footer className="flex flex-col py-2 gap-2 items-center">
        <FooterContent />
      </footer>
    </div>
  );
}
