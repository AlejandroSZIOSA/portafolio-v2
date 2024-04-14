import FooterContent from "./components/footer/FooterContent";
import NavBar from "./components/header/NavBar";
import HeroSection from "./components/main/HeroSection";
import LatestProjectsSection from "./components/main/LatestProjectsSection";
import ProjectsSection from "./components/main/ProjectsSection";
import TechSection from "./components/main/TechSection";
import DividerHeaderTitle from "./components/separators/DividerHeaderTitle";

export default function Home() {
  return (
    <div id="mainContainer" className="flex flex-col items-center">
      {/* <header className="flex flex-col sticky top-0 w-full bg-[#343434]">
        <h1 className="text-[#F24E1E] text-center my-1">Portafolio V2</h1>
        <NavBar />
      </header> */}
      <main className="flex flex-col w-full pb-9 items-center">
        <HeroSection />
        <DividerHeaderTitle sectionTitle="Tech Stack" />
        <TechSection />
        <DividerHeaderTitle sectionTitle="Latest" />
        <LatestProjectsSection />
        <DividerHeaderTitle sectionTitle="Projects" />
        <ProjectsSection />
      </main>

      {/* <footer className="flex flex-col w-full py-4 gap-3 items-center">
        <FooterContent />
      </footer> */}
    </div>
  );
}
