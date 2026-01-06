import { useState, useEffect } from "react";
import "./Cars.css";
import Car from "./Car";
import Navbar from "../components/Navbar";

const Cars = () => {
  const [cars, setCars] = useState([]);

  // szűrők state-jei
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedFuels, setSelectedFuels] = useState([]);

  useEffect(() => {
    const kocsiLeker = async () => {
      const response = await fetch("http://localhost:3500/api/cars-frontend");
      const adat = await response.json();

      if (response.ok) {
        setCars(adat.cars);
      } else {
        window.alert(adat.msg);
      }
    };

    kocsiLeker();
  }, []);

  // üzemanyag checkbox kezelése
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

      <div className="szurok">
        <div className="balszuro">
          <h4>Típus (márka):</h4>
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="">Összes</option>
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
          </select>
        </div>

        <h1>Bérelhető autók</h1>

        <div className="jobbszuro">
          <h4>Üzemanyag:</h4>

          <label>
            <input
              type="checkbox"
              checked={selectedFuels.includes("Benzin")}
              onChange={() => handleFuelChange("Benzin")}
            />
            Benzin
          </label>

          <label>
            <input
              type="checkbox"
              checked={selectedFuels.includes("Dízel")}
              onChange={() => handleFuelChange("Dízel")}
            />
            Dízel
          </label>

          <label>
            <input
              type="checkbox"
              checked={selectedFuels.includes("Benzin + villany")}
              onChange={() => handleFuelChange("Benzin + villany")}
            />
            Benzin + villany
          </label>

          <label>
            <input
              type="checkbox"
              checked={selectedFuels.includes("Elektromos")}
              onChange={() => handleFuelChange("Elektromos")}
            />
            Elektromos
          </label>
        </div>
      </div>

      <div className="kocsik-kontener">
        {cars
          .filter((elem) => {
            if (selectedBrand && elem.tipus !== selectedBrand) return false;
            if (
              selectedFuels.length > 0 &&
              !selectedFuels.includes(elem.uzemanyag)
            )
              return false;
            return true;
          })
          .map((elem) => (
            <Car key={elem._id} kocsi={elem} />
          ))}
      </div>
    </>
  );
};

export default Cars;
