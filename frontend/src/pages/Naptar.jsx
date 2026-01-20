import { useEffect, useState } from 'react';
import "./Naptar.css";
import { formatDate, getDaysBetween, rangeHasBlockedDay } from "../utils/dateUtils";

const FoglalasiNaptar = ({ foglalhato, car, napiAr }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [blockedDays, setBlockedDays] = useState([]);
    const [error, setError] = useState('');
    //  

    const today = formatDate(new Date());

    // 🔽 backend foglalt napok
    // useEffect(() => {
    //     if (!carId) return;

    //     fetch(`http://localhost:3500/api/bookings/${carId}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             const days = [];
    //             data.forEach(b =>
    //                 days.push(...getDaysBetween(b.start, b.end))
    //             );
    //             setBlockedDays(days);
    //         });
    // }, [carId]);

    const handleStart = (e) => {
        const value = e.target.value;
        setError('');

        if (blockedDays.includes(value)) {
            setError('Ez a nap már foglalt');
            return;
        }

        setStartDate(value);
        setEndDate('');
    };

    const handleEnd = (e) => {
        const value = e.target.value;
        setError('');

        if (rangeHasBlockedDay(startDate, value, blockedDays)) {
            setError('A kiválasztott időszak foglalt napot tartalmaz');
            return;
        }

        setEndDate(value);
    };

    const foglal = () => {
        
    const egyNap = 1000 * 60 * 60 * 24;

    const kezdet = new Date(startDate);
    const vege = new Date(endDate);

    const berlesNapok = Math.max(
        1,
        Math.ceil((vege - kezdet) / egyNap)
    );

    const berles = {
        napiAr: napiAr,
        car: car,
        kezdet: startDate,
        vege: endDate,
        berlesNapok: berlesNapok
    }; 

    localStorage.setItem(
        "berles",
        JSON.stringify(berles)
    );

    window.location.href = "/fizetes";
    };

    return (
        <div className="data-block naptar-block">
            <h2>Foglalás</h2>

            {!foglalhato ? (
                <p className="not-available">Ez az autó nem foglalható.</p>
            ) : (
                <>
                    <div className="naptar-row">
                        <label>Kezdő dátum</label>
                        <input
                            type="date"
                            min={today}
                            value={startDate}
                            onChange={handleStart}
                        />
                    </div>

                    <div className="naptar-row">
                        <label>Vég dátum</label>
                        <input
                            type="date"
                            min={startDate || today}
                            value={endDate}
                            onChange={handleEnd}
                            disabled={!startDate}
                        />
                    </div>

                    {error && <p className="naptar-error">{error}</p>}

                    <button
                        className="foglalas-gomb"
                        disabled={!startDate || !endDate || error}
                        onClick={foglal}
                    >
                        Foglalás indítása
                    </button>
                </>
            )}
        </div>
    );
};

export default FoglalasiNaptar;
