import React from 'react'
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Car from "./Car"; // Ugyanazt a kártyát használjuk

const Favouritecars = () => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const savedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavs(savedFavs);
  }, []);

  const removeFavorite = (id) => {
    const updated = favs.filter(car => car._id !== id);
    setFavs(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };
}

export default Favouritecars
 




//   return (
//     <>
//       <Navbar />
//       <h1 style={{ textAlign: "center", color: "white" }}>Kedvenc autóim</h1>
//       <div className="kocsik-kontener">
//         {favs.length > 0 ? (
//           favs.map((elem) => (
//             <div key={elem._id}>
//               <Car kocsi={elem} />
//               <button 
//                 onClick={() => removeFavorite(elem._id)}
//                 style={{ backgroundColor: "red", color: "white", width: "100%" }}
//               >
//                 Törlés a kedvencekből
//               </button>
//             </div>
//           ))
//         ) : (
//           <p style={{ color: "white", textAlign: "center" }}>Még nincsenek kedvenc autóid.</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default FavouriteCars;
