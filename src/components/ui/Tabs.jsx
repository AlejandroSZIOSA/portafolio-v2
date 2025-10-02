"use client";
import { useState } from "react";
import Accordion from "./Accordion";
import { WEB_APPS_DATA } from "@/utils/data/web-projects";
import ConstructionMessage from "./ConstructionMessage";

const activeTabStyle =
  "border-b-2 border-[rgb(242,78,30)] font-semibold md:border-b-4";
const inactiveTabStyle = "text-gray-500";

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
            activeTab === "tab1" ? activeTabStyle : inactiveTabStyle
          }`}
        >
          Web-Apps
        </button>
        <button
          onClick={() => setActiveTab("tab2")}
          disabled={false} /* Enable this value to enable this tab */
          className={`px-4 py-2 ${
            activeTab === "tab2" ? activeTabStyle : inactiveTabStyle
          }`}
        >
          Web+Async Apps
        </button>
        <button
          onClick={() => setActiveTab("tab3")}
          disabled={false} /* Enable this value to enable this tab */
          className={`px-4 py-2 ${
            activeTab === "tab3" ? activeTabStyle : inactiveTabStyle
          }`}
        >
          Mobile-Apps
        </button>
      </div>
      {/* Tab Content */}
      <div className="md:flex md:justify-center px-2 py-4 md:py-3 border">
        {activeTab === "tab1" && <Accordion projects={WEB_APPS_DATA} />}
        {activeTab === "tab2" && <ConstructionMessage />}
        {activeTab === "tab3" && <ConstructionMessage />}
      </div>
    </div>
  );
}
