// TabsList component
export function TabsList({ children }) {
  return (
    <div className="grid grid-cols-2 gap-1 pb-4 bg-[#FF9B51] justify-around border-b border-black lg:flex lg:flex-wrap lg:pb-0 lg:justify-center lg:mb-4 lg:mx-auto lg:border-b-0 lg:bg-transparent">
      {children}
    </div>
  );
}
