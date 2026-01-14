import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Foglalas.css";

const Foglalas = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState({});
  const [kepek, setKepek] = useState([]);
  const [kDatum, setKDatum] = useState("");
  const [vDatum, setVDatum] = useState("");

  const kido = JSON.parse(localStorage.getItem("kdatum"));
  console.log(kido);

  const vido = JSON.parse(localStorage.getItem("vdatum"));

  useEffect(() => {
    setKDatum(kido);
    setVDatum(vido);

    // ... (adatlekérő logika változatlan) ...
    const kocsiLeker = async () => {
      const response = await fetch("http://localhost:3500/api/cars-frontend");
      const adat = await response.json();
      const kocsi = adat.cars.filter((elem) => elem._id === id);

      if (response.ok) {
        setCar(kocsi[0]);
        console.log(kocsi[0].kepek);

        setKepek(kocsi[0].kepek);
      } else {
        window.alert(adat.msg);
      }
    };
    kocsiLeker();
  }, []);
  return (
    <div>
      <Navbar />
      <h1>Foglalás</h1>
      <p>{car.marka}</p>
      <img className="foglalas-kep" src={kepek[0]} />
      <p className="foglalas-p">Bérlés kezdete: {kDatum}</p>
      <p className="foglalas-p">Bérlés vége: {vDatum}</p>
      <button onClick={() => navigate("/fizetes")}>Tovább a fizetéshez</button>
    </div>
  );
};

export default Foglalas;
