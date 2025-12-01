"use client";
import { useState } from "react";
import Accordion from "./Accordion";
import { WEB_DATA } from "@/utils/data/web-projects";
import { WEB_APIS_DATA } from "@/utils/data/web-apis-projects";
import ConstructionMessage from "./ConstructionMessage";
import { CONSTANTS } from "@/utils/constants";
import { useMedia } from "use-media";
import TabBtn from "./TabBtn";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");
  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH);

  //Filter and getting the total items based on the current responsive mode
  const getMobileUIwebApps = WEB_DATA.filter(
    (item) => item.responsiveUI[0] && !item.isNew
  );
  const getDesktopUIwebApps = WEB_DATA.filter(
    (item) => item.responsiveUI[1] && !item.isNew
  );

  const getMobileUIwebApis = WEB_APIS_DATA.filter(
    (item) => item.responsiveUI[0] && !item.isNew
  );
  const getDesktopUIwebApis = WEB_APIS_DATA.filter(
    (item) => item.responsiveUI[1] && !item.isNew
  );

  return (
    <div className="w-full max-w-md md:min-w-[90%] mx-auto">
      {/* Tab Buttons */}
      <div className="flex justify-around border-b md:justify-center md:gap-8">
        <TabBtn
          tabId="tab1"
          label="Web apps"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isMobile={isMobile}
          mobileUIApps={getMobileUIwebApps}
          desktopUIApps={getDesktopUIwebApps}
        />

        <TabBtn
          tabId="tab2"
          label="Web + API"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isMobile={isMobile}
          mobileUIApps={getMobileUIwebApis}
          desktopUIApps={getDesktopUIwebApis}
        />

        <TabBtn
          tabId="tab3"
          label="Deployments"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
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
