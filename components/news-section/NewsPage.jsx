import Image from "next/image";
import Navbar from "../header/Navbar";
import LiveUpdate from "./LiveUpdate";
import NewsSection from "./NewsSection";

export default function NewsPage() {
  return (
    <div className="font-lato">
      <main className="w-[63%] mx-auto">
        <Navbar />
        <LiveUpdate />
        <NewsSection />
      </main>
    </div>
  );
}
