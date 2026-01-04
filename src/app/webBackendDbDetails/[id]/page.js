import GitHubCodeBtn from "@/components/ui/buttons/GitHubCodeBtn";
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

  const {
    gitHubFrontendLink,
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
        <section className="my-1 lg:flex lg:justify-center lg:my-5">
          <InfoBox title="Sign-Up" description={signUp} />
          <ScreenShotScrollView screenshots={signUpScreenShots} />
        </section>
        <section className="my-1 lg:flex lg:justify-center lg:my-5">
          <InfoBox title="Log-In (with an existing user)" description={logIn} />
          <ScreenShotScrollView screenshots={logInScreenShots} />
        </section>
        <section className="my-1 lg:flex lg:justify-center lg:my-5">
          <InfoBox
            title="Log-In (without an existing user)"
            description={logIn}
          />
          <ScreenShotScrollView screenshots={logInNoUserScreenShots} />
        </section>
        <section className="my-1 lg:flex lg:justify-center lg:my-5">
          <InfoBox title="User" description={user} />
          <ScreenShotScrollView screenshots={userScreenShots} />
        </section>
        <section className="my-1 lg:flex lg:justify-center lg:my-5">
          <InfoBox title="Backend" description={backend} />
          <ScreenShotScrollView screenshots={backendScreenShots} />
        </section>
        {/* w-[-webkit-fill-available] fix problem when scrolling appers and take more horizontal space
         */}{" "}
        <section className="flex flex-col h-auto w-[-webkit-fill-available] bg-white lg:mt-5">
          <h2 className="text-center pt-2 pb-1 lg:py-4">
            <strong>Code</strong>
          </h2>
          <div className="flex flex-row justify-around w-full mx-auto pb-3 lg:pb-10">
            <div className="flex flex-col items-center">
              <h3 className="mb-1">Frontend</h3>
              <GitHubCodeBtn
                gitHubLink={gitHubFrontendLink}
                variant="blue"
              ></GitHubCodeBtn>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="mb-1">Backend</h3>
              <GitHubCodeBtn
                gitHubLink={gitHubFrontendLink}
                variant="blue"
              ></GitHubCodeBtn>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
