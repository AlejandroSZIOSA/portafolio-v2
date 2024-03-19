import NavBar from "./components/header/NavBar";
import HeroSection from "./components/main/HeroSection";
import ProjectsSection from "./components/main/ProjectsSection";

export default function Home() {
  return (
    <div>
      <div id="mainContainer" className="flex flex-col items-center">
        <header className="flex flex-col w-full bg-[#343434] dark:bg-white items-center">
          <h1 className="text-[#F24E1E] my-2 text-5xl">Portafolio</h1>
          <NavBar />
        </header>
        <main className="flex flex-col items-center">
          <HeroSection />
        </main>
      </div>
    </div>
  );
}
