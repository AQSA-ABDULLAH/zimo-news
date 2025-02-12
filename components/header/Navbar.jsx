import React from "react";

function Navbar() {
  return (
    <header className="flex items-center justify-between py-4">
      <div className="text-2xl font-bold flex items-center space-x-2">
        <span className="text-black">N</span>
        <span>ZIMA NEWS</span>
      </div>
      <nav className="hidden md:flex space-x-6 text-gray-600">
        <a href="#" className="hover:text-black">
          ISRAEL/GAZA
        </a>
        <a href="#" className="hover:text-black">
          UKRAINE WAR
        </a>
        <a href="#" className="hover:text-black">
          FEATURES
        </a>
        <a href="#" className="hover:text-black">
          ECONOMY
        </a>
        <a href="#" className="hover:text-black">
          VIDEO
        </a>
        <a href="#" className="hover:text-black">
          SPORT
        </a>
        <a href="#" className="hover:text-black">
          SCIENCE & TECHNOLOGY
        </a>
      </nav>
      <div className="flex items-center space-x-4">
        {/* <Globe className="w-6 h-6" /> */}
        <button className="md:hidden">
          {/* <Menu className="w-6 h-6" /> */}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
