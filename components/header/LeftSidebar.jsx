import React, { useEffect, useRef } from "react";

function LeftSidebar({ isOpen, toggleSidebar }) {
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleSidebar(); // Close sidebar when clicking outside
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, toggleSidebar]);

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 left-0 h-[370px] w-[328px] bg-black tracking-[2.5px] text-white transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-[328px]"
      }`}
    >
      {/* Sidebar Content */}
      <div className="p-[20px]">
        <h2 className="text-[36px] mb-[9px]">NEWS</h2>
        <ul className="space-y-[18px] text-[14px]">
          <li className="cursor-pointer">EUROPE</li>
          <li className="cursor-pointer">US/CANADA</li>
          <li className="cursor-pointer">MIDDLE EAST</li>
          <li className="cursor-pointer">AFRICA</li>
          <li className="cursor-pointer">ASIA</li>
          <li className="cursor-pointer">LATIN AMERICA</li>
          <li className="cursor-pointer">ASIA PACIFIC</li>
        </ul>
      </div>
    </div>
  );
}

export default LeftSidebar;
