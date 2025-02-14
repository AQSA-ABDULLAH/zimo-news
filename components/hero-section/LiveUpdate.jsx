import React from "react";

function LiveUpdate() {
  return (
    <div className="bg-[#000] py-4 flex tracking-[2.4px] my-[35px] 3xl:my-[45px]">
      <span className="w-[25%] flex items-center justify-center gap-4 animate-pulse">
        <img
          src="/assets/Path 36294.svg"
          alt="notification"
        />
        <p className="text-[#990000] text-[16px] 3xl:text-[21px] tracking-[7px]">LIVE UPDATE</p>
      </span>

      <div className="text-[10px] 3xl:text-[14px] px-2 text-white w-[75%]">
        <span className="font-bold leading-[10px] 3xl:leading-[30px]">
          UN SAYS 700,000 CHILDREN DISPLACED IN GAZA AMID DEADLY ISRAEL ATTACKS
        </span>
        <p className="leading-0 3xl:leading-5">
          UNICEF says children ‘forced to leave everything behind’ as Israeli
          bombings continue across the besieged enclave.
        </p>
      </div>
    </div>
  );
}

export default LiveUpdate;
