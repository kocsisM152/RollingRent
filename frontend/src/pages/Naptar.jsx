import { useEffect, useState } from 'react';
import "./Naptar.css";
import { formatDate, getDaysBetween, rangeHasBlockedDay } from "../utils/dateUtils";

const FoglalasiNaptar = ({ foglalhato, carId }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [blockedDays, setBlockedDays] = useState([]);
    const [error, setError] = useState('');

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
        const belepve = localStorage.getItem('isLoggedIn');
        const kDatum = startDate;
        const vDatum = endDate;
        localStorage.setItem('kdatum', JSON.stringify(kDatum));
        localStorage.setItem('vdatum', JSON.stringify(vDatum));
        
        if (belepve === '1') window.alert("Kérjük jelentkezzen be!");

        window.location.href = `/foglalas/${carId}`;
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
