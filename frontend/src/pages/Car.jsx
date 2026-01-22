import { useEffect, useState } from "react";
import "./Car.css";

const Car = ({ kocsi }) => {
  const [kedvezmeny, setKedvezmeny] = useState("");

  useEffect(() => {
    setKedvezmeny(kocsi.kedvezmeny);
  }, [kocsi.kedvezmeny]);

  const betolt = (id) => {
    window.location.href = `/egyedi-car/${id}`;
  };

  // 🔹 Kedvezmény színének meghatározása
  const kedvezmenySzine = () => {
    if (kedvezmeny === 10) return "kedvezmeny-zold";
    if (kedvezmeny === 20) return "kedvezmeny-kek";
    if (kedvezmeny === 30) return "kedvezmeny-piros";
    return "";
  };

  return (
    <div className="kocsi" key={kocsi._id} onClick={() => betolt(kocsi._id)}>
      <div
        className="kocsi-kep"
        style={{ backgroundColor: kocsi.foglalhatoe ? "white" : "grey" }}
      >
        <h1>Típus: {kocsi.tipus}</h1>

        <div className="kep-wrapper">
          <img src={kocsi.kepek?.[0]} alt={kocsi.tipus} />

          {kedvezmeny > 0 && (
            <div className={`kedvezmeny-badge ${kedvezmenySzine()}`}>
              -{kedvezmeny}%
            </div>
          )}
        </div>

        <h2>Részletek:</h2>
        <p>Származási ország: {kocsi.szarmazasiorszag}</p>
        <p>Évjárat: {kocsi.evjarat}</p>
        <p>Üzemanyag: {kocsi.uzemanyag}</p>
        <p>Váltó: {kocsi.valto}</p>
        <p>Teljesítmény: {kocsi.teljesitmeny} LE</p>
        <p>Űrtartalom: {kocsi.urtartalom} cm³</p>
        <p>Szín: {kocsi.szin}</p>

        {/* 🔹 Ár megjelenítés nyelv és valuta szerint */}
        <p>Ár: {kocsi.ar?.toLocaleString()} {kocsi.valuta}</p>
      </div>
    </div>
  );
};

export default Car;
