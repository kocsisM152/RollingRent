import React, { useState, useEffect, useCallback } from 'react';

// A 'react-router-dom' importot és a 'useParams' használatát kommentáljuk,
// mivel ez egy önálló fájlban nem futtatható router környezet nélkül.
// const { id } = useParams();
// Helyette egy MOCK ID-t használunk a szimulációhoz:
const MOCK_CAR_ID = '68fb1ee929a6e6c367e6235c'; // Audi A8

// --- MOCK ADATOK A SIMULÁCIÓHOZ (valós API hívás helyett) ---
const MOCK_CARS = [
    {
        _id: '68fb1ee929a6e6c367e6235c',
        marka: 'Audi',
        tipus: 'Audi A8',
        leiras: 'Jó kis kocsi ez!',
        ar: 133539,
        kepek: [
            'https://placehold.co/1200x675/1e40af/ffffff?text=AUDI+A8+K%C3%A9p+1',
            'https://placehold.co/1200x675/3b82f6/ffffff?text=AUDI+A8+K%C3%A9p+2',
            'https://placehold.co/1200x675/9333ea/ffffff?text=AUDI+A8+K%C3%A9p+3',
        ],
        evjarat: 2021,
        szarmazasiorszag: 'Németország',
        uzemanyag: 'benzin',
        szin: 'szürke',
        valto: 'automata',
        urtartalom: 2967,
        teljesitmeny: 340,
        foglalhatoe: true,
        kedvezmeny: 20,
        berlesifeltetelek:'Betöltött 28. életév és 8 éves B-kategóriás jogosítvány,Érvényes személyi igazolvány és lakcímkártya vagy útlevél,Bármely típusú gépkocsi esetén szükséges 1.000.000,- Ft kaució letétele. A kauciót legkésőbb az autó átadásakor kell letétbe helyezni, és a gépkocsi épségben, szerződésnek megfelelő állapotban történő visszaadásakor fizetjük vissza,A kaució bankkártyás fizetéssel, banki deposit formájában vagy készpénzes fizetéssel is teljesíthető' ,
    },
    {
        _id: '68fb1f8129a6e6c367e6235f',
        marka: 'BMW',
        tipus: 'BMW M4',
        leiras: 'Ez is nagyon jó kis kocsi!',
        ar: 209847,
        kepek: [
            'https://placehold.co/1200x675/dc2626/ffffff?text=BMW+M4+K%C3%A9p+1',
            'https://placehold.co/1200x675/f59e0b/ffffff?text=BMW+M4+K%C3%A9p+2',
            'https://placehold.co/1200x675/10b981/ffffff?text=BMW+M4+K%C3%A9p+3',
        ],
        evjarat: 2020,
        szarmazasiorszag: 'Németország',
        kedvezmeny: 0,
        szin: 'fekete',
        teljesitmeny: '510',
        urtartalom: '2993',
        valto: 'autómata',
        uzemanyag: 'benzin',
        foglalhatoe: true,
    },
];
// -------------------------------------------------------------------------

/**
 * ImageCarousel Komponens
 * Kezeli az automatikus és manuális képváltást.
 * @param {object} props - A komponens tulajdonságai
 * @param {string[]} props.images - Képek URL-jeinek tömbje
 */
const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideInterval = 5000; // 5 másodperces váltási idő

    // Képváltó logika (következő indexre lép)
    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    }, [images.length]);

    // Automatikus képváltás beállítása
    useEffect(() => {
        if (images.length > 1) {
            // Itt indul az automatikus váltás
            const interval = setInterval(nextSlide, slideInterval);
            return () => clearInterval(interval); // Tisztítás (amikor a komponens eltűnik vagy a függőségek változnak)
        }
    }, [images.length, nextSlide]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    if (!images || images.length === 0) {
        return (
            <div className="bg-gray-100 p-8 rounded-lg text-center text-gray-500">
                Nincsenek képek ehhez az autóhoz.
            </div>
        );
    }

    const currentImage = images[currentIndex];

    return (
        <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-2xl transition-all duration-500">
            <img
                key={currentIndex}
                src={currentImage}
                alt={`Autó kép ${currentIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
                // Hiba esetén placeholder kép
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/1200x675/6b7280/ffffff?text=Bet%C3%B6lt%C3%A9si+Hiba`;
                }}
            />

            {/* Navigációs nyilak */}
            {images.length > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        aria-label="Előző kép"
                        // Tailwind-alapú stílusok a régi egyedi class helyett
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 text-gray-800 p-3 rounded-full shadow-lg transition duration-300 z-10 focus:outline-none focus:ring-4 focus:ring-indigo-500 hover:scale-110"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 19l-7-7 7-7"
                            ></path>
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        aria-label="Következő kép"
                        // Tailwind-alapú stílusok a régi egyedi class helyett
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 text-gray-800 p-3 rounded-full shadow-lg transition duration-300 z-10 focus:outline-none focus:ring-4 focus:ring-indigo-500 hover:scale-110"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                            ></path>
                        </svg>
                    </button>

                    {/* Navigációs pontok */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                aria-label={`Váltás a(z) ${idx + 1}. képre`}
                                className={`w-3 h-3 rounded-full transition-all duration-300 
                  ${
                      idx === currentIndex
                          ? 'bg-indigo-600 w-5 ring-2 ring-indigo-500 ring-opacity-50' // Használjuk a ring-et a dot-active helyett
                          : 'bg-white/70 hover:bg-white'
                  }`}
                            ></button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

/**
 * CarDetail Komponens (korábbi EgyediCar)
 * Felelős az adatok betöltéséért és a fő nézet megjelenítéséért.
 */
const CarDetail = () => {
    // const { id } = useParams(); // Ezt a sort lecseréljük a mock ID-re az önálló futtatáshoz
    const id = MOCK_CAR_ID;

    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const kocsiLeker = async () => {
            setLoading(true);
            // Mivel a fetch a localhost:3500-ra nem működne ebben a környezetben,
            // szimuláljuk a szűrést a mock adatokból.
            try {
                await new Promise((resolve) => setTimeout(resolve, 500)); // Szimulált hálózati késleltetés

                // Megkeressük a MOCK adatok között a megfelelő autót.
                const egy = MOCK_CARS.find((elem) => elem._id === id);

                if (egy) {
                    setCar(egy);
                    setError(null);
                } else {
                    setError('Autó nem található a megadott azonosítóval.');
                    setCar(null);
                }
            } catch (e) {
                setError('Hiba történt az adatok betöltésekor.');
            } finally {
                setLoading(false);
            }
        };

        kocsiLeker();
    }, [id]); // Függőségként az 'id' szerepel (ami most a mock ID)

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-50">
                <div className="text-xl font-semibold text-indigo-600 animate-pulse">
                    Adatok betöltése...
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-md">
                    <p className="font-bold">Hiba!</p>
                    <p>{error}</p>
                </div>
            </div>
        );
    }

    if (!car) return null; // Soha nem szabad ide jutni a hibakezelés miatt, de biztonságból

    // A kerekítéshez: az 'ar' mező számként van kezelve.
    const formattedPrice =
        car.ar && typeof car.ar === 'number'
            ? car.ar.toLocaleString('hu-HU', {
                  style: 'currency',
                  currency: 'HUF',
                  maximumFractionDigits: 0,
              })
            : `${car.ar || 'N/A'} Ft`;

    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-8 lg:p-12 font-sans">
            {/* Eltávolítottam a main-card osztályt és a custom animációt, hogy megbízhatóbb legyen a stílus. */}
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-500">
                {/* Fő tartalom fejléc */}
                <div className="p-6 sm:p-10 border-b border-gray-100">
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-2 leading-tight">
                        {car.marka}{' '}
                        <span className="text-indigo-600">{car.tipus}</span>
                    </h1>
                    <p className="text-xl text-gray-500">
                        Évjárat: {car.evjarat || 'N/A'} | Ár:{' '}
                        <span className="font-bold text-green-600">
                            {formattedPrice}
                        </span>
                        {/* Az árnyék (price-highlight) egyedi CSS volt, amit eltávolítottam a jobb kompatibilitás érdekében. */}
                    </p>
                </div>

                {/* Képgaléria és Részletek */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 sm:p-10">
                    {/* 1. Képgaléria (2/3 szélesség nagy képernyőn) */}
                    <div className="lg:col-span-2">
                        <ImageCarousel images={car.kepek || []} />
                    </div>

                    {/* 2. Autó adatai (1/3 szélesség nagy képernyőn) */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-indigo-50 p-6 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-bold text-indigo-800 mb-4 border-b pb-2 border-indigo-200">
                                Főbb adatok
                            </h2>
                            <ul className="space-y-3 text-gray-700">
                                <DetailItem
                                    label="Szín"
                                    value={car.szin || 'N/A'}
                                    icon="🎨"
                                />
                                <DetailItem
                                    label="Üzemanyag"
                                    value={car.uzemanyag || 'N/A'}
                                    icon="⛽"
                                />
                                <DetailItem
                                    label="Váltó"
                                    value={car.valto || 'N/A'}
                                    icon="⚙️"
                                />
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
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">
                                Leírás
                            </h2>
                            <p className="text-gray-600 leading-relaxed italic">
                                {car.leiras ||
                                    'Nincs részletes leírás ehhez az autóhoz.'}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Akció gomb */}
                <div className="p-6 sm:p-10 bg-gray-100 flex justify-center">
                    <button
                        disabled={!car.foglalhatoe}
                        className={`px-8 py-4 text-xl font-bold rounded-full shadow-2xl transform transition-all duration-300 
              ${
                  car.foglalhatoe
                      ? 'bg-green-600 text-white hover:bg-green-700 active:scale-95'
                      : 'bg-gray-400 text-gray-700 cursor-not-allowed'
              }`}
                    >
                        {car.foglalhatoe
                            ? 'Autó Foglalása'
                            : 'Jelenleg nem foglalható'}
                    </button>
                </div>
            </div>
        </div>
    );
};

// Segédkomponens a részletekhez
const DetailItem = ({ label, value, icon }) => (
    <li className="flex justify-between items-center text-base">
        <span className="font-medium flex items-center">
            <span className="mr-2 text-xl">{icon}</span> {label}:
        </span>
        <span className="text-gray-800 font-semibold">{value}</span>
    </li>
);

// Fő export
export default CarDetail;
