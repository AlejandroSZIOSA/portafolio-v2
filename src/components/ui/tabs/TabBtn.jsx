import React from "react";

const BASE_TAB = "px-2 py-2 hover:cursor-pointer md:px-5 md:py-3";
const ACTIVE_TAB =
  "border-b-2 border-[rgb(242,78,30)] font-semibold md:border-b-4";
const INACTIVE_TAB = "text-gray-500";

export default function TabBtn({
  tabId,
  label,
  setActiveTab,
  activeTab,
  isMobile,
  mobileUIApps,
  desktopUIApps,
}) {
  return (
    <button
      onClick={() => setActiveTab(tabId)}
      className={`${BASE_TAB} ${
        activeTab === tabId ? ACTIVE_TAB : INACTIVE_TAB
      }`}
    >
      <h3>
        {label}
        {tabId != "tab3" && tabId != "tab4" && (
          <span>
            <strong>
              ({isMobile ? mobileUIApps.length : desktopUIApps.length})
            </strong>
          </span>
        )}
      </h3>
    </button>
  );
}
