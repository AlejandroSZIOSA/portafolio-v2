const TECH_BOXES_STYLES =
  "inline-block min-w-fit bg-gray-200 rounded-full content-center px-3 py-1 text-xs font-semibold text-gray-700 text-center";

export default function InfoScrollArea({ project }) {
  const {
    deviceBrowserSettings,
    framework,
    language,
    typeScript,
    navigation,
    context,
    redux,
    crud,
    localStorage,
    api,
    tests,
    css,
    cssLibrary,
    wcag,
  } = project;
  const [mobileUI, desktopUI] = project.responsiveUI; //destructuring assignment
  const [chrome] = project.browsers;

  return (
    <div className="bg-red-200 border px-1 py-3 flex space-x-2 overflow-x-auto scrollbar-hide md:py-2 md:px-2">
      {chrome && <span className={TECH_BOXES_STYLES}>{chrome}</span>}
      {deviceBrowserSettings && (
        <span className={TECH_BOXES_STYLES}>Dev:{deviceBrowserSettings}</span>
      )}
      {framework && <span className={TECH_BOXES_STYLES}>{framework}</span>}
      {language && <span className={TECH_BOXES_STYLES}>{language}</span>}
      {typeScript && <span className={TECH_BOXES_STYLES}>TypeScript</span>}

      {navigation && (
        <span className={TECH_BOXES_STYLES}>{navigation && "Navigation"}</span>
      )}

      {context && <span className={TECH_BOXES_STYLES}>Context</span>}
      {redux && <span className={TECH_BOXES_STYLES}>Redux</span>}

      {crud && <span className={TECH_BOXES_STYLES}>C.R.U.D: {crud}</span>}

      {localStorage && <span className={TECH_BOXES_STYLES}>Local Storage</span>}

      {api && <span className={TECH_BOXES_STYLES}>API:{api}</span>}
      {tests && <span className={TECH_BOXES_STYLES}>{tests}</span>}

      {css && <span className={TECH_BOXES_STYLES}>{css}</span>}
      {cssLibrary && <span className={TECH_BOXES_STYLES}>{cssLibrary}</span>}

      {mobileUI && <span className={TECH_BOXES_STYLES}>Mobile UI</span>}
      {desktopUI && <span className={TECH_BOXES_STYLES}>Desktop UI</span>}

      {wcag && <span className={TECH_BOXES_STYLES}>Wcag:{wcag}</span>}
    </div>
  );
}
