import React from "react";

const BASE_TAB = "px-2 py-2 hover:cursor-pointer md:px-5 md:py-3";
const ACTIVE_TAB =
  "border-b-2 border-[rgb(242,78,30)] font-semibold md:border-b-4";
const INACTIVE_TAB = "text-gray-500";

export default function TabBtn({
  label,
  tabId,
  activeTab,
  setActiveTab,
  isMobile,
  getMobileUIwebApps,
  getDesktopUIwebApps,
  getMobileUIwebApis,
  getDesktopUIwebApis,
}) {
  return (
    <button
      onClick={() => setActiveTab(tabId)}
      className={`${BASE_TAB} ${activeTab === tabId} ? ACTIVE_TAB : INACTIVE_TAB
      }`}
    >
      <h3>
        {label}
        <span>
          <strong>
            ({isMobile ? getMobileUIwebApps.length : getDesktopUIwebApps.length}
            )
          </strong>
        </span>
      </h3>
    </button>
  );
}
