import Link from "next/link";

const NAV_BOXES =
  " text-lg md:p-1 md:px-3 md:border-2 md:border-[#00FFEA] underline md:no-underline";
const LINK_CONTENT = "text-[#00FFEA]";

export default function NavBar({ variation }) {
  let content = null;

  if (variation === "home-page") {
    content = (
      <div className="flex w-full justify-between">
        <div className={NAV_BOXES}>
          <Link href="#body_" className={LINK_CONTENT}>
            Intro
          </Link>
        </div>
        <div className={NAV_BOXES}>
          <Link href="#techs_container" className={LINK_CONTENT}>
            Techs
          </Link>
        </div>
        <div className={NAV_BOXES}>
          <Link href="#latest_container" className={LINK_CONTENT}>
            Latest
          </Link>
        </div>
        <div className={NAV_BOXES}>
          <Link href="#previous_projects_divider" className={LINK_CONTENT}>
            Apps
          </Link>
        </div>
        <div className={NAV_BOXES}>
          <Link href="#contact_linkedin_img" className={LINK_CONTENT}>
            Contact
          </Link>
        </div>
      </div>
    );
  } else if (variation === "details-page") {
    content = (
      <div className="flex w-full justify-center">
        <div className={NAV_BOXES}>
          <Link href="/" className="text-[#00D8FF]">
            Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <nav
      /*   className={`p-${
        variation === "home-page" ? "3" : "2"
      } md:p-0 md:mr-4 md:content-center`} */
      className="p-2 md:p-0 md:mr-4 md:content-center"
    >
      {content}
    </nav>
  );
}
