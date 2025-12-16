import GitHubLinkBtn from "@/components/ui/GitHubLinkBtn";
import { WEB_BACKEND_DB_DATA } from "@/utils/data/web-backend-db";

import LogoHeader from "@/components/header/LogoHeader";
import UpdatedDatePanel from "@/components/header/UpdatedDatePanel";
import NavBar from "@/components/header/NavBar";
import InfoBox from "@/components/ui/detail-page/InfoBox";
import ScreenShotScrollView from "@/components/ui/detail-page/ScreenShotScrollView";

export default function WebBackendDbDetailsPage({ params }) {
  const project = WEB_BACKEND_DB_DATA.find(
    (item) => item.id.toString() === params.id
  );

  const { gitHubFrontendLink, authenticationScreenShots, detailsProjectInfo } =
    project;
  const { signUp } = detailsProjectInfo;

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
        <section>
          <InfoBox title="Sign-Up" description={signUp} />
          <ScreenShotScrollView screenshots={authenticationScreenShots} />
        </section>
        <section className="text-left">
          <h3> Log-In</h3>
        </section>
        <section>
          <h3 className="text-left"> User</h3>
        </section>
        <section>
          <h3 className="text-left"> Code</h3>
          <GitHubLinkBtn url={gitHubFrontendLink} />
        </section>
      </main>
    </>
  );
}
