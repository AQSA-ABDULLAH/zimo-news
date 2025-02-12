import React from "react";

function Navbar() {
  return (
    <header className="flex items-center justify-between py-4 my-[45px]">
      <div className="text-2xl font-bold flex items-center space-x-2">
        <img src="/assets/ZIMO NEWS.svg" alt="Zimo News" />
      </div>
      <nav className="hidden md:flex space-x-6 text-[14px] tracking-[2px]">
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
        <img src="/assets/UK Flag.svg" alt="Uk Flag" />
      </div>
    </header>
  );
}

export default Navbar;
