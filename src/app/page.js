"use client";

import IntroSection from "@/components/main/IntroSection";
import LatestProjectsSection from "@/components/main/LatestProjectsSection";
import ProjectsSection from "@/components/main/ProjectsSection";
import TechSection from "@/components/main/TechSection";
import DividerHeaderTitle from "@/components/ui/DividerHeaderTitle";
import LogoHeader from "@/components/header/LogoHeader";
import UpdatedDatePanel from "@/components/header/UpdatedDatePanel";
import NavBar from "@/components/header/NavBar";
import me from "../../public/images/me/me-light_b.png";
import Image from "next/image";
import LanguagePanel from "../../src/components/ui/panels/LanguagePanel";

import Footer from "@/components/footer/Footer";
import { useMedia } from "use-media";
import { CONSTANTS } from "@/utils/constants";

import { MESSAGES_DATA } from "@/utils/constants";

export default function Home() {
  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH);
  return (
    <>
      <header>
        <LogoHeader />
        <UpdatedDatePanel />
        <NavBar variation="home-page" />
      </header>

      {isMobile ? (
        <div id="mobileLayout">
          <main className="flex flex-col w-full items-center lg:items-start mx-auto">
            <IntroSection />
            <DividerHeaderTitle
              sectionTitle="My Tech Stack"
              variant="both-lines"
            />
            <TechSection />
            <section className="block lg:flex w-full">
              <div className="lg:border-r-2 lg:border-t-2 lg:border-black lg:bg-[#FFE4C4]">
                {isMobile ? (
                  <DividerHeaderTitle
                    sectionTitle="Latest App"
                    variant="both-lines"
                  />
                ) : (
                  <div className="lg:h-14 lg:content-center lg:text-center text-[#EAEFEF] bg-[#25343F]">
                    <h2>Latest App</h2>
                  </div>
                )}
                <LatestProjectsSection />
              </div>
              <div className="lg:w-full lg:h-content">
                <DividerHeaderTitle
                  sectionTitle="Apps Gallery"
                  putSectionId="previous_projects_divider"
                  variant="top-line"
                />
                <ProjectsSection />
                {/* <div className="h-8 border-black border-b lg:hidden"></div> */}
              </div>
            </section>
          </main>
        </div>
      ) : (
        <div id="desktopLayout" className="flex">
          <aside className="lg:w-[400px] border-r-2 border-black">
            <div>
              <Image
                src={me}
                className="rounded-[15%] lg:w-[400px]"
                height="auto"
                alt="no picture"
                loading="eager" //is like priority in next/image, it forces the image to load as soon as possible, which is good for above-the-fold images like profile pictures.
              />
              <LanguagePanel />
            </div>
            <div>
              <p className="font-mono p-2 text-justify text-base lg:p-4 lg:text-xl">
                {MESSAGES_DATA.meOnMobile.content}
              </p>
            </div>
            <article>
              <h3>{MESSAGES_DATA.myHobbies.title}</h3>
              <p>{MESSAGES_DATA.myHobbies.content}</p>
            </article>
            <article>
              <h3>{MESSAGES_DATA.myWish.title}</h3>
              <p>{MESSAGES_DATA.myWish.content}</p>
            </article>

            <div className="lg:h-14 lg:content-center lg:text-center text-[#EAEFEF] bg-[#25343F]">
              <h2>Latest App</h2>
            </div>
            <LatestProjectsSection />
          </aside>
          <main className="flex flex-col items-center lg:items-start mx-auto lg:w-[100%]">
            <section
              id="intro_section"
              className="lg:flex lg:justify-center lg:h-[30%] lg:w-[100%] lg:items-center"
            >
              <div className="lg:flex lg:items-center lg:justify-center lg:w-full">
                <h1 className="font-mea text-7xl"> Always in Action</h1>
              </div>
            </section>

            <DividerHeaderTitle
              sectionTitle="My Tech Stack"
              variant="both-lines"
            />
            <TechSection />
            <section className="lg:flex lg:w-[100%]">
              <div className="lg:border-r-2 lg:border-t-2 lg:border-black lg:bg-[#FFE4C4]"></div>
              <div className="lg:w-full lg:h-content">
                <DividerHeaderTitle
                  sectionTitle="Apps Gallery"
                  putSectionId="previous_projects_divider"
                  variant="top-line"
                />
                <ProjectsSection />
                {/* <div className="h-8 border-black border-b lg:hidden"></div> */}
              </div>
            </section>
          </main>
        </div>
      )}

      <Footer />
    </>
  );
}
