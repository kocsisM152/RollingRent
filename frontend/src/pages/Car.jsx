import { useEffect, useState } from "react";
import "./Car.css";
import like from '../../public/images/like.png';

const Car = ({ kocsi }) => {
  const [kedvezmeny, setKedvezmeny] = useState("");
  const [kedvelem, setKedvelem] = useState(0);
  const [favCar, setFavCar] = useState([]);
  const [lang, setLang] = useState("hu"); // nyelv state

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => { 
      const userLeker = async () => { 
          const response = await fetch(`http://localhost:3500/api/users-frontend/${user._id}`);
          const userF = await response.json(); 
          setFavCar(userF.user.kedveltAutok);
        localStorage.setItem('favorites', JSON.stringify(userF.user.kedveltAutok));
        
        let kedv = false;
    
    userF.user.kedveltAutok.forEach(elem => {
      if (elem._id === kocsi._id) {
        kedv = true;
      }
    });
    
    if (kedv) setKedvelem(1);
      };
      
    if (user) userLeker();

    
    
    setKedvezmeny(kocsi.kedvezmeny);
  }, [kocsi.kedvezmeny]);

  useEffect(() => {
    
    
    
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

  const kedvelesFel = () => { 
    console.log(id);
    
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
          { kedvelem ? 
            <div className="like-logo"><img src={ like } /></div>
            :
            <></>
          }
        </div>

        <h2>Részletek:</h2>
        {/* <p>Származási ország: {kocsi.szarmazasiorszag}</p> */}
<p>{lang === "en" ? "Country of origin:" : "Származási ország:"} {kocsi.szarmazasiorszag}</p>
<p>{lang === "en" ? "Model year:" : "Évjárat:"} {kocsi.evjarat}</p>
<p>{lang === "en" ? "Fuel type:" : "Üzemanyag:"} {kocsi.uzemanyag}</p>
<p>{lang === "en" ? "Transmission:" : "Váltó:"} {kocsi.valto}</p>
<p>{lang === "en" ? "Power:" : "Teljesítmény:"} {kocsi.teljesitmeny} {lang === "en" ? "hp" : "LE"}</p>
<p>{lang === "en" ? "Engine displacement:" : "Űrtartalom:"} {kocsi.urtartalom} cm³</p>
<p> {lang === "en" ? "Color:" : "Szín:"} {kocsi.szin}</p>

        {/* 🔹 Ár megjelenítés nyelv és valuta szerint */}
        <p>Ár: {kocsi.ar?.toLocaleString()} {kocsi.valuta}</p>
      </div>
    </div>
  );
};

export default Car;
