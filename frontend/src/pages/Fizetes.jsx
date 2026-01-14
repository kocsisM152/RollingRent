import Navbar from "../components/Navbar";
// import "./Fizetes.css";

const Fizetes = () => {
  // ideiglenes ár (később jöhet backendről)
  const ar = 189_900;

  return (
    <div>
      <Navbar />

      <div className="fizetes-container">
        <h1>Fizetés</h1>

        <div className="fizetes-kartya">
          <p className="fizetes-cim">Bérlés végösszeg</p>
          <p className="fizetes-ar">{ar.toLocaleString()} Ft</p>

          <button className="fizetes-gomb">Fizetés folytatása</button>
        </div>
      </div>
    </div>
  );
};

export default Fizetes;
