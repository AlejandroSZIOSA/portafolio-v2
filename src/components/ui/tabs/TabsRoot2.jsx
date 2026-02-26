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
import { useTabs } from "@/components/hooks/useTabs";

import { TabsContext } from "@/components/hooks/useTabs";

import TabItem from "./TabItem";

export default function TabsRoot2({ defaultActiveTab, children }) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const isMobile = useMedia(CONSTANTS.USE_MEDIA_MAX_WIDTH); //Hook from useMedia library
  /* const { activeTab, setActiveTab } = useTabs(); */

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, isMobile }}>
      {children}
    </TabsContext.Provider>
  );
}
TabsRoot2.Item = TabItem;
