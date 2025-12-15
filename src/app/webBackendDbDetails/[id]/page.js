import GitHubLinkBtn from "@/components/ui/GitHubLinkBtn";
import ScreenshotShow from "@/components/ui/ScreenshotShow";
import { WEB_BACKEND_DB_DATA } from "@/utils/data/web-backend-db";

import LogoHeader from "@/components/header/LogoHeader";
import UpdatedDatePanel from "@/components/header/UpdatedDatePanel";
import NavBar from "@/components/header/NavBar";

export default function WebBackendDbDetailsPage({ params }) {
  const project = WEB_BACKEND_DB_DATA.find(
    (item) => item.id.toString() === params.id
  );

  const {
    responsiveUI,
    gitHubFrontendLink,
    gitHubBackendLink,
    authenticationScreenShots,
  } = project;

  return (
    <>
      <header>
        <LogoHeader />
        <UpdatedDatePanel />
        <NavBar variation="detail-page" />
      </header>

      <main>
        <h1>Details for {project.title}</h1>
        <h2>Screenshots</h2>
        <section>
          <h3> Login Screen</h3>

          <ol>
            {authenticationScreenShots.map((url, index) => (
              <li key={index}>
                <ScreenshotShow url={url} />
              </li>
            ))}
          </ol>

          {/*
           */}
        </section>
        <section>
          <h3> Loading Screen</h3>
        </section>
        <section>
          <h3> User Screen</h3>
        </section>
        <section>
          <h3> Code</h3>
          <GitHubLinkBtn url={gitHubFrontendLink} />
        </section>
      </main>
    </>
  );
}
