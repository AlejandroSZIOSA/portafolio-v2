// TabsList component
export function TabsList({ children }) {
  return (
    <div className="grid grid-cols-2 gap-1 pb-4 bg-[#FFE4C4] justify-around border-b border-black lg:flex lg:flex-flex lg:w-max lg:pb-0 lg:justify-center lg:my-1 lg:mx-auto lg:border-b-0 lg:bg-transparent">
      {children}
    </div>
  );
}
