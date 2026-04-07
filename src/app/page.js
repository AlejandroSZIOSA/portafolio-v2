"use client";

import IntroSection from "@/components/main/IntroSection";
import LatestProjectsSection from "@/components/main/LatestProjectsSection";
import ProjectsSection from "@/components/main/ProjectsSection";
import TechSection from "@/components/main/TechSection";
import DividerHeaderTitle from "@/components/ui/DividerHeaderTitle";
import LogoHeader from "@/components/header/LogoHeader";
import UpdatedDatePanel from "@/components/header/UpdatedDatePanel";
import NavBar from "@/components/header/NavBar";

import Footer from "@/components/footer/Footer";
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
        <IntroSection />
        <DividerHeaderTitle sectionTitle="My Tech Stack" />
        <TechSection />

        <section className="block lg:flex w-full">
          <div className="lg:border-r-2 lg:border-t-2 lg:border-black lg:bg-[#FFE4C4]">
            {isMobile ? (
              <DividerHeaderTitle sectionTitle="Latest App" />
            ) : (
              <div className="lg:h-14 lg:content-center lg:text-center text-[rgb(127,255,0)] bg-black">
                <h2>Latest App</h2>
              </div>
            )}
            <LatestProjectsSection />
          </div>
          <div className="lg:w-full lg:h-[780px]">
            <DividerHeaderTitle
              sectionTitle="Apps Gallery"
              putSectionId="previous_projects_divider"
              variant="top-line"
            />
            <ProjectsSection />
            <div className="h-8 bg-[#FFE4C4] border-black border-b-2 border-dashed lg:hidden"></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
