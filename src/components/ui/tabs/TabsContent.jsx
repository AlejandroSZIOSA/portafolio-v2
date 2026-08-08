import { useTabs } from "@/hooks/useTabs";

export function TabsContent({ value, children }) {
  const { activeTab } = useTabs();

  if (activeTab !== value) return null;

  return (
    <div className="border lg:border-none lg:flex lg:flex-row lg:pt-3 lg:pb-0 lg:justify-center lg:w-[90%]">
      {children}
    </div>
  );
}
