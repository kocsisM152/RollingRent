import './Car.css';

const Car = ({ kocsi }) => {
    return (
        <div className="kocsi">
            <h1>Típus: {kocsi.tipus}</h1>
            <div className="kocsi-kepek">
                {kocsi.kepek.map((elem) => {
                    return (
                        <div
                            className="kocsi-kep"
                            key={elem}
                        >
                            <img src={elem} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Car;
