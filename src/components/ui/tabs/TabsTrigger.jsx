import { useTabs } from "@/hooks/useTabs";

//dynamic classes for active and inactive tabs
const BASE_TAB = "p-1 hover:cursor-pointer lg:px-5 lg:py-2";
const ACTIVE_TAB =
  "border-4 border-black lg:border-[rgb(242,78,30)] lg:border-t-0 lg:border-l-0 lg:border-r-0 font-semibold";
const INACTIVE_TAB = "text-gray-500";

// TabsTrigger component
export function TabsTrigger({ value, children, lengthProjects = [] }) {
  const { activeTab, setActiveTab } = useTabs(); //using Context to get activeTab and setActiveTab
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`${BASE_TAB} ${isActive ? ACTIVE_TAB : INACTIVE_TAB}`}
    >
      <h3>
        {children}
        <span>
          <strong>{`(+${lengthProjects})`}</strong>
        </span>
      </h3>
    </button>
  );
}
