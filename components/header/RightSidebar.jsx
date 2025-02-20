import React, { useEffect, useRef } from "react";

function RightSidebar({ isOpen, toggleSidebar }) {
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
      className={`fixed top-0 right-0 h-[270px] 3xl:h-[370px] w-[180px] sm:w-[218px] 3xl:w-[328px] bg-black text-white tracking-[2.5px] transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-[328px]"
      }`}
    >
      {/* Sidebar Content */}
      <div className="p-[20px]">
        <h2 className="text-[28px] 3xl:text-[36px] mb-[9px]">MORE</h2>
        <ul className="space-y-[14px] 3xl:space-y-[20px] text-[9px] 3xl:text-[14px]">
          <li className="cursor-pointer">CLIMATE CRISIS</li>
          <li className="cursor-pointer">OPINION</li>
          <li className="cursor-pointer">CORONAVIRUS</li>
          <li className="cursor-pointer">INVESTIGATIONS</li>
          <li className="cursor-pointer">IN PICTURES</li>
          <li className="cursor-pointer">INTERACTIVES</li>
          <li className="cursor-pointer">PODCASTS</li>
        </ul>
      </div>
    </div>
  );
}

export default RightSidebar;
