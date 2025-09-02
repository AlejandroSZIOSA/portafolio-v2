"use client";
import { useState } from "react";
import Accordion from "../accordion/toggleAccordion";
import { WEB_DATA_PROJECTS } from "@/utils/data/web-projects";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      {/* Tab Buttons */}
      <div className="flex justify-center border-b">
        <button
          onClick={() => setActiveTab("tab1")}
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
          Mobile-Apps
        </button>
      </div>
      {/* Tab Content */}
      <div className="px-2 py-2 border">
        {activeTab === "tab1" && <Accordion projects={WEB_DATA_PROJECTS} />}
        {activeTab === "tab2" && <p>Nothing yet.</p>}
      </div>
    </div>
  );
}
