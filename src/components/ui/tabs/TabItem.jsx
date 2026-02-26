import React from "react";

const BASE_TAB = "px-2 py-2 hover:cursor-pointer md:px-5 md:py-3";
const ACTIVE_TAB =
  "border-b-2 border-[rgb(242,78,30)] font-semibold md:border-b-4";
const INACTIVE_TAB = "text-gray-500";

const TabItem = ({ id, children }) => {
  const { activeTab, setActiveTab } = useTabs();

  const isActive = activeTab === id;

  return (
    <button
      onClick={() => setActiveTab(id)}
      className={`${BASE_TAB} ${isActive ? ACTIVE_TAB : INACTIVE_TAB}`}
    >
      {children}
    </button>
  );
};

export default TabItem;
