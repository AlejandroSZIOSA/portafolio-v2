import React from "react";

import { getDataProjects } from "@/utils/helperFunctions";
import ProjectDetailSection from "@/components/ui/details-page/ProjectDetailSection";
import LogoHeader from "@/components/header/LogoHeader";
import UpdatedDatePanel from "@/components/header/UpdatedDatePanel";
import NavBar from "@/components/header/NavBar";

const onlyBackendInfoPage = ({ params }) => {
  const { id } = React.use(params); //change the name of an variable after destructuring :)

  const project = getDataProjects("allWebBackendDbProjects").find(
    (item) => item.id.toString() === id,
  );

  const { backendInfo, version, cms } = project;

  const {
    title,
    description,
    screenShots: screenShotsData,
    extra,
  } = backendInfo;
  const {
    title: titleExtra,
    description: descriptionExtra,
    screenShots: screenShotsExtraData,
  } = extra;

  return (
    <>
      <header>
        <LogoHeader />
        <UpdatedDatePanel />
        <NavBar variation="details-page" />
      </header>

      <main className="flex flex-col justify-center items-center mx-auto">
        <h1 className="my-4">
          {project.title} v{version}
        </h1>
        <h2>{cms} Dashboard</h2>

        <ProjectDetailSection
          title={title}
          descriptionData={description}
          screenshotsData={screenShotsData}
          variantScreenshotsLayout="figma"
        />

        <ProjectDetailSection
          title={titleExtra}
          descriptionData={descriptionExtra}
          screenshotsData={screenShotsExtraData}
          variantScreenshotsLayout="figma"
        />
      </main>
    </>
  );
};

export default onlyBackendInfoPage;
