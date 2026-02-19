import { useState, useEffect } from "react";
import "./Cars.css";
import Car from "./Car";
import Navbar from "../components/Navbar";

const EUR_RATE = 390; // árfolyam Ft → €

const Cars = () => {
  // 🔹 Állapotok
  const [cars, setCars] = useState([]);
  const [eredetiCars, setEredetiCars] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedFuels, setSelectedFuels] = useState([]);
  const [lang, setLang] = useState("hu"); // nyelv state

  // 🔹 Valuta és ár átváltás
  const currencySymbol = lang === "en" ? "€" : "Ft";
  const convertPrice = (priceFt) => (lang === "en" ? Math.round(priceFt / EUR_RATE) : priceFt);

  // 🔹 Adatok lekérése
  useEffect(() => {
    const kocsiLeker = async () => {
      const response = await fetch("http://localhost:3500/api/cars-frontend");
      const adat = await response.json();
      if (response.ok) {
        setCars(adat.cars);
        setEredetiCars(adat.cars);
      } else {
        window.alert(adat.msg);
      }
    };
    kocsiLeker();
  }, []);

  // 🔹 Márka szűrés
  const handleList = (brand) => {
    setSelectedBrand(brand);
    if (brand !== "Összes") {
      setCars(eredetiCars.filter((elem) => elem.marka.includes(brand)));
    } else {
      setCars(eredetiCars);
    }
  };

  // 🔹 Üzemanyag szűrés
  const handleFuelChange = (fuel) => {
    if (selectedFuels.includes(fuel)) {
      setSelectedFuels(selectedFuels.filter((f) => f !== fuel));
    } else {
      setSelectedFuels([...selectedFuels, fuel]);
    }
  };

  return (
    <>
      <Navbar />

      {/* 🔹 Nyelvváltó gombok */}
      <div className="language-switch">
        <button onClick={() => setLang("hu")}>Magyar (Ft)</button>
        <button onClick={() => setLang("en")}>English (€)</button>
      </div>

      {/* 🔹 Szűrők */}
      <div className="szurok">
        <div className="balszuro">
          {/* <h4>Típus (márka):</h4> */}
          <h4>{lang === "en" ? "Type (brand):" : "Típus (márka):"}</h4>
          <select value={selectedBrand} onChange={(e) => handleList(e.target.value)}>
            <option></option>
            <option value="Összes">Összes</option>
            <option value="Audi">Audi</option>
            <option value="BMW">BMW</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Ferrari">Ferrari</option>
            <option value="Lamborghini">Lamborghini</option>
            <option value="Nissan">Nissan</option>
            <option value="Koenigsegg">Koenigsegg</option>
            <option value="Opel">Opel</option>
            <option value="Fiat">Fiat</option>
            <option value="Mitsubishi">Mitsubishi</option>
            <option value="Honda">Honda</option>
            <option value="Porsche">Porsche</option>
            <option value="Maseratti">Maseratti</option>
            <option value="Jaguar">Jaguar</option>
            <option value="Bugatti">Bugatti</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Tesla">Tesla</option>
          </select>
        </div>

        <h1>{lang === "en" ? "Available Cars" : "Bérelhető autók"}</h1>

        <div className="jobbszuro">
          <h4>{lang === "en" ? "Fuel:" : "Üzemanyag:"}</h4>
          {["benzin", "dizel", "benzin + villany", "elektromos"].map((fuel) => (
            <label key={fuel}>
              <input
                type="checkbox"
                checked={selectedFuels.includes(fuel)}
                onChange={() => handleFuelChange(fuel)}
              />
              {fuel}
            </label>
          ))}
        </div>
      </div>

      {/* 🔹 Autók listázása */}
      <div className="kocsik-kontener">
        {cars
          .filter((elem) => {
            if (selectedBrand && selectedBrand !== "Összes" && elem.marka !== selectedBrand)
              return false;
            if (selectedFuels.length > 0 && !selectedFuels.includes(elem.uzemanyag))
              return false;
            return true;
          })
          .map((elem) => (
            <Car
              key={elem._id}
              kocsi={{
                ...elem,
                ar: convertPrice(elem.ar), // 🔹 átváltott ár
                valuta: currencySymbol,     // 🔹 Ft vagy €
              }}
            />
          ))}
      </div>
    </>
  );
};



export default Cars;
