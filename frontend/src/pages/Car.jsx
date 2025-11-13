import "./Car.css";

const Car = ({ kocsi }) => {
  return (
    <div className="kocsi">
      <div className="kocsi-kep" key={kocsi._id}>
      <h1>Típus: {kocsi.tipus}</h1>
        <img src={kocsi.kepek[0]} />
        <h1>Részletek:</h1>
      </div>
      {/* <div className="kocsi-kepek">
                {kocsi.kepek.map((elem) => {
                    return (
                        
                    );
                })}
            </div> */}
    </div>
  );
};

export default Car;
