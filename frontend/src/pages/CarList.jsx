// import Car from "./Car";
// import "./CarList.css";

// const CarList = ({ autok }) => {
//   return (
//     <div className="kocsi-lista">
//       {autok.map((kocsi) => (
//         <Car kocsi={kocsi} key={kocsi.tipus} />
//       ))}
//     </div>
//   );
// };

// export default CarList;

import { Link } from "react-router-dom";
import "./CarList.css";

const CarList = ({ autok }) => {
  return (
    <div className="kocsi-lista">
      {autok.map((kocsi) => (
        <div className="kocsi-card" key={kocsi.tipus}>
          <Link to={`/auto/${kocsi.id}`} className="kocsi-link">
            <img src={kocsi.kepek[0]} alt={kocsi.tipus} className="kocsi-fokep" />
            <h2>{kocsi.tipus}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CarList;

