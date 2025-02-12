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
      className={`fixed top-0 right-0 h-full w-60 bg-black text-white transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-60"
      }`}
    >
      {/* Sidebar Content */}
      <div className="p-6">
        <h2 className="text-white text-lg font-bold mb-4">MORE</h2>
        <ul className="space-y-2">
          <li className="hover:text-gray-400 cursor-pointer">CLIMATE CRISIS</li>
          <li className="hover:text-gray-400 cursor-pointer">OPINION</li>
          <li className="hover:text-gray-400 cursor-pointer">CORONAVIRUS</li>
          <li className="hover:text-gray-400 cursor-pointer">INVESTIGATIONS</li>
          <li className="hover:text-gray-400 cursor-pointer">IN PICTURES</li>
          <li className="hover:text-gray-400 cursor-pointer">INTERACTIVES</li>
          <li className="hover:text-gray-400 cursor-pointer">PODCASTS</li>
        </ul>
      </div>
    </div>
  );
}

export default RightSidebar;
