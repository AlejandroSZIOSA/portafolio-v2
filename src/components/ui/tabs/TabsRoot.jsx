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
          Web
        </TabsTrigger>

        <TabsTrigger
          value="tab2"
          lengthProjects={getDataProjects("allWebApis").length}
        >
          Web+open_API
        </TabsTrigger>

        <TabsTrigger
          value="tab3"
          lengthProjects={getDataProjects("allWebBackendDbProjects").length}
        >
          Web+Backend+DB
        </TabsTrigger>
        <TabsTrigger value="tab4">Full-Stacks_JS</TabsTrigger>
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

      <TabsContent value="tab3">
        <Accordion
          projects={getDataProjects("allWebBackendDbProjects")}
          variationLayout="link-to-details"
        />
      </TabsContent>

      <TabsContent value="tab4">
        <ConstructionMessage />
      </TabsContent>
    </Tabs>
  );
}
