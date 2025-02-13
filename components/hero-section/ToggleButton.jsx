import React, { useState, useEffect } from "react";
import LeftSidebar from "../header/LeftSidebar";
import RightSidebar from "../header/RightSidebar";
import Logo from "./Logo";

function ToggleButton() {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);
  const [showLogoLeft, setShowLogoLeft] = useState(true);
  const [showLogoRight, setShowLogoRight] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowLogoLeft((prev) => !prev);
      setShowLogoRight((prev) => !prev);
    }, 8000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-between">
      {/* LEFT SIDEBAR BUTTON */}
      <div
        className="bg-black w-[42px] 3xl:w-[50px] h-[150px] 3xl:h-[213px] flex items-center justify-center rounded-br-3xl cursor-pointer"
        onClick={() => setIsLeftOpen(!isLeftOpen)}
      >
        {showLogoLeft ? (
          <div className="rotate-90 transition-opacity duration-500">
            <Logo className="max-3xl:h-3" />
          </div>
        ) : (
          <div className="text-[22px] 3xl:text-[32px] 3xl:font-semibold text-white -rotate-90 tracking-[5px] 3xl:tracking-[7px] transition-opacity duration-500">
            NEWS
          </div>
        )}
      </div>

      {/* RIGHT SIDEBAR BUTTON */}
      <div
        className="bg-black w-[42px] 3xl:w-[50px] h-[150px] 3xl:h-[213px] flex items-center justify-center rounded-bl-3xl cursor-pointer"
        onClick={() => setIsRightOpen(!isRightOpen)}
      >
        {showLogoRight ? (
          <div className="rotate-90 transition-opacity duration-500">
            <Logo />
          </div>
        ) : (
          <div className="text-[22px] 3xl:text-[32px] 3xl:font-semibold text-white -rotate-90 tracking-[5px] 3xl:tracking-[6px] transition-opacity duration-500">
            MORE
          </div>
        )}
      </div>

      {/* Render Sidebars */}
      <LeftSidebar isOpen={isLeftOpen} toggleSidebar={() => setIsLeftOpen(false)} />
      <RightSidebar isOpen={isRightOpen} toggleSidebar={() => setIsRightOpen(false)} />
    </div>
  );
}

export default ToggleButton;