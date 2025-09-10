import HeroSection from "/src/components/main/HeroSection";
import LatestProjectsSection from "/src/components/main/LatestProjectsSection";
import ProjectsSection from "/src/components/main/ProjectsSection";
import TechSection from "/src/components/main/TechSection";
import DividerHeaderTitle from "/src/components/ui/separators/DividerHeaderTitle";

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center">
      <HeroSection />
      <DividerHeaderTitle sectionTitle="Tech-Stack" />
      <TechSection />
      <DividerHeaderTitle sectionTitle="Latest Project" />
      <LatestProjectsSection />
      <DividerHeaderTitle sectionTitle="All Projects" />
      <ProjectsSection />
    </main>
  );
}
