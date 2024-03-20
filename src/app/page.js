import FooterContent from "./components/footer/FooterContent";
import NavBar from "./components/header/NavBar";
import HeroSection from "./components/main/HeroSection";
import ProjectsSection from "./components/main/ProjectsSection";
import Separator from "./components/separators/Separator";

/* TODO: PROBLEM IN THE HERO SECTION */
export default function Home() {
  return (
    <div id="mainContainer" className="flex flex-col items-center">
      <header className="flex flex-col fixed w-full bg-[#343434]">
        <h1 className="text-[#F24E1E] text-center my-2">Portafolio V2</h1>
        <NavBar />
      </header>
      <main className="flex flex-col w-full pb-9 items-center">
        <HeroSection />
        <h2 className="w-full py-2 text-center font-semibold border-black border-t-4 border-b-4 border-dashed">
          Projects
        </h2>
        <ProjectsSection />
      </main>
      <h2 className="w-full py-2 text-center font-semibold border-black border-t-4 border-b-4 border-dashed">
        Contact
      </h2>
      <footer className="flex flex-col py-4 gap-3 items-center">
        <FooterContent />
      </footer>
    </div>
  );
}
