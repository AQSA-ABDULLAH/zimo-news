import React from "react";
import Logo from "./Logo";

function ToggleButton() {
  return (
    <div className="flex justify-between w-full">
    <div className="bg-[#000] w-[50px] h-[213px]">
      <Logo />
    </div>
    <div className="bg-[#000] w-[50px] h-[213px]">
      <Logo />
    </div>
    </div>
  );
}

export default ToggleButton;
