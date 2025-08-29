import HeroSection from "/src/components/main/HeroSection";
import LatestProjectsSection from "/src/components/main/LatestProjectsSection";
import ProjectsSection from "/src/components/main/ProjectsSection";
import TechSection from "/src/components/main/TechSection";
import DividerHeaderTitle from "/src/components/separators/DividerHeaderTitle";

export default function Home() {
  return (
    <main className="flex flex-col w-full pb-9 items-center">
      <HeroSection />
      <DividerHeaderTitle sectionTitle="Tech-Stack" />
      <TechSection />
      <DividerHeaderTitle sectionTitle="Latest" />
      <LatestProjectsSection />
      <DividerHeaderTitle sectionTitle="Projects" />
      <ProjectsSection />
    </main>
  );
}
