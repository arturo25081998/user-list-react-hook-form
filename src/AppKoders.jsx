import { useState } from "react";
import KodersWrapper from "./components/KodersWrapper";
import KoderForm from "./components/KoderForm";

export default function AppRHF() {
  const [koders, setKoders] = useState([]);

  return (
    <main className="flex flex-col gap-4">
      <div className="w-full bg-blue-300 text-black font-light text-center text-2xl">
        koders App
      </div>
      <div className="flex flex-row gap-3 justify-center">
        <KoderForm setkoders={setKoders} koders={koders} />
        <KodersWrapper koders={koders} />
      </div>
    </main>
  );
}
