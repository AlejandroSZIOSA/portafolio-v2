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
          <main className="flex flex-col w-full items-center mx-auto">
            <IntroSection />
            <DividerHeaderTitle
              sectionTitle="My Tech Stack"
              variant="both-lines"
            />
            <TechSection />
            <section className="w-full">
              <div>
                {isMobile ? (
                  <DividerHeaderTitle
                    sectionTitle="Latest App"
                    variant="both-lines"
                  />
                ) : (
                  <div className=" text-[#EAEFEF] bg-[#25343F]">
                    <h2>Latest App</h2>
                  </div>
                )}
                <LatestProjectsSection />
              </div>
              <div>
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
          <aside className="w-[22%] border-r-2 border-black">
            <div className="flex flex-col items-center">
              <Image
                src={me}
                className="rounded-[15%] w-[400px] pt-4"
                height="auto"
                alt="no picture"
                loading="eager" //is like priority in next/image, it forces the image to load as soon as possible, which is good for above-the-fold images like profile pictures.
              />
              <LanguagePanel />
              <div className="w-[90%] mb-4 bg-[#9CB3A5] border-black rounded-xl">
                <p className="font-mono text-justify p-4 text-xl">
                  {MESSAGES_DATA.meOnMobile.content}
                </p>
                <article className="p-4">
                  <h4 className="font-bold">{MESSAGES_DATA.myHobbies.title}</h4>
                  <p className="font-mono text-justify text-xl line-clamp-3">
                    {MESSAGES_DATA.myHobbies.content}
                  </p>
                </article>
                <article className="p-4">
                  <h4 className="font-bold">{MESSAGES_DATA.myWish.title}</h4>
                  <p className="font-mono text-justify text-xl">
                    {MESSAGES_DATA.myWish.content}
                  </p>
                </article>
              </div>
            </div>

            <div className="h-14 content-center text-[#EAEFEF] bg-[#25343F]">
              <h2 className="text-center">Latest App</h2>
            </div>
            <LatestProjectsSection />
          </aside>
          <main className="flex flex-col items-start mx-auto w-[100%]">
            <section
              id="intro_section"
              className="flex justify-center h-[30%] w-[100%] items-center"
            >
              <div className="flex items-center justify-center w-full">
                <h1 className="font-mea text-7xl"> Always in Action</h1>
              </div>
            </section>

            <DividerHeaderTitle
              sectionTitle="My Tech Stack"
              variant="both-lines"
            />
            <TechSection />
            <section className="flex w-[100%]">
              <div className="border-r-2 border-t-2 border-black bg-[#FFE4C4]"></div>
              <div className="w-full h-content">
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
