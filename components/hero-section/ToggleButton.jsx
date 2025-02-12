import React, { useState } from "react";
import LeftSidebar from "../header/LeftSidebar";
import RightSidebar from "../header/RightSidebar";
import Logo from "./Logo";

function ToggleButton() {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);

  return (
    <div className="flex justify-between">
      {/* LEFT SIDEBAR BUTTON */}
      <div
        className="bg-black w-[50px] h-[213px] flex items-center justify-center rounded-br-3xl cursor-pointer"
        onClick={() => setIsLeftOpen(!isLeftOpen)}
      >
        <div className="rotate-90">
          <Logo />
        </div>
      </div>

      {/* RIGHT SIDEBAR BUTTON */}
      <div
        className="bg-black w-[50px] h-[213px] flex items-center justify-center rounded-bl-3xl cursor-pointer"
        onClick={() => setIsRightOpen(!isRightOpen)}
      >
        <div className="rotate-90">
          <Logo />
        </div>
      </div>

      {/* Render Sidebars */}
      <LeftSidebar isOpen={isLeftOpen} toggleSidebar={() => setIsLeftOpen(false)} />
      <RightSidebar isOpen={isRightOpen} toggleSidebar={() => setIsRightOpen(false)} />
    </div>
  );
}

export default ToggleButton;

