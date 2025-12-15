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

  const { gitHubFrontendLink, authenticationScreenShots } = project;

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
          <h3 className="text-left"> Login Screen</h3>
          <div className="bg-red-200 border px-1 py-3 overflow-x-auto h-[500px] w-[300px] scrollbar-hide">
            <ol className="flex">
              {authenticationScreenShots.map((url, index) => (
                <li key={index} className="flex-shrink-0 w-64">
                  <ScreenshotShow url={url} />
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className="text-left">
          <h3> Loading Screen</h3>
        </section>
        <section>
          <h3 className="text-left"> User Screen</h3>
        </section>
        <section>
          <h3 className="text-left"> Code</h3>
          <GitHubLinkBtn url={gitHubFrontendLink} />
        </section>
      </main>
    </>
  );
}
