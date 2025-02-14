import React from "react";

function Navbar() {
  return (
    <header className="flex items-center justify-between my-[35px] 3xl:my-[45px]">
      <div>
        <img src="/assets/ZIMO NEWS.svg" alt="Zimo News" className="max-3xl:h-8" />
      </div>
      <nav className="hidden md:flex space-x-[15px] text-[10px] 3xl:text-[14px] tracking-[2px]">
        <a href="#" className="hover:text-black cursor-pointer">
          ISRAEL/GAZA
        </a>
        <a href="#" className="hover:text-black cursor-pointer">
          UKRAINE WAR
        </a>
        <a href="#" className="hover:text-black cursor-pointer">
          FEATURES
        </a>
        <a href="#" className="hover:text-black cursor-pointer">
          ECONOMY
        </a>
        <a href="#" className="hover:text-black cursor-pointer">
          VIDEO
        </a>
        <a href="#" className="hover:text-black cursor-pointer">
          SPORT
        </a>
        <a href="#" className="hover:text-black cursor-pointer">
          SCIENCE & TECHNOLOGY
        </a>
      </nav>
      <div>
        <img src="/assets/UK Flag.svg" alt="Uk Flag" className="max-3xl:h-8" />
      </div>
    </header>
  );
}

export default Navbar;
