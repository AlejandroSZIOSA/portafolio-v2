import Link from "next/link";
import React from "react";

const NAV_BOXES =
  " text-lg md:p-1 md:px-3 md:border-2 md:border-[#00D8FF] underline md:no-underline";

export default function NavBar() {
  return (
    <nav className="p-4">
      <div className="flex w-full justify-between">
        <div className={NAV_BOXES}>
          <Link href="/" className="text-[#00D8FF]">
            Intro
          </Link>
        </div>
        <div className={NAV_BOXES}>
          <Link href="#" className="text-[#00D8FF]">
            Tech
          </Link>
        </div>
        <div className={NAV_BOXES}>
          <Link href="#" className="text-[#00D8FF]">
            Latest
          </Link>
        </div>
        <div className={NAV_BOXES}>
          <Link href="#" className="text-[#00D8FF]">
            Projects
          </Link>
        </div>
        <div className={NAV_BOXES}>
          <Link href="#" className="text-[#00D8FF]">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
