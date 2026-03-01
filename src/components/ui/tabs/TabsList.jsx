// TabsList component
export function TabsList({ children, className = "" }) {
  return (
    <div
      className={`grid grid-cols-2 gap-1 bg-amber-50 justify-around border-b lg:flex lg:flex-wrap lg:bg-transparent lg:w-[60vw] lg:justify-center lg:gap-8 lg:py-1 lg:mx-auto ${className}`}
    >
      {children}
    </div>
  );
}
