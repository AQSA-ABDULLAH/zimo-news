import Image from "next/image";
import Navbar from "../header/Navbar";

export default function NewsPage() {
  return (
    <div className="h-[100vh] w-[1213px] mx-auto">
         <Navbar />
      <main>
        <div className="bg-black text-white p-4 rounded-lg text-sm">
          <span className="text-red-500 font-bold">● LIVE UPDATES </span>
          <span className="font-bold">
            UN SAYS 700,000 CHILDREN DISPLACED IN GAZA AMID DEADLY ISRAEL
            ATTACKS
          </span>
          <p className="text-gray-300 text-xs mt-1">
            UNICEF says children ‘forced to leave everything behind’ as Israeli
            bombings continue across the besieged enclave.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image src="/image.png" width={600} height={400} alt="Gaza Image" />
            <p className="text-xs p-2 bg-gray-800 text-white">ISRAEL/GAZA</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h2 className="font-bold text-lg border-b pb-2">MOST READ</h2>
            <ul className="mt-2 space-y-2 text-sm text-gray-700">
              <li className="hover:underline">
                UN says 700,000 children displaced in Gaza amid deadly Israeli
                attacks
              </li>
              <li className="hover:underline">
                Russia and US air strikes attack targets in Syria
              </li>
              <li className="hover:underline">
                Israel-Hamas war updates: Palestinians killed in Israeli attack
                on Jabalia
              </li>
              <li className="hover:underline">
                Indonesians boycott McDonald's, Starbucks over support for
                Israel
              </li>
              <li className="hover:underline">
                UK’s Braverman sacked following pro-Palestinian protest comments
              </li>
              <li className="hover:underline">
                Anti-Palestinian sentiment rises amid bipartisan US support for
                Israel
              </li>
              <li className="hover:underline">
                What does David Cameron’s return to UK politics mean for the
                Middle East?
              </li>
              <li className="hover:underline">
                Russia-Ukraine war: List of key events, Day 629
              </li>
              <li className="hover:underline">
                If Gaza was in your city, how much would be destroyed?
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
