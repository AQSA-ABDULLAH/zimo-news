import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function NewsSection() {
  const [news, setNews] = useState([]);
  const API_KEY = "pub_69457197b9f174b03a2f58af4445686e2936d"; // Replace with your actual API key
  const NEWS_API_URL = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=us&language=en&category=top`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(NEWS_API_URL);
        const data = await response.json();
        if (data.results) {
          setNews(data.results.map((article) => article.title));
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
    const interval = setInterval(fetchNews, 60000); // Refresh news every minute
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNews((prevNews) => [prevNews[prevNews.length - 1], ...prevNews.slice(0, -1)]);
    }, 7000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="p-[20px] overflow-hidden">
      <div className="flex items-center text-[12px] 3xl:text-[20px] gap-[20px] tracking-[2px] 3xl:tracking-[2.8px]">
        <img src="/assets/Group 6475.svg" alt="logo" className="max-3xl:h-8" />
        <h2 className="font-bold">MOST READ</h2>
      </div>
      <div className="relative overflow-hidden mt-[12px] 3xl:mt-[22px] h-[320px] 3xl:h-[468px]"> 
        <AnimatePresence mode="popLayout">
          <motion.ul
            key={news[0]} // Re-renders on change
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="space-y-[9px] 3xl:space-y-[18px] text-[10px] 3xl:text-[14px] tracking-[2px] 3xl:tracking-[2.8px] uppercase 3xl:leading-5"
          >
            {news.map((item, index) => (
              <motion.li key={index} className="transition-transform duration-300">
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default NewsSection;
