import React from "react";

import { getDataProjects } from "@/utils/helperFunctions";

import LogoHeader from "@/components/header/LogoHeader";
import UpdatedDatePanel from "@/components/header/UpdatedDatePanel";
import NavBar from "@/components/header/NavBar";
import ProjectDetailSection from "@/components/ui/details-page/ProjectDetailSection";
import CodeSectionPanel from "@/components/ui/details-page/CodeSectionPanel";
import Footer from "@/components/footer/Footer";

let variant = ""; //variable to hold the variant value
export default function WebBackendDbDetailsPage({ params, searchParams }) {
  const { id: projectId } = React.use(params); //change the name of an variable after destructuring :)
  const extraParamValue = React.use(searchParams); //extracting extra params :)
  //extracting async extra params
  variant = extraParamValue.extraParam;

  const project = getDataProjects("allProjects").find(
    (item) => item.id.toString() === projectId,
  );

  const { detailsProjectInfo } = project;
  const { signUp, logIn, user, backend, figma } = detailsProjectInfo;

  let content = "";

  if (!project) {
    if (!project) {
      return <h1 className="text-center mt-10">Project not found</h1>;
    }
  }

  if (variant === "frontend+backend+db") {
    content = (
      <>
        {/* TODO:test here */}
        {variant === "frontend+backend+db" && figma && (
          <ProjectDetailSection
            title="Figma Design"
            descriptionData={figma}
            screenshotsData={project.figmaScreenshots}
            variantScreenshotsLayout="figma"
          />
        )}

        <h2>App Running On Development</h2>
        <ProjectDetailSection
          title="Sign-Up"
          descriptionData={signUp}
          screenshotsData={project.signUpScreenShots}
          variantScreenshotsLayout={variant}
        />
        <ProjectDetailSection
          title="Log-In (with an existing user)"
          descriptionData={logIn}
          screenshotsData={project.logInScreenShots}
          variantScreenshotsLayout={variant}
        />
        <ProjectDetailSection
          title="Log-In (without an existing user)"
          descriptionData={logIn}
          screenshotsData={project.logInNoUserScreenShots}
          variantScreenshotsLayout={variant}
        />
        <ProjectDetailSection
          title="User"
          descriptionData={user}
          screenshotsData={project.userScreenShots}
          variantScreenshotsLayout={variant}
        />
        <ProjectDetailSection
          title="Backend"
          descriptionData={backend}
          screenshotsData={project.backendScreenShots}
          variantScreenshotsLayout={variant}
        />
      </>
    );
  }
  if (variant === "only-figma") {
    content = (
      <>
        <ProjectDetailSection
          title="Figma Design"
          descriptionData={figma}
          screenshotsData={project.figmaScreenshots}
          variantScreenshotsLayout="figma"
        />
      </>
    );
  }

  //TODO:continue from here
  if (variant === "only-mockups") {
    content = (
      <>
        <ProjectDetailSection
          title="Mockup Design"
          descriptionData={figma}
          screenshotsData={project.figmaScreenshots}
          variantScreenshotsLayout="figma"
        />
      </>
    );
  }

  return (
    <>
      <header>
        <LogoHeader />
        <UpdatedDatePanel />
        <NavBar variation="details-page" />
      </header>

      <main className="flex flex-col justify-center items-center mx-auto">
        <h1 className="my-4">{project.title}</h1>
        <h2>Screenshots</h2>

        {content}

        {variant === "frontend+backend+db" && (
          <CodeSectionPanel
            variant={variant}
            gitHubFrontendLinkData={project.gitHubFrontendLink}
            gitHubBackendLinkData={project.gitHubBackendLink}
          />
        )}
      </main>
      {variant === "only-figma" && <Footer />}
    </>
  );
}
