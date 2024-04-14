import Link from "next/link";
import React from "react";

const NAV_ITEM_BOXES = "py-1 underline";

export default function NavBar() {
  return (
    <nav className="p-2">
      <ul className="flex justify-around text-2xl list-none">
        <li className={NAV_ITEM_BOXES}>
          <Link href="/" className="text-[#00D8FF]">
            Start
          </Link>
        </li>

        <li className={NAV_ITEM_BOXES}>
          <Link href="#" className="text-[#00D8FF]">
            Tech Stack
          </Link>
        </li>
        <li className={NAV_ITEM_BOXES}>
          <Link href="#" className="text-[#00D8FF]">
            Contact
          </Link>
        </li>
      </ul>
      <ul className="flex justify-around text-2xl mt-2 list-none">
        <li className={NAV_ITEM_BOXES}>
          <Link href="#" className="text-[#00D8FF] ml-3">
            Latest
          </Link>
        </li>
        <li className={NAV_ITEM_BOXES}>
          <Link href="#" className="text-[#00D8FF] ml-3">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}
