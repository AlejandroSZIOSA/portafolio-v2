import HeroSection from "./components/main/HeroSection";
import LatestProjectsSection from "./components/main/LatestProjectsSection";
import ProjectsSection from "./components/main/ProjectsSection";
import TechSection from "./components/main/TechSection";
import DividerHeaderTitle from "./components/separators/DividerHeaderTitle";

export default function Home() {
  return (
    <main className="flex flex-col w-full pb-9 items-center">
      <HeroSection />
      <DividerHeaderTitle sectionTitle="Tech Stack" />
      <TechSection />
      <DividerHeaderTitle sectionTitle="Latest" />
      <LatestProjectsSection />
      <DividerHeaderTitle sectionTitle="Projects" />
      <ProjectsSection />
    </main>
  );
}
