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
      className={`fixed top-0 left-0 h-full w-60 bg-black text-white transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-60"
      }`}
    >
      {/* Sidebar Content */}
      <div className="p-6">
        <h2 className="text-blue-400 text-lg font-bold mb-4">NEWS</h2>
        <ul className="space-y-2">
          <li className="hover:text-blue-400 cursor-pointer">EUROPE</li>
          <li className="hover:text-blue-400 cursor-pointer">US/CANADA</li>
          <li className="hover:text-blue-400 cursor-pointer">MIDDLE EAST</li>
          <li className="hover:text-blue-400 cursor-pointer">AFRICA</li>
          <li className="hover:text-blue-400 cursor-pointer">ASIA</li>
          <li className="hover:text-blue-400 cursor-pointer">LATIN AMERICA</li>
          <li className="hover:text-blue-400 cursor-pointer">ASIA PACIFIC</li>
        </ul>
      </div>
    </div>
  );
}

export default LeftSidebar;
