import React from "react";
import Logo from "./Logo";

function ToggleButton() {
  return (
    <div className="flex justify-between">
      <div className="bg-[#000] w-[50px] h-[213px] flex items-center justify-center rounded-br-3xl">
        <div className="rotate-90">
          <Logo />
        </div>
      </div>
      <div className="bg-[#000] w-[50px] h-[213px] flex items-center justify-center rounded-bl-3xl">
        <div className="rotate-90">
          <Logo />
        </div>
      </div>
    </div>
  );
}

export default ToggleButton;
