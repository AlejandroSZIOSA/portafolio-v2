"use client";
import { useState } from "react";
import Accordion from "./Accordion";
import { WEB_APPS_DATA } from "@/utils/data/web-projects";

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
            activeTab === "tab1"
              ? "border-b-2 border-blue-500 font-semibold"
              : "text-gray-500"
          }`}
        >
          Web-Apps
        </button>
        <button
          onClick={() => setActiveTab("tab2")}
          disabled={true} /* Enable this value to enable this tab */
          className={`px-4 py-2 ${
            activeTab === "tab2"
              ? "border-b-2 border-blue-500 font-semibold"
              : "text-gray-500"
          }`}
        >
          Web+Async Apps
        </button>
      </div>
      {/* Tab Content */}
      <div className="md:flex md:justify-center px-2 py-4 border">
        {activeTab === "tab1" && <Accordion projects={WEB_APPS_DATA} />}
        {activeTab === "tab2" && <p>Nothing yet.</p>}
      </div>
    </div>
  );
}
