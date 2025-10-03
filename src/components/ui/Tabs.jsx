"use client";
import { useState } from "react";
import Accordion from "./Accordion";
import { WEB_APPS_DATA } from "@/utils/data/web-projects";
import ConstructionMessage from "./ConstructionMessage";

const ACTIVE_TAB_STYLE =
  "border-b-2 border-[rgb(242,78,30)] font-semibold md:border-b-4";
const INACTIVE_TAB_STYLE = "text-gray-500";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="w-full max-w-md md:min-w-[90%] mx-auto">
      {/* Tab Buttons */}
      <div className="flex justify-center border-b">
        <button
          onClick={() => setActiveTab("tab1")}
          // Using Dynamic values inside tailwind clases :)
          className={`px-4 py-2 ${
            activeTab === "tab1" ? ACTIVE_TAB_STYLE : INACTIVE_TAB_STYLE
          }`}
        >
          Web-Apps
        </button>
        <button
          onClick={() => setActiveTab("tab2")}
          disabled={false} /* Enable this value to enable this tab */
          className={`px-4 py-2 ${
            activeTab === "tab2" ? ACTIVE_TAB_STYLE : INACTIVE_TAB_STYLE
          }`}
        >
          Web+Async Apps
        </button>
        <button
          onClick={() => setActiveTab("tab3")}
          disabled={false} /* Enable this value to enable this tab */
          className={`px-4 py-2 ${
            activeTab === "tab3" ? ACTIVE_TAB_STYLE : INACTIVE_TAB_STYLE
          }`}
        >
          Mobile-Apps
        </button>
      </div>
      {/* Tab Content */}
      <div className=" px-2 pt-4 pb-6 border md:py-3 md:flex md:justify-center ">
        {activeTab === "tab1" && <Accordion projects={WEB_APPS_DATA} />}
        {activeTab === "tab2" && <ConstructionMessage />}
        {activeTab === "tab3" && <ConstructionMessage />}
      </div>
    </div>
  );
}
