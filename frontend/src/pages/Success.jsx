import React from 'react';
import { useEffect } from 'react';

const Success = () => {
    // Egyszerű inline stílusok, hogy azonnal jól nézzen ki
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
    fontFamily: 'sans-serif',
  },
  card: {
    textAlign: 'center',
    padding: '40px',
    borderRadius: '12px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    maxWidth: '500px',
  },
  icon: {
    fontSize: '50px',
    marginBottom: '20px',
  },
  title: {
    color: '#28a745',
    marginBottom: '15px',
  },
  text: {
    fontSize: '18px',
    color: '#333',
    lineHeight: '1.5',
  },
  subText: {
    fontSize: '14px',
    color: '#666',
    marginTop: '10px',
  },
  button: {
    marginTop: '25px',
    padding: '12px 24px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  }
};
// A Success.jsx-ben
    useEffect(() => {
  const carId = localStorage.getItem("selectedCarId"); // Tegyük fel, ide mentetted el
  
  if (carId) {
    fetch(`http://localhost:3500/api/cars/${carId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ foglalhato: false }) // Átállítjuk hamisra
    })
    .then(res => console.log("Státusz frissítve"))
    .catch(err => console.error("Hiba a frissítéskor", err));
  }
}, []);
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.icon}>✅</div>
        <h1 style={styles.title}>Köszönjük a vásárlást!</h1>
        <p style={styles.text}>
          A rendelésedet sikeresen rögzítettük. Hamarosan küldünk egy 
          <strong> visszaigazoló e-mailt</strong> a részletekkel.
        </p>
        <button 
          onClick={() => window.location.href = '/'} 
          style={styles.button}
        >
          Vissza a főoldalra
        </button>
      </div>
    </div>
  );
}



export default Success;