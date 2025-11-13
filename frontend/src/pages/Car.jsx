import "./Car.css";

const Car = ({ kocsi }) => {
  return (
    <div className="kocsi">
      <h1>Típus: {kocsi.tipus}</h1>
      <div className="kocsi-kep" key={kocsi._id}>
        <img src={kocsi.kepek[0]} />
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
