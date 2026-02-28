"use client";
import { useState } from "react";
import Accordion from "../Accordion";
import ConstructionMessage from "../ConstructionMessage";
import { CONSTANTS } from "@/utils/constants";
import { useMedia } from "use-media";
import { getDataProjects } from "@/utils/helperFunctions";

//importing multiple imports from index.js in components/ui/tabs folder and exports
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./index";

export default function TabsRoot() {
  const [activeTab, setActiveTab] = useState("tab1");
  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH);

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} defaultValue="tab1">
      <TabsList>
        <TabsTrigger
          value="tab1"
          showCount={true}
          isMobile={isMobile}
          mobileUIApps={getDataProjects("mobileUIwebApps")}
          desktopUIApps={getDataProjects("desktopUIwebApps")}
        >
          Web
        </TabsTrigger>

        <TabsTrigger
          value="tab2"
          showCount={true}
          isMobile={isMobile}
          mobileUIApps={getDataProjects("mobileUIwebApis")}
          desktopUIApps={getDataProjects("desktopUIwebApis")}
        >
          Web+open_API
        </TabsTrigger>

        <TabsTrigger
          value="tab3"
          showCount={true}
          isMobile={isMobile}
          mobileUIApps={getDataProjects("webBackendDbProjects")}
          desktopUIApps={getDataProjects("webBackendDbProjects")}
        >
          Web+Backend+DB
        </TabsTrigger>
        <TabsTrigger value="tab4">Full-Stack_TS</TabsTrigger>
      </TabsList>

      <TabsContent value="tab1">
        <Accordion
          projects={getDataProjects("mobileUIwebApps")}
          variationLayout="no-link-to-details"
        />
      </TabsContent>

      <TabsContent value="tab2">
        <Accordion
          projects={getDataProjects("mobileUIwebApis")}
          variationLayout="no-link-to-details"
        />
      </TabsContent>

      <TabsContent value="tab3">
        <Accordion
          projects={getDataProjects("webBackendDbProjects")}
          variationLayout="link-to-details"
        />
      </TabsContent>

      <TabsContent value="tab4">
        <ConstructionMessage />
      </TabsContent>
    </Tabs>
  );
}
