"use client";
import { useState } from "react";
import Accordion from "../../Accordion";
import { WEB_DATA } from "@/utils/data/web-projects";
import { WEB_APIS_DATA } from "@/utils/data/web-apis-projects";
import { WEB_BACKEND_DB_DATA } from "@/utils/data/web-backend-db";
import ConstructionMessage from "../../ConstructionMessage";
import { CONSTANTS } from "@/utils/constants";
import { useMedia } from "use-media";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./index";

export default function TabsRoot2() {
  const [activeTab, setActiveTab] = useState("tab1");
  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH);

  // Filter and getting the total items based on the current responsive production result
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

  // exception for responsive UI
  const getWebBackendDbProjects = WEB_BACKEND_DB_DATA.filter(
    (item) => !item.isNew,
  );

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} defaultValue="tab1">
      <TabsList>
        <TabsTrigger
          value="tab1"
          showCount={true}
          isMobile={isMobile}
          mobileUIApps={getMobileUIwebApps}
          desktopUIApps={getDesktopUIwebApps}
        >
          Web
        </TabsTrigger>

        <TabsTrigger
          value="tab2"
          showCount={true}
          isMobile={isMobile}
          mobileUIApps={getMobileUIwebApis}
          desktopUIApps={getDesktopUIwebApis}
        >
          Web+open_API
        </TabsTrigger>

        <TabsTrigger
          value="tab3"
          showCount={true}
          isMobile={isMobile}
          mobileUIApps={getWebBackendDbProjects}
          desktopUIApps={getWebBackendDbProjects}
        >
          Web+Backend+DB
        </TabsTrigger>

        <TabsTrigger value="tab4">Full-Stacks_JS</TabsTrigger>
      </TabsList>

      <TabsContent value="tab1">
        <Accordion projects={WEB_DATA} variationLayout="no-link-to-details" />
      </TabsContent>

      <TabsContent value="tab2">
        <Accordion
          projects={WEB_APIS_DATA}
          variationLayout="no-link-to-details"
        />
      </TabsContent>

      <TabsContent value="tab3">
        <Accordion
          projects={WEB_BACKEND_DB_DATA}
          variationLayout="link-to-details"
        />
      </TabsContent>

      <TabsContent value="tab4">
        <ConstructionMessage />
      </TabsContent>
    </Tabs>
  );
}
