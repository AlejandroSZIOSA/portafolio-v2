import { useTabs } from "@/hooks/useTabs";

//dynamic classes for active and inactive tabs
const BASE_TAB = "px-2 py-2 hover:cursor-pointer md:px-5 md:py-3";
const ACTIVE_TAB =
  "border-b-2 border-[rgb(242,78,30)] font-semibold md:border-b-4";
const INACTIVE_TAB = "text-gray-500";

// TabsTrigger component
export function TabsTrigger({
  value,
  children,
  showCount = false,
  isMobile,
  mobileUIApps = [],
  desktopUIApps = [],
}) {
  const { activeTab, setActiveTab } = useTabs(); //using Context to get activeTab and setActiveTab
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`${BASE_TAB} ${isActive ? ACTIVE_TAB : INACTIVE_TAB}`}
    >
      <h3>
        {children}
        {showCount && (
          <span>
            <strong>
              (
              {isMobile
                ? "+" + mobileUIApps.length
                : "+" + desktopUIApps.length}
              )
            </strong>
          </span>
        )}
      </h3>
    </button>
  );
}
