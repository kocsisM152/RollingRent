import { useState } from "react";
import Navbar from "../components/Navbar";
import './Fizetes.css';
import { useEffect } from "react";

const Fizetes = () => {
  const berles = JSON.parse(
    localStorage.getItem("berles")
  );
  const [items, setIitems] = useState([]);

  useEffect(() => {
    const tomb = [];
    tomb.push(berles);
    setIitems(tomb);
  }, [])

  if (!berles) {
    return (
      <div>
        <Navbar />
        <p>Nincs aktív bérlés</p>
      </div>
    );
  }

  const { napiAr, berlesNapok, kezdet, vege } = berles;
  const vegosszeg = napiAr * berlesNapok;

  const kiegyenlites = async () => {
     try {
          // Itt hívjuk meg a BACKEND-edet (ezt meg kell írnod a szerver oldalon!)
          const res = await fetch("http://localhost:3500/api/stripe/create-checkout-session", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: items }) // A te items state-edet küldjük
          });

          const data = await res.json();
          console.log(data);
          

          if (data.url) {
            window.location.href = data.url;
          } else {
            console.error("Hiba: Nem érkezett URL a szervertől.");
            
          }
        } catch (error) {
          console.error("Hálózati hiba:", error);
        }
      };

  return (
    <div>
      <Navbar />

      <div className="fizetes-container">
        <h1>Fizetés</h1>

        <div className="fizetes-kartya">
          <p>Kezdete: {kezdet}</p>
          <p>Vége: {vege}</p>
          <p>Bérlés hossza: {berlesNapok} nap</p>
          <p>Napi ár: {napiAr.toLocaleString()} Ft</p>

          <hr />

          <p className="fizetes-cim">Bérlés végösszeg</p>
          <p className="fizetes-ar">
          {vegosszeg.toLocaleString()} Ft
          </p>

          <button className="fizetes-gomb" onClick={kiegyenlites} >
  Fizetés folytatása
</button>
        </div>
      </div>
    </div>
  );
};

export default Fizetes;
