"use client";
import { useState } from "react";
import Accordion from "../Accordion";
import ConstructionMessage from "../ConstructionMessage";
import { getDataProjects } from "@/utils/helperFunctions";

//importing multiple imports from index.js in components/ui/tabs folder and exports
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./index";

export default function TabsRoot() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} defaultValue="tab1">
      <TabsList>
        <TabsTrigger
          value="tab1"
          lengthProjects={getDataProjects("allWebProjects").length}
        >
          Web-client
        </TabsTrigger>

        <TabsTrigger
          value="tab2"
          lengthProjects={getDataProjects("allWebApis").length}
        >
          Web+openAPI
        </TabsTrigger>

        <TabsTrigger value="tab3" lengthProjects={0}>
          Web+privateAPI
        </TabsTrigger>

        <TabsTrigger value="tab4" lengthProjects={0}>
          Mobile(hybrid)
        </TabsTrigger>

        <TabsTrigger value="tab5" lengthProjects={0}>
          Desktop
        </TabsTrigger>

        <TabsTrigger
          value="tab6"
          lengthProjects={getDataProjects("allWebBackendDbProjects").length}
        >
          Web+Backend+DB
        </TabsTrigger>

        <TabsTrigger value="tab7" lengthProjects={0}>
          Fullstack_JS
        </TabsTrigger>
      </TabsList>

      <TabsContent value="tab1">
        <Accordion
          projects={getDataProjects("allWebProjects")}
          variationLayout="no-link-to-details"
        />
      </TabsContent>

      <TabsContent value="tab2">
        <Accordion
          projects={getDataProjects("allWebApis")}
          variationLayout="no-link-to-details"
        />
      </TabsContent>

      <TabsContent value="tab6">
        <Accordion
          projects={getDataProjects("allWebBackendDbProjects")}
          variationLayout="link-to-details"
        />
      </TabsContent>

      <TabsContent value="tab3">
        <ConstructionMessage />
      </TabsContent>
      <TabsContent value="tab4">
        <ConstructionMessage />
      </TabsContent>
      <TabsContent value="tab5">
        <ConstructionMessage />
      </TabsContent>

      <TabsContent value="tab7">
        <ConstructionMessage />
      </TabsContent>
    </Tabs>
  );
}
