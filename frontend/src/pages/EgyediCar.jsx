import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FoglalasiNaptar from './Naptar';
// Feltételezve, hogy a fenti CSS ide van importálva:
import './EgyediCar.css'; 
import './valami.css'; 
import BerlesiFeltetlek from '../components/BerlesiFeltetlek';

// Segédkomponens (változatlan)
const DetailItem = ({ label, value, icon }) => (
    <li className="detail-item">
        <span className="detail-item-label">
            <span className="detail-item-icon">{icon}</span>
            {label}:
        </span>
        <span className="detail-item-value">{value}</span>
    </li>
);

const EgyediCar = () => {
    const { id } = useParams();
    const user = JSON.parse(localStorage.getItem('user'));

    const [car, setCar] = useState({});
    const [favCar, setFavCar] = useState([]);
    const [kepek, setKepek] = useState([]);
    const [kedvelem, setKedvelem] = useState('igen');

    useEffect(() => { 
        const userLeker = async () => { 
            const response = await fetch(`http://localhost:3500/api/users-frontend/${user._id}`);
            const userF = await response.json(); 
            setFavCar(userF.user.kedveltAutok);
            localStorage.setItem('favorites', JSON.stringify(userF.user.kedveltAutok));
        };
        
        userLeker();
    }, []);

    useEffect(() => {
        // ... (adatlekérő logika változatlan) ...
        const kocsiLeker = async () => {
            const response = await fetch(
                'http://localhost:3500/api/cars-frontend'
            );
            const adat = await response.json();
            const kocsi = adat.cars.filter((elem) => elem._id === id);

            if (response.ok) {
                setCar(kocsi[0]);
                setKepek(kocsi[0].kepek);
                let kedvelt = false;

                for (let i = 0; i < favCar.length; i++) {
                    console.log(favCar[i]);
                    console.log(kocsi[0]._id);
                    if (favCar[i]._id === kocsi[0]._id) {
                        kedvelt = true;
                    }   
                }
                
                kedvelt ? setKedvelem('igen') : setKedvelem('nem');
            } else {
                window.alert(adat.msg);
            }
        };
        kocsiLeker();
    }, [id, favCar]);

    useEffect(() => {
        if (kepek.length > 0) {
            showSlides();
        }
    }, [kepek]);

    let index = 1;

    function showSlides() {
        let slides = document.getElementsByClassName('mySlides');
        let dots = document.getElementsByClassName('dot');

        if (slides.length === 0) return; 
        
        if (index > slides.length) index = 1;
        if (index < 1) index = slides.length;

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' active', '');
        }

        slides[index - 1].style.display = 'block';
        dots[index - 1].className += ' active';
    }

    function plusSlides(n) {
        index += n;
        showSlides();
    }

    function currentSlide(n) {
        index = n;
        showSlides();
    }

    const slides = kepek.map((kepUrl, i) => (
        <div className="mySlides fade" key={i}>
            <div className="numbertext">{i + 1} / {kepek.length}</div>
            <img src={kepUrl} alt={`${car.marka} kép ${i + 1}`} style={{ width: '100%' }} />
        </div>
    ));

    const dots = kepek.map((_, i) => (
        <span className="dot" key={i} onClick={() => currentSlide(i + 1)}></span>
    ));

    const kedvelemAllitas = async (e) => { 
        setKedvelem(e.target.value);
        let tomb = favCar;
        let tombF = [];

        if (e.target.value === 'igen') tombF = [...tomb, car];
        else if (e.target.value === 'nem') {
            tombF = tomb.filter(elem => elem._id !== car._id);
        }
        console.log(tombF);
        

        const response = await fetch(`http://localhost:3500/api/users-frontend/${user._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ cars: tombF })
        })

        localStorage.setItem('favorites', JSON.stringify(tombF));
    };

    return (
        <div className="egyedi-car-kontener">
            <Navbar />
            <div className='valami'>
            <h1>{car.marka || 'Autó adatai'}</h1>
            </div>

            {/* 🔴 FELSŐ RÉSZ: KÉP + ADATOK */}
            <div className="car-top-layout">
                
                {/* ⬅️ BAL OLDAL – KÉP + LEÍRÁS */}
                {/* A .car-images konténer mostantól a bal oldali oszlopot jelenti, 
                   és flex-direction: column kell neki, hogy a kép és a leírás egymás alatt legyen. */}
                <div className="car-images column-container"> 
                    
                    {/* KÉP (SLIDESHOW) */}
                    <div className="slideshow-container">
                        {slides}

                        {kepek.length > 1 && (
                            <>
                                <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
                                <a className="next" onClick={() => plusSlides(1)}>❯</a>
                            </>
                        )}
                    </div>

                    {kepek.length > 1 && (
                        <div className="dot-container">
                            {dots}
                        </div>
                    )}

                    {/* LEÍRÁS - ÁT HELYEZVE A BAL OLDALRA */}
                    <div className="data-block leiras-block">
                        <h2>Leírás</h2>
                        <p className="text-gray-600 leading-relaxed italic">
                            {car.leiras || 'Nincs részletes leírás ehhez az autóhoz.'}
                        </p>
                    </div>

                </div>

                {/* ➡️ JOBB OLDAL – FŐBB ADATOK */}
                {/* A jobb oldalon most már csak a Főbb adatok maradnak. */}
                <div className="lg:col-span-1 data-column"> 
                    
                    {/* FŐBB ADATOK */}
                    <div className="data-block">
                        <h2>Főbb adatok</h2>
                        <ul>
                            <DetailItem label="Szín" value={car.szin || 'N/A'} icon="🎨" />
                            <DetailItem label="Üzemanyag" value={car.uzemanyag || 'N/A'} icon="⛽" />
                            <DetailItem label="Váltó" value={car.valto || 'N/A'} icon="⚙️" />
                            <DetailItem
                                label="Teljesítmény"
                                value={`${car.teljesitmeny || 'N/A'} LE`}
                                icon="🚀"
                            />
                            <DetailItem
                                label="Urtartalom"
                                value={`${car.urtartalom || 'N/A'} cm³`}
                                icon="🏎️"
                            />
                            <DetailItem
                                label="Származási ország"
                                value={car.szarmazasiorszag || 'N/A'}
                                icon="🌍"
                            />
                            <DetailItem
                                label="Foglalható"
                                value={car.foglalhatoe ? 'Igen' : 'Nem'}
                                icon={car.foglalhatoe ? '✅' : '❌'}
                            />
                            <DetailItem
                                label="Ár"
                                value={`${car.ar || 'N/A'} FT`}
                            />
                        </ul>
                    </div>
                    {user ? 
                    
                   <div className="like-container">
  <label className={`like-option ${kedvelem === 'igen' ? 'active like' : ''}`}>
    <input
      type="radio"
      name="szeretem"
      value="igen"
      checked={kedvelem === 'igen'}
      onChange={kedvelemAllitas}
    />
    ❤️ Kedvelem
  </label>

  <label className={`like-option ${kedvelem === 'nem' ? 'active dislike' : ''}`}>
    <input
      type="radio"
      name="szeretem"
      value="nem"
      checked={kedvelem === 'nem'}
      onChange={kedvelemAllitas}
    />
    💔 Nem kedvelem
  </label>
</div> :  <></>}

                        {/* { kedvelem === 'igen' ? 
                        : 
                            <div>
                                <input type="radio" name="szeretem" value="igen" onChange={kedvelemAllitas} />
                                <label htmlFor="igen">Kedvelem</label>
                                <input type="radio" name="szeretem" value="nem" checked={kedvelem ==='nem'} onChange={kedvelemAllitas} />
                                <label htmlFor="nem">Nem kedvelem</label>
                            </div>
                         } */}
                    <FoglalasiNaptar
                        foglalhato={car.foglalhatoe}
                        car={car}
                        napiAr={car.ar}
                    />
                </div>
            </div>

            {/* ALUL */}
            <BerlesiFeltetlek />
        </div>
    );
};


export default EgyediCar;