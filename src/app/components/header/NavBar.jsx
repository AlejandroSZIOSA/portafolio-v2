import React from "react";

const NAV_ITEM_BOXES = "py-1 underline";

export default function NavBar() {
  return (
    <nav className="p-2">
      <ul className="flex justify-around text-2xl list-none">
        <li className={NAV_ITEM_BOXES}>
          <a href="#" className="text-[#00D8FF]">
            Start
          </a>
        </li>

        <li className={NAV_ITEM_BOXES}>
          <a href="#" className="text-[#00D8FF]">
            Tech Stack
          </a>
        </li>
        <li className={NAV_ITEM_BOXES}>
          <a href="#" className="text-[#00D8FF]">
            Contact
          </a>
        </li>
      </ul>
      <ul className="flex justify-around text-2xl mt-2 list-none">
        <li className={NAV_ITEM_BOXES}>
          <a href="#" className="text-[#00D8FF] ml-3">
            Latest
          </a>
        </li>
        <li className={NAV_ITEM_BOXES}>
          <a href="#" className="text-[#00D8FF] ml-3">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}
