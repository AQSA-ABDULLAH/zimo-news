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
    }, 8000); // Switch every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex justify-between">
      {/* LEFT SIDEBAR BUTTON */}
      <div
        className="bg-black w-[50px] h-[213px] flex items-center justify-center rounded-br-3xl cursor-pointer"
        onClick={() => setIsLeftOpen(!isLeftOpen)}
      >
        {showLogoLeft ? (
          <div className="rotate-90 transition-opacity duration-500">
            <Logo />
          </div>
        ) : (
          <div className="text-[32px] font-semibold text-white -rotate-90 tracking-[7px] transition-opacity duration-500">
            NEWS
          </div>
        )}
      </div>

      {/* RIGHT SIDEBAR BUTTON */}
      <div
        className="bg-black w-[50px] h-[213px] flex items-center justify-center rounded-bl-3xl cursor-pointer"
        onClick={() => setIsRightOpen(!isRightOpen)}
      >
        {showLogoRight ? (
          <div className="rotate-90 transition-opacity duration-500">
            <Logo />
          </div>
        ) : (
          <div className="text-[32px] font-semibold text-white -rotate-90 tracking-[6px] transition-opacity duration-500">
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