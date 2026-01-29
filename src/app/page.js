"use client";
import HeroSection from "@/components/main/HeroSection";
import LatestProjectsSection from "@/components/main/LatestProjectsSection";
import ProjectsSection from "@/components/main/ProjectsSection";
import TechSection from "@/components/main/TechSection";
import DividerHeaderTitle from "@/components/ui/DividerHeaderTitle";

import LogoHeader from "@/components/header/LogoHeader";
import UpdatedDatePanel from "@/components/header/UpdatedDatePanel";
import NavBar from "@/components/header/NavBar";

import FooterContent from "@/components/footer/FooterContent";
import { useMedia } from "use-media";
import { CONSTANTS } from "@/utils/constants";

export default function Home() {
  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH);
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

        <section className="block lg:flex lg:w-full">
          <div className="lg:border-r-2 lg:border-t-2 lg:border-black lg:bg-[bisque]">
            {isMobile ? (
              <DividerHeaderTitle sectionTitle="My Last Project" />
            ) : (
              <div className="lg:h-14 lg:content-center lg:text-center text-[rgb(127,255,0)] bg-black">
                <h2>My last Project</h2>
              </div>
            )}
            <LatestProjectsSection />
          </div>
          <div className="lg:w-full">
            <DividerHeaderTitle
              sectionTitle="Previous Mini-Apps"
              putSectionId="previous_projects_divider"
            />
            <ProjectsSection />
          </div>
        </section>
      </main>
      <footer>
        <FooterContent />
      </footer>
    </>
  );
}
