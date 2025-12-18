import GitHubLinkBtn from "@/components/ui/buttons/ToGitCodeBtn";
import { WEB_BACKEND_DB_DATA } from "@/utils/data/web-backend-db";

import LogoHeader from "@/components/header/LogoHeader";
import UpdatedDatePanel from "@/components/header/UpdatedDatePanel";
import NavBar from "@/components/header/NavBar";
import InfoBox from "@/components/ui/details-page/InfoBox";
import ScreenShotScrollView from "@/components/ui/details-page/ScreenShotScrollView";

export default function WebBackendDbDetailsPage({ params }) {
  const project = WEB_BACKEND_DB_DATA.find(
    (item) => item.id.toString() === params.id
  );

  const { gitHubFrontendLink, authenticationScreenShots, detailsProjectInfo } =
    project;
  const { signUp, logIn, user, backend } = detailsProjectInfo;

  return (
    <>
      <header>
        <LogoHeader />
        <UpdatedDatePanel />
        <NavBar variation="details-page" />
      </header>
      <main className="flex flex-col justify-center items-center mx-auto">
        <h1>{project.title}</h1>
        <h2>Screenshots</h2>
        <section className="my-2">
          <InfoBox title="Sign-Up" description={signUp} />
          <ScreenShotScrollView screenshots={authenticationScreenShots} />
        </section>
        <section className="my-2">
          <InfoBox title="Log-In" description={logIn} />
          <ScreenShotScrollView screenshots={authenticationScreenShots} />
        </section>
        <section className="my-2">
          <InfoBox title="User" description={user} />
          <ScreenShotScrollView screenshots={authenticationScreenShots} />
        </section>
        <section className="my-2">
          <InfoBox title="Backend" description={backend} />
          <ScreenShotScrollView screenshots={authenticationScreenShots} />
        </section>
        {/* w-screen fix problem
         */}{" "}
        <section className="flex flex-col h-auto w-screen bg-white">
          <h2 className="text-center py-3">
            <strong>Code</strong>
          </h2>
          <div className="flex flex-row justify-around w-full mx-auto">
            <div className="flex flex-col items-center">
              <p>Frontend</p>
              <GitHubLinkBtn gitHubLink={gitHubFrontendLink}></GitHubLinkBtn>
            </div>
            <div className="flex flex-col items-center">
              <p>Backend</p>
              <GitHubLinkBtn gitHubLink={gitHubFrontendLink}></GitHubLinkBtn>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
