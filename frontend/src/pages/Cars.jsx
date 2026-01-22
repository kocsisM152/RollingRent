import { useState, useEffect } from "react";
import "./Cars.css";
import Car from "./Car";
import Navbar from "../components/Navbar";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [eredetiCars, setEredetiCars] = useState([]);
  

  // szűrők state-jei
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedFuels, setSelectedFuels] = useState([]);
  // Car.jsx (vagy ahol a kártya van)

  const Car = ({ kocsi }) => {
  const handleFavorite = () => {
    // Lekérjük a jelenlegi kedvenceket vagy egy üres tömböt
    const currentFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    
    // Megnézzük, benne van-e már (id alapján)
    const isAlreadyFavorite = currentFavorites.some(item => item._id === kocsi._id);

    if (!isAlreadyFavorite) {
      const updatedFavorites = [...currentFavorites, kocsi];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      alert("Hozzáadva a kedvencekhez! ⭐");
    } else {
      alert("Ez az autó már a kedvenceid között van!");
    }
  };

  return (
    <div className="car-card">
      {/* Itt a meglévő kódod a képpel és adatokkal */}
      <h3>{kocsi.tipus}</h3>
      <button onClick={handleFavorite} className="fav-button">
        ⭐ Kedvencekhez
      </button>
    </div>
  );
};

  useEffect(() => {
    const kocsiLeker = async () => {
      const response = await fetch("http://localhost:3500/api/cars-frontend");
      const adat = await response.json();
      console.log(adat.cars);
      
      if (response.ok) {
        setCars(adat.cars);
        setEredetiCars(adat.cars);
      } else {
        window.alert(adat.msg);
      }
    };
    

    kocsiLeker();
  }, []);

  const handleList = (brand) => {
    console.log(brand);
    setCars(eredetiCars)
    console.log(eredetiCars);
    console.log(cars);
    if (brand !== "Összes") {
      let brandCars = eredetiCars.filter(elem => elem.marka.includes(brand))
      setCars(brandCars) 
    } else if (brand === "Összes") {
      setCars(eredetiCars)
    }
    // if (selectedFuels.includes(fuel)) {
    //   setSelectedFuels(selectedFuels.filter((f) => f !== fuel));
    // } else {
    //   setSelectedFuels([...selectedFuels, fuel]);
    // }
  };
  
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
            onChange={(e) => handleList(e.target.value)}
          >
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

        <h1>Bérelhető autók</h1>

        <div className="jobbszuro">
          <h4>Üzemanyag:</h4>

          <label>
            <input
              type="checkbox"
              checked={selectedFuels.includes("benzin")}
              onChange={() => handleFuelChange("benzin")}
            />
            Benzin
          </label>

          <label>
            <input
              type="checkbox"
              checked={selectedFuels.includes("dizel")}
              onChange={() => handleFuelChange("dizel")}
            />
            Dizel
          </label>

          <label>
            <input
              type="checkbox"
              checked={selectedFuels.includes("benzin + villany")}
              onChange={() => handleFuelChange("benzin + villany")}
            />
            Benzin + villany
          </label>

          <label>
            <input
              type="checkbox"
              checked={selectedFuels.includes("elektromos")}
              onChange={() => handleFuelChange("elektromos")}
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
