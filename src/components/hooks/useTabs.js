import React, { createContext, useContext, useState } from "react";

// Create Context
const TabsContext = createContext(null);

// Custom Hook
function useTabs() {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("Tab components must be used inside <TabsRoot>");
  }

  return context;
}

export { TabsContext, useTabs };
