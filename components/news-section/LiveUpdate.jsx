import React from "react";

function LiveUpdate() {
  return (
    <div className="bg-[#000] py-4 flex tracking-[2.4px] my-[45px]">
      <span className="w-[25%] flex items-center justify-center">
        <img src="/assets/LiveUpdate.svg" alt="notification" />
      </span>
      <div className="text-[14px] px-2 text-white w-[75%]">
        <span className="font-bold leading-[30px]">
          UN SAYS 700,000 CHILDREN DISPLACED IN GAZA AMID DEADLY ISRAEL ATTACKS
        </span>
        <p className="leading-5">
          UNICEF says children ‘forced to leave everything behind’ as Israeli
          bombings continue across the besieged enclave.
        </p>
      </div>
    </div>
  );
}

export default LiveUpdate;
