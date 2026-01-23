import React from 'react'
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Car from "./Car"; // Ugyanazt a kártyát használjuk

const Favouritecars = () => {
  const [favs, setFavs] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const userLeker = async () => { 
            const response = await fetch(`http://localhost:3500/api/users-frontend/${user._id}`);
            const userF = await response.json(); 
      setFavs(userF.user.kedveltAutok);
      console.log(userF.user.kedveltAutok);
      
            // localStorage.setItem('favorites', JSON.stringify(userF.user.kedveltAutok));
        };
        
        userLeker();
    
    // const savedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    // setFavs(savedFavs);
  }, []);

  const removeFavorite = async (id) => {
    const updated = favs.filter(car => car._id !== id);
    console.log(updated);
    
    setFavs(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));

    const response = await fetch(`http://localhost:3500/api/users-frontend/${user._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ cars: updated })
        })
  };

  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center", color: "white" }}>Kedvenc autóim</h1>
      <div className="kocsik-kontener">
        {favs.length > 0 ? (
          favs.map((elem) => (
            <div key={elem._id}>
              <Car kocsi={elem} />
              <button 
                onClick={() => removeFavorite(elem._id)}
                style={{ backgroundColor: "red", color: "white", width: "100%" }}
              >
                Törlés a kedvencekből
              </button>
            </div>
          ))
        ) : (
          <p style={{ color: "white", textAlign: "center" }}>Még nincsenek kedvenc autóid.</p>
        )}
      </div>
    </>
  );
};

export default Favouritecars;
