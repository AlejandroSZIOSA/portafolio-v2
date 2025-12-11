const TECH_BOXES_STYLES =
  "inline-block min-w-fit bg-gray-200 rounded-full content-center px-3 py-1 text-xs font-semibold text-gray-700 text-center";

export default function InfoScrollArea({ project }) {
  const [mobileUI, desktopUI] = project.responsiveUI; //destructuring assignment
  const [chrome] = project.browsers;
  return (
    <div className="bg-red-200 border px-1 py-3 flex space-x-2 overflow-x-auto scrollbar-hide md:py-2 md:px-2">
      {chrome && <span className={TECH_BOXES_STYLES}>{chrome}</span>}
      {project.deviceBrowserSettings && (
        <span className={TECH_BOXES_STYLES}>
          Dev:{project.deviceBrowserSettings}
        </span>
      )}
      {project.framework && (
        <span className={TECH_BOXES_STYLES}>{project.framework}</span>
      )}
      {project.language && (
        <span className={TECH_BOXES_STYLES}>{project.language}</span>
      )}
      {project.typeScript && (
        <span className={TECH_BOXES_STYLES}>TypeScript</span>
      )}

      {project.navigation && (
        <span className={TECH_BOXES_STYLES}>{project.navigation}</span>
      )}
      {project.context && <span className={TECH_BOXES_STYLES}>Context</span>}
      {project.redux && <span className={TECH_BOXES_STYLES}>Redux</span>}

      {project.crud && (
        <span className={TECH_BOXES_STYLES}>C.R.U.D: {project.crud}</span>
      )}

      {project.localStorage && (
        <span className={TECH_BOXES_STYLES}>Local Storage</span>
      )}

      {project.api && (
        <span className={TECH_BOXES_STYLES}>API:{project.api}</span>
      )}
      {project.tests && (
        <span className={TECH_BOXES_STYLES}>{project.tests}</span>
      )}

      {project.css && <span className={TECH_BOXES_STYLES}>{project.css}</span>}
      {project.cssLibrary && (
        <span className={TECH_BOXES_STYLES}>{project.cssLibrary}</span>
      )}

      {mobileUI && <span className={TECH_BOXES_STYLES}>Mobile UI</span>}
      {desktopUI && <span className={TECH_BOXES_STYLES}>Desktop UI</span>}

      {project.wcag && (
        <span className={TECH_BOXES_STYLES}>Wcag:{project.wcag}</span>
      )}
    </div>
  );
}
