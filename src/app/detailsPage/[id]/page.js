import React from "react";
import { WEB_BACKEND_DB_DATA } from "@/utils/data/web-backend-db";

import { getDataProjects } from "@/utils/helperFunctions";

import LogoHeader from "@/components/header/LogoHeader";
import UpdatedDatePanel from "@/components/header/UpdatedDatePanel";
import NavBar from "@/components/header/NavBar";
import ProjectDetailSection from "@/components/ui/details-page/ProjectDetailSection";
import CodeSectionPanel from "@/components/ui/details-page/CodeSectionPanel";
import FigmaDetailSection from "@/components/ui/details-page/FigmaDetailSection";

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
        <ProjectDetailSection
          title="Sign-Up"
          descriptionData={signUp}
          screenshotsData={project.signUpScreenShots}
        />
        <ProjectDetailSection
          title="Log-In (with an existing user)"
          descriptionData={logIn}
          screenshotsData={project.logInScreenShots}
        />
        <ProjectDetailSection
          title="Log-In (without an existing user)"
          descriptionData={logIn}
          screenshotsData={project.logInNoUserScreenShots}
        />
        <ProjectDetailSection
          title="User"
          descriptionData={user}
          screenshotsData={project.userScreenShots}
        />
        <ProjectDetailSection
          title="Backend"
          descriptionData={backend}
          screenshotsData={project.backendScreenShots}
        />
      </>
    );
  }
  if (variant === "only-figma") {
    content = (
      <>
        {/*   <FigmaDetailSection>Mobile Design</FigmaDetailSection> */}
        <ProjectDetailSection
          title="Figma Design"
          descriptionData={figma}
          screenshotsData={project.figmaScreenshots}
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
    </>
  );
}
