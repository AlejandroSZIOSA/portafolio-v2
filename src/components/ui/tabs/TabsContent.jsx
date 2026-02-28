import { useTabs } from "@/hooks/useTabs";

export function TabsContent({ value, children }) {
  const { activeTab } = useTabs();

  if (activeTab !== value) return null;

  return (
    <div className="py-1 border md:py-3 md:flex md:justify-center">
      {children}
    </div>
  );
}
