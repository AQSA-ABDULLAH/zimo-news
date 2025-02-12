"use client";
import NewsPage from "@/components/news-section/NewsPage";
import ToggleButton from "@/components/news-section/ToggleButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-h-[100vh]">
      <NewsPage />
      <div className="absolute top-0 w-[100%]">
        <ToggleButton />
      </div>
    </div>
  );
}
