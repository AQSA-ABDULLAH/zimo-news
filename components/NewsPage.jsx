
import Navbar from "./header/Navbar";
import LiveUpdate from "./hero-section/LiveUpdate";
import NewsSection from "./main-section/MainSection";

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
