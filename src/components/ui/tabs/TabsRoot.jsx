"use client";
import { useState } from "react";
import Accordion from "../Accordion";
import { WEB_DATA } from "@/utils/data/web-projects";
import { WEB_APIS_DATA } from "@/utils/data/web-apis-projects";
import { WEB_BACKEND_DB_DATA } from "@/utils/data/web-backend-db";
import ConstructionMessage from "../ConstructionMessage";
import { CONSTANTS } from "@/utils/constants";
import { useMedia } from "use-media";
import TabBtn from "./TabBtn";

export default function TabsRoot() {
  const [activeTab, setActiveTab] = useState("tab1");
  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH); //Hook from useMedia library

  //Filter and getting the total items based on the current responsive production result
  const getMobileUIwebApps = WEB_DATA.filter(
    (item) => item.responsiveUI[0] && !item.isNew,
  );
  const getDesktopUIwebApps = WEB_DATA.filter(
    (item) => item.responsiveUI[1] && !item.isNew,
  );

  const getMobileUIwebApis = WEB_APIS_DATA.filter(
    (item) => item.responsiveUI[0] && !item.isNew,
  );
  const getDesktopUIwebApis = WEB_APIS_DATA.filter(
    (item) => item.responsiveUI[1] && !item.isNew,
  );

  //exception for responsive UI
  const getWebBackendDbProjects = WEB_BACKEND_DB_DATA.filter(
    (item) => !item.isNew,
  );

  {
    /* CONTINUE FROM HERE */
  }

  return (
    <div className="w-full max-w-md md:min-w-[90%] mx-auto">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-1 bg-amber-50 justify-around border-b md:bg-transparent  md:w-[60vw] md:justify-center md:gap-8 md:py-1 md:mx-auto">
        <TabBtn
          tabId="tab1"
          label="Web"
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          isMobile={isMobile}
          mobileUIApps={getMobileUIwebApps}
          desktopUIApps={getDesktopUIwebApps}
        />

        <TabBtn
          tabId="tab2"
          label="Web+open_API"
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          isMobile={isMobile}
          mobileUIApps={getMobileUIwebApis}
          desktopUIApps={getDesktopUIwebApis}
        />

        <TabBtn
          tabId="tab3"
          label="Web+Backend+DB"
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          isMobile={isMobile}
          mobileUIApps={getWebBackendDbProjects}
          desktopUIApps={getWebBackendDbProjects}
        />
        <TabBtn
          tabId="tab4"
          label="Fullstack"
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
      </div>
      {/* Tab Content */}
      <div className="py-1 border md:py-3 md:flex md:justify-center ">
        {activeTab === "tab1" && (
          <Accordion projects={WEB_DATA} variationLayout="no-link-to-details" />
        )}
        {activeTab === "tab2" && (
          <Accordion
            projects={WEB_APIS_DATA}
            variationLayout="no-link-to-details"
          />
        )}
        {activeTab === "tab3" && (
          <Accordion
            projects={WEB_BACKEND_DB_DATA}
            variationLayout="link-to-details"
          />
        )}
        {activeTab === "tab4" && <ConstructionMessage />}
      </div>
    </div>
  );
}
