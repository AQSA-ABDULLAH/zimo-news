import React from "react";

function NewsSection() {
  return (
    <div className="p-[20px]">
      <div className="flex items-center text-[12px] 3xl:text-[20px] gap-[20px] tracking-[2px] 3xl:tracking-[2.8px]">
        <img src="/assets/Group 6475.svg" alt="logo" className="max-3xl:h-8" />
        <h2 className="font-bold">MOST READ</h2>
      </div>
      <ul className="mt-[12px] 3xl:mt-[22px] space-y-[9px] 3xl:space-y-[18px] text-[10px] 3xl:text-[14px] tracking-[2px] 3xl:tracking-[2.8px] uppercase 3xl:leading-5">
        <li>
          UN says 700,000 children displaced in Gaza amid deadly Israeli attacks
        </li>
        <li>Russia and US air strikes attack targets in Syria</li>
        <li>
          Israel-Hamas war updates: Palestinians killed in Israeli attack on
          Jabalia
        </li>
        <li>
          Indonesians boycott McDonald's, Starbucks over support for Israel
        </li>
        <li>
          UK’s Braverman sacked following pro-Palestinian protest comments
        </li>
        <li>
          Anti-Palestinian sentiment rises amid bipartisan US support for Israel
        </li>
        <li>
          What does David Cameron’s return to UK politics mean for the Middle
          East?
        </li>
        <li>Russia-Ukraine war: List of key events, Day 629</li>
        <li>If Gaza was in your city, how much would be destroyed?</li>
      </ul>
    </div>
  );
}

export default NewsSection;
