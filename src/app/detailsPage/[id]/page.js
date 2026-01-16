import { WEB_BACKEND_DB_DATA } from "@/utils/data/web-backend-db";

import LogoHeader from "@/components/header/LogoHeader";
import UpdatedDatePanel from "@/components/header/UpdatedDatePanel";
import NavBar from "@/components/header/NavBar";
import ProjectDetailSection from "@/components/ui/details-page/ProjectDetailSection";
import CodeSectionPanel from "@/components/ui/details-page/CodeSectionPanel";

export default function WebBackendDbDetailsPage({ params, searchParams }) {
  const { id: projectId } = params; //change the name of an variable after destructuring :)
  const variant = searchParams.extraParam; //extracting extra params :)

  const project = WEB_BACKEND_DB_DATA.find(
    (item) => item.id.toString() === projectId
  );

  /*   console.log("Extra Param Value:", extraParamValue); */

  const {
    gitHubFrontendLink,
    gitHubBackendLink,
    signUpScreenShots,
    logInScreenShots,
    logInNoUserScreenShots,
    userScreenShots,
    backendScreenShots,
    detailsProjectInfo,
  } = project;
  const { signUp, logIn, user, backend } = detailsProjectInfo;

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

        {variant === "frontend+backend+db" && (
          <>
            <ProjectDetailSection
              title="Sign-Up"
              descriptionData={signUp}
              screenshotsData={signUpScreenShots}
            />

            <ProjectDetailSection
              title="Log-In (with an existing user)"
              descriptionData={logIn}
              screenshotsData={logInScreenShots}
            />

            <ProjectDetailSection
              title="Log-In (without an existing user)"
              descriptionData={logIn}
              screenshotsData={logInNoUserScreenShots}
            />
          </>
        )}

        <ProjectDetailSection
          title="User"
          descriptionData={user}
          screenshotsData={userScreenShots}
        />

        {variant === "frontend+backend+db" && (
          <ProjectDetailSection
            title="Backend"
            descriptionData={backend}
            screenshotsData={backendScreenShots}
          />
        )}

        <CodeSectionPanel
          variant={variant}
          gitHubFrontendLinkData={gitHubFrontendLink}
          gitHubBackendLinkData={gitHubBackendLink}
        />
      </main>
    </>
  );
}
