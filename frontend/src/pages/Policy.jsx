import React, { useState } from 'react';
import './Policy.css'; // Ellenőrizd, hogy a fájlnév pontosan ez-e!
import Navbar from '../components/Navbar';

const Policy = () => {
  const [language, setLanguage] = useState('hu');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'hu' ? 'en' : 'hu'));
  };

  const huContent = (
    <div className="policy-fade-in">
      <h1 className="policy-title">BÉRLETI FELTÉTELEK ÉS SZABÁLYZAT (ÁSZF)</h1>
      <p className="policy-lead">Üdvözöljük a RollingRent ügyfelei között! Kérjük, olvassa el az alábbi szabályzatot.</p>
      
      <div className="policy-grid-system">
        <section className="policy-block">
          <h3>1. Bérlési feltételek</h3>
          <ul>
            <li><strong>Életkor:</strong> Minimum 18 év (25 év alatt pótdíj).</li>
            <li><strong>Jogosítvány:</strong> Legalább 1 éves érvényes okmány.</li>
            <li><strong>Azonosítás:</strong> Útlevél vagy személyi igazolvány.</li>
          </ul>
        </section>

        <section className="policy-block">
          <h3>2. Kaució (Biztonsági letét)</h3>
          <ul>
            <li><strong>Összeg:</strong> 200.000 Ft a bérlés megkezdésekor.</li>
            <li><strong>Fizetés:</strong> Bankkártyás zárolás vagy készpénz.</li>
            <li><strong>Visszatérítés:</strong> Leadáskor, ha az autó sértetlen.</li>
          </ul>
        </section>

        <section className="policy-block">
          <h3>3. Felelősségvállalás</h3>
          <ul>
            <li><strong>Felelősség:</strong> A Bérlő teljes anyagi felelősséggel tartozik.</li>
            <li><strong>Önrész:</strong> Saját hibás kár esetén fizetendő.</li>
            <li><strong>Kivételek:</strong> Gumiabroncs, üveg és utastér sérülései.</li>
          </ul>
        </section>

        <section className="policy-block">
          <h3>4. Üzemanyag</h3>
          <ul>
            <li><strong>Szabály:</strong> Teli tankkal adjuk át, teli tankkal kérjük vissza.</li>
            <li><strong>Díj:</strong> Hiány esetén üzemanyag ár + 5.000 Ft szervizdíj.</li>
          </ul>
        </section>

        <section className="policy-block">
          <h3>5. Késedelmi díjak</h3>
          <ul>
            <li><strong>Türelmi idő:</strong> 60 perc a visszahozatalkor.</li>
            <li><strong>Pótdíj:</strong> 1 órát meghaladó késés esetén +1 napi bérleti díj.</li>
          </ul>
        </section>

        <section className="policy-block">
          <h3>6. Használati szabályok</h3>
          <ul>
            <li><strong>Dohányzás:</strong> Szigorúan TILOS (50.000 Ft tisztítási díj).</li>
            <li><strong>Külföld:</strong> Csak előzetes írásos engedéllyel.</li>
          </ul>
        </section>
      </div>

      <footer className="policy-footer-box">
        <p><strong>Bírságok:</strong> Minden szabálysértési bírság a Bérlőt terheli + 10.000 Ft adminisztrációs díj.</p>
      </footer>
    </div>
  );

  const enContent = (
    <div className="policy-fade-in">
      <h1 className="policy-title">CAR RENTAL TERMS AND CONDITIONS</h1>
      <p className="policy-lead">Welcome to RollingRent. Please review our policy below for a safe rental experience.</p>
      
      <div className="policy-grid-system">
        <section className="policy-block">
          <h3>1. Renter's Eligibility</h3>
          <ul>
            <li><strong>Age:</strong> Min. 18 years (surcharge for under 25).</li>
            <li><strong>License:</strong> Valid for at least 1 year.</li>
            <li><strong>ID:</strong> Passport or national ID required.</li>
          </ul>
        </section>

        <section className="policy-block">
          <h3>2. Security Deposit</h3>
          <ul>
            <li><strong>Amount:</strong> 200.000 Ft at the start.</li>
            <li><strong>Payment:</strong> Credit card block or cash.</li>
            <li><strong>Refund:</strong> Fully refundable if the car is returned intact.</li>
          </ul>
        </section>

        <section className="policy-block">
          <h3>3. Responsibility</h3>
          <ul>
            <li><strong>Liability:</strong> Renter is fully responsible for all damages.</li>
            <li><strong>Excess:</strong> Deductible amount payable in case of fault.</li>
            <li><strong>Exclusions:</strong> Tires, glass, and interior are not covered.</li>
          </ul>
        </section>

        <section className="policy-block">
          <h3>4. Fuel Policy</h3>
          <ul>
            <li><strong>Full-to-Full:</strong> Vehicle delivered full and must return full.</li>
            <li><strong>Fee:</strong> Missing fuel + 5.000 Ft service charge.</li>
          </ul>
        </section>

        <section className="policy-block">
          <h3>5. Late Return Fees</h3>
          <ul>
            <li><strong>Grace Period:</strong> 60 minutes.</li>
            <li><strong>Charges:</strong> More than 1 hour late = 1 additional day fee.</li>
          </ul>
        </section>

        <section className="policy-block">
          <h3>6. Usage Rules</h3>
          <ul>
            <li><strong>No Smoking:</strong> Strictly prohibited (50.000 Ft cleaning fee).</li>
            <li><strong>Borders:</strong> Written consent required for crossing borders.</li>
          </ul>
        </section>
      </div>

      <footer className="policy-footer-box">
        <p><strong>Fines:</strong> Renter is responsible for all fines + 10.000 Ft admin fee.</p>
      </footer>
    </div>
  );

  return (
    <>
    <Navbar />
    <div className="policy-main-wrapper">
      <div className="policy-outer-container">
        <div className="policy-btn-center">
          <button className="policy-switch-btn" onClick={toggleLanguage}>
            {language === 'hu' ? 'Switch to English' : 'Váltás magyarra'}
          </button>
        </div>
        {language === 'hu' ? huContent : enContent}
      </div>
    </div>
    </>
  );
};

export default Policy;