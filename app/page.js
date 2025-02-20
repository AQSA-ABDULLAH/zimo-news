"use client";
import NewsPage from "@/components/NewsPage";
import ToggleButton from "@/components/hero-section/ToggleButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-h-[100vh] bg-color-[white]">
      <NewsPage />
      <div className="absolute top-0 w-[100%]">
        <ToggleButton />
      </div>
    </div>
  );
}
