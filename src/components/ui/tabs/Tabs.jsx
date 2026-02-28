import { useState } from "react";
import { TabsContext } from "@/hooks/useTabs";
// Root Tabs component
export function Tabs({ children, defaultValue, value, onValueChange }) {
  const [internalValue, setInternalValue] = useState(defaultValue);

  const activeTab = value !== undefined ? value : internalValue;
  const setActiveTab = onValueChange || setInternalValue;

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="w-full max-w-md md:min-w-[90%] mx-auto">{children}</div>
    </TabsContext.Provider>
  );
}
