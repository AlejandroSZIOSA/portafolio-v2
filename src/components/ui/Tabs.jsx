"use client";
import { useState } from "react";
import Accordion from "./Accordion";
import { WEB_DATA } from "@/utils/data/web-projects";
import { WEB_APIS_DATA } from "@/utils/data/web-apis-projects";
import ConstructionMessage from "./ConstructionMessage";
import { CONSTANTS } from "@/utils/constants";
import { useMedia } from "use-media";

//Reusable Tailwind CSS classes
const BASE_TAB = "px-2 py-2 hover:cursor-pointer md:px-5 md:py-3";
const ACTIVE_TAB =
  "border-b-2 border-[rgb(242,78,30)] font-semibold md:border-b-4";
const INACTIVE_TAB = "text-gray-500";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");
  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH);

  //Filter and getting the total items based on the current responsive mode
  const getMobileUIwebApps = WEB_DATA.filter(
    (item) => item.mobileUI && !item.isNew
  );
  const getDesktopUIwebApps = WEB_DATA.filter(
    (item) => item.desktopUI && !item.isNew
  );

  const getMobileUIwebApis = WEB_APIS_DATA.filter(
    (item) => item.mobileUI && !item.isNew
  );
  const getDesktopUIwebApis = WEB_APIS_DATA.filter(
    (item) => item.desktopUI && !item.isNew
  );

  return (
    <div className="w-full max-w-md md:min-w-[90%] mx-auto">
      {/* Tab Buttons */}
      <div className="flex justify-around border-b md:justify-center md:gap-8">
        <button
          onClick={() => setActiveTab("tab1")}
          // Using Dynamic values inside tailwind clases :)
          className={`${BASE_TAB} ${
            activeTab === "tab1" ? ACTIVE_TAB : INACTIVE_TAB
          }`}
        >
          <h3>
            Web apps
            <span>
              (
              {isMobile
                ? getMobileUIwebApps.length
                : getDesktopUIwebApps.length}
              )
            </span>
          </h3>
        </button>
        <button
          onClick={() => setActiveTab("tab2")}
          disabled={false} /* Enable this value to enable this tab */
          className={`${BASE_TAB} ${
            activeTab === "tab2" ? ACTIVE_TAB : INACTIVE_TAB
          }`}
        >
          <h3>
            Web+APIs
            <span>
              (
              {isMobile
                ? getMobileUIwebApis.length
                : getDesktopUIwebApis.length}
              )
            </span>
          </h3>
        </button>
        <button
          onClick={() => setActiveTab("tab3")}
          disabled={false} /* Enable this value to enable this tab */
          className={`${BASE_TAB} ${
            activeTab === "tab3" ? ACTIVE_TAB : INACTIVE_TAB
          }`}
        >
          <h3>Web+Backend</h3>
        </button>
      </div>
      {/* Tab Content */}
      <div className="px-1 pt-4 pb-6 border md:py-3 md:flex md:justify-center ">
        {activeTab === "tab1" && <Accordion projects={WEB_DATA} />}
        {activeTab === "tab2" && <Accordion projects={WEB_APIS_DATA} />}
        {activeTab === "tab3" && <ConstructionMessage />}
      </div>
    </div>
  );
}
