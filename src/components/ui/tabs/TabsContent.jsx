import { useTabs } from "@/hooks/useTabs";

export function TabsContent({ value, children }) {
  const { activeTab } = useTabs();

  if (activeTab !== value) return null;

  return (
    <div className="py-1 border lg:pt-3 lg:pb-0 lg:flex lg:justify-center">
      {children}
    </div>
  );
}
