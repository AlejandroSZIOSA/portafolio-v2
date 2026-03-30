// TabsList component
export function TabsList({ children }) {
  return (
    <div className="grid grid-cols-2 gap-1 bg-[#FFE4C4] justify-around border-b lg:flex lg:flex-wrap lg:bg-transparent lg:w-[60vw] lg:justify-center lg:py-1 lg:mx-auto">
      {children}
    </div>
  );
}
