import React from "react";

//Reusable Tailwind styles
/* w-[83px] h-9 */

const navItemBoxes = "py-1 underline";

export default function NavBar() {
  return (
    <nav className="p-4">
      <ul className="flex justify-around text-2xl list-none">
        <li className={navItemBoxes}>
          <a href="#" className="text-[#00D8FF]">
            Start
          </a>
        </li>

        <li className={navItemBoxes}>
          <a href="#" className="text-[#00D8FF]">
            Tech Stack
          </a>
        </li>
        <li className={navItemBoxes}>
          <a href="#" className="text-[#00D8FF]">
            Contact
          </a>
        </li>
      </ul>
      <ul className="flex justify-around text-2xl mt-2 list-none">
        <li className={navItemBoxes}>
          <a href="#" className="text-[#00D8FF] ml-3">
            Latest
          </a>
        </li>
        <li className={navItemBoxes}>
          <a href="#" className="text-[#00D8FF] ml-3">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}
