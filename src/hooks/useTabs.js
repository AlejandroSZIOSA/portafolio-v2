"use client";
import React, { createContext, useContext, useState } from "react";

// Create context for tabs
export const TabsContext = createContext(null);

// Hook to use tabs context
export function useTabs() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within Tabs");
  }
  return context;
}
