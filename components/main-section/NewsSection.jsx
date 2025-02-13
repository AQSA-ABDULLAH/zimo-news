import React, { useEffect, useRef, useState } from "react";

function NewsSection() {
  const listRef = useRef(null);
  const [news, setNews] = useState([
    "UN says 700,000 children displaced in Gaza amid deadly Israeli attacks",
    "Russia and US air strikes attack targets in Syria",
    "Israel-Hamas war updates: Palestinians killed in Israeli attack on Jabalia",
    "Indonesians boycott McDonald's, Starbucks over support for Israel",
    "UK’s Braverman sacked following pro-Palestinian protest comments",
    "Anti-Palestinian sentiment rises amid bipartisan US support for Israel",
    "What does David Cameron’s return to UK politics mean for the Middle East?",
    "Russia-Ukraine war: List of key events, Day 629",
    "If Gaza was in your city, how much would be destroyed?",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNews((prevNews) => [prevNews[prevNews.length - 1], ...prevNews.slice(0, -1)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-[20px] overflow-hidden">
      <div className="flex items-center text-[12px] 3xl:text-[20px] gap-[20px] tracking-[2px] 3xl:tracking-[2.8px]">
        <img src="/assets/Group 6475.svg" alt="logo" className="max-3xl:h-8" />
        <h2 className="font-bold">MOST READ</h2>
      </div>
      <div className="relative overflow-hidden mt-[12px] 3xl:mt-[22px]">
        <ul
          ref={listRef}
          className="space-y-[9px] 3xl:space-y-[18px] text-[10px] 3xl:text-[14px] tracking-[2px] 3xl:tracking-[2.8px] uppercase 3xl:leading-5"
        >
          {news.map((item, index) => (
            <li key={index} className="transition-transform duration-100">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NewsSection;


