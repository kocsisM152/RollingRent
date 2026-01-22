// // import './LeadPage.css';
// // import Navbar from '../components/Navbar';

// // const LeadPage = () => {
// //     return (
// //         <div className="lead-kontener">
// //             <Navbar />
// //             <div>
// //                 <h1>lead</h1>
// //             </div>
// //         </div>
// //     );
// // };

// // export default LeadPage;

// import React from 'react';
// import Navbar from '../components/Navbar';

// const LeadPage = () => {
//     return (
//         <div className="lead-container">
//             <Navbar />
//             <section className="hero-section">
//                 <h1>Welcome to RollingRent</h1>
//                 <p>Your trusted platform for car rentals with ease and convenience.</p>
//             </section>

//             <section className="about-section">
//                 <h2>About RollingRent</h2>
//                 <p>
//                     RollingRent is a modern platform designed to simplify car rentals, offering a wide selection of vehicles and an easy-to-use interface for a hassle-free experience. Whether you're looking for a quick city drive or an adventure getaway, we've got the perfect car for you.
//                 </p>
//             </section>

//             <section className="image-gallery">
//                 <h2>Explore Our Fleet</h2>
//                 <div className="image-container">
//                     <img src="path-to-image-1.jpg" alt="Car 1" />
//                     <img src="path-to-image-2.jpg" alt="Car 2" />
//                     <img src="path-to-image-3.jpg" alt="Car 3" />
//                 </div>
//             </section>

//             <section className="features-section">
//                 <h2>Why Choose Us?</h2>
//                 <ul>
//                     <li>Wide variety of vehicles to suit every need.</li>
//                     <li>Flexible rental plans tailored to your schedule.</li>
//                     <li>Easy online booking with instant confirmation.</li>
//                     <li>Top-notch customer support for a seamless experience.</li>
//                 </ul>
//             </section>
//         </div>
//     );
// };

// export default LeadPage;

// import './LeadPage.css';
// import Navbar from '../components/Navbar';

// const LeadPage = () => {
//     return (
//         <div className="lead-container">
//             <Navbar />
//             <section className="hero-section">
//                 <h1>Welcome to RollingRent</h1>
//                 <p>Your trusted platform for car rentals made easy and affordable.</p>
//             </section>

//             <section className="about-section">
//                 <h2>About RollingRent</h2>
//                 <p>
//                     RollingRent is a platform designed to make car rentals easier, more affordable, and more flexible. 
//                     Whether you're looking for a compact car for city driving or an SUV for a weekend getaway, RollingRent offers a wide range of vehicles to choose from.
//                 </p>
//             </section>

//             <section className="image-gallery">
//                 <h2>Explore Our Cars</h2>
//                 <div className="image-container">
//                     <img src="path-to-your-image-1.jpg" alt="Car 1" />
//                     <img src="path-to-your-image-2.jpg" alt="Car 2" />
//                     <img src="path-to-your-image-3.jpg" alt="Car 3" />
//                 </div>
//             </section>

//             <section className="features-section">
//                 <h2>Why Choose RollingRent?</h2>
//                 <ul>
//                     <li>Wide range of vehicles to suit all your needs.</li>
//                     <li>Flexible rental plans, from daily to monthly rentals.</li>
//                     <li>Simple online booking with instant confirmation.</li>
//                     <li>Top-notch customer support available anytime.</li>
//                 </ul>
//             </section>
//         </div>
//     );
// };

// export default LeadPage;

import { useState } from 'react';
import './LeadPage.css';
import Navbar from '../components/Navbar';
import Nissan from '../../public/images/Nissan GTR R25.jpg';
import Porsche from '../../public/images/Porsche 718 Cayman GT4.jpg';
import Lamborghini from '../../public/images/Lamborghini Huracan Evo.jpg';

const texts = {
    en: {
        welcome: "Welcome to RollingRent",
        subtitle: "Your trusted platform for car rentals made easy and affordable.",
        aboutTitle: "About RollingRent",
        aboutText:
            "RollingRent is a platform designed to make car rentals easier, more affordable, and more flexible. Whether you're looking for a compact car for city driving or an SUV for a weekend getaway, RollingRent offers a wide range of vehicles to choose from.",
        explore: "Explore Our Cars",
        why: "Why Choose RollingRent?",
        features: [
            "Wide range of vehicles to suit all your needs.",
            "Flexible rental plans, from daily to monthly rentals.",
            "Simple online booking with instant confirmation.",
            "Top-notch customer support available anytime."
        ],
        huBtn: "Hungarian",
        enBtn: "English"
    },
    hu: {
        welcome: "Üdvözlünk a RollingRent oldalán",
        subtitle: "Megbízható platform az egyszerű és megfizethető autóbérléshez.",
        aboutTitle: "A RollingRentről",
        aboutText:
            "A RollingRent egy olyan platform, amely megkönnyíti, megfizethetőbbé és rugalmasabbá teszi az autóbérlést. Legyen szó városi közlekedéshez keresett kisautóról vagy egy hétvégi kiruccanáshoz szükséges SUV-ról, nálunk széles választék áll rendelkezésre.",
        explore: "Autóink",
        why: "Miért válaszd a RollingRentet?",
        features: [
            "Széles járműválaszték minden igényre.",
            "Rugalmas bérlési lehetőségek, napi vagy havi konstrukciók.",
            "Egyszerű online foglalás azonnali visszaigazolással.",
            "Kiemelkedő ügyfélszolgálat bármikor."
        ],
        huBtn: "Magyar",
        enBtn: "Angol"
    }
};

const LeadPage = () => {
    const [lang, setLang] = useState("en");
    const t = texts[lang];

    return (
        <div className="lead-container">
            <Navbar />

            {/* Language buttons */}
            <div className="language-switch">
                <button onClick={() => setLang("hu")}>{t.huBtn}</button>
                <button onClick={() => setLang("en")}>{t.enBtn}</button>
            </div>

            <section className="hero-section">
                <h1>{t.welcome}</h1>
                <p>{t.subtitle}</p>
            </section>

            <section className="about-section">
                <h2>{t.aboutTitle}</h2>
                <p>{t.aboutText}</p>
            </section>

            <section className="image-gallery">
                <h2>{t.explore}</h2>
                <div className="image-container">
                    <img src={Nissan} alt="Nissan GTR" className="car-image" />
                    <img src={Porsche} alt="Porsche GT4" className="car-image" />
                    <img src={Lamborghini} alt="Lamborghini Huracan" className="car-image" />
                </div>
            </section>

            <section className="features-section">
                <h2>{t.why}</h2>
                <ul>
                    {t.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default LeadPage;

