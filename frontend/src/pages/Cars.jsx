import { useState, useEffect } from 'react';
import './Cars.css';
import Car from './Car';

const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const kocsiLeker = async () => {
            const response = await fetch(
                'http://localhost:3500/api/cars-frontend'
            );

            const adat = await response.json();

            if (response.ok) {
                console.log(adat.cars);
                setCars(adat.cars);
            } else {
                window.alert(adat.msg);
            }
        };

        kocsiLeker();
    }, []);
    return (
        <div className="kocsik-kontener">
            {cars.map((elem) => {
                return (
                    <Car
                        key={elem._id}
                        kocsi={elem}
                    />
                );
            })}
        </div>
    );
};

export default Cars;
