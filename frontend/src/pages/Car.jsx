import "./Car.css";

const Car = ({ kocsi }) => {

  const betolt = (id) =>  {
    // console.log(id);
    window.location.href = `/egyedi-car/${id}`;
  }
  return (
    <div className="kocsi" key={kocsi._id} onClick={() =>betolt(kocsi._id)}>
      <div className="kocsi-kep">
        <h1>Típus: {kocsi.tipus}</h1>
        <img src={kocsi.kepek?.[0]} alt={kocsi.tipus} />

        <h2>Részletek:</h2>
        <p>Származási ország: {kocsi.szarmazasiorszag}</p>
        <p>Évjárat: {kocsi.evjarat}</p>
        <p>Üzemanyag: {kocsi.uzemanyag}</p>
        <p>Váltó: {kocsi.valto}</p>
        <p>Teljesítmény: {kocsi.teljesitmeny} LE</p>
        <p>Űrtartalom: {kocsi.urtartalom} cm³</p>
        <p>Szín: {kocsi.szin}</p>
        <p>Ár: {kocsi.ar?.toLocaleString()} Ft</p>
      </div>
    </div>
  );
};

export default Car;
