
import Navbar from "./header/Navbar";
import LiveUpdate from "./hero-section/LiveUpdate";
import NewsSection from "./main-section/MainSection";

export default function NewsPage() {
  return (
    <div className="font-lato">
      <main className="sm:w-[63%] mx-[45px] sm:mx-auto">
        <Navbar />
        <LiveUpdate />
        <NewsSection />
      </main>
    </div>
  );
}
