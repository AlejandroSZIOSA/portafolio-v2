import HeroSection from "/src/components/main/HeroSection";
import LatestProjectsSection from "/src/components/main/LatestProjectsSection";
import ProjectsSection from "/src/components/main/ProjectsSection";
import TechSection from "/src/components/main/TechSection";
import DividerHeaderTitle from "/src/components/ui/DividerHeaderTitle";

import LogoHeader from "@/components/header/LogoHeader";
import UpdatedDatePanel from "@/components/header/UpdatedDatePanel";
import NavBar from "@/components/header/NavBar";

import FooterContent from "@/components/footer/FooterContent";

export default function Home() {
  return (
    <>
      <header>
        <LogoHeader />
        <UpdatedDatePanel />
        <NavBar variation="home-page" />
      </header>

      <main className="flex flex-col w-full items-center lg:items-start mx-auto">
        <HeroSection />
        <DividerHeaderTitle sectionTitle="My Tech Stack" />
        <TechSection />

        <div className="block lg:flex lg:w-full">
          <div>
            <DividerHeaderTitle sectionTitle="My Last Project" />
            <LatestProjectsSection />
          </div>
          <div className="lg:w-full">
            <DividerHeaderTitle
              sectionTitle="Previous Mini-Apps"
              putSectionId="previous_projects_divider"
            />
            <ProjectsSection />
          </div>
        </div>
      </main>
      <footer>
        <FooterContent />
      </footer>
    </>
  );
}
