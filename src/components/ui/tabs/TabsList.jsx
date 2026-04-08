// TabsList component
export function TabsList({ children }) {
  return (
    <div className="grid grid-cols-2 gap-1 pb-4 bg-[#FFE4C4] justify-around border-b border-black lg:flex lg:flex-wrap lg:bg-transparent lg:w-[60vw] lg:justify-center lg:py-1 lg:mx-auto lg:border-b-0">
      {children}
    </div>
  );
}
