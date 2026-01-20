import React from 'react';

const PaymentCancel = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.icon}>❌</div>
        <h1 style={styles.title}>Sikertelen fizetés</h1>
        <p style={styles.text}>
          Sajnáljuk, de a tranzakciót a bank **elutasította**. 
          Kérjük, ellenőrizd a kártyaadatokat vagy az egyenlegedet.
        </p>
        <p style={styles.subText}>
          Ne aggódj, a kosarad tartalmát elmentettük, így újra megpróbálhatod a fizetést.
        </p>
        
        <div style={styles.buttonGroup}>
          <button 
            onClick={() => window.location.href = '/checkout'} 
            style={styles.retryButton}
          >
            Újra próbálom
          </button>
          <button 
            onClick={() => window.location.href = '/'} 
            style={styles.homeButton}
          >
            Vissza a főoldalra
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#fff5f5', // Halvány pirosas háttér
    fontFamily: 'sans-serif',
  },
  card: {
    textAlign: 'center',
    padding: '40px',
    borderRadius: '12px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 15px rgba(220, 53, 69, 0.15)',
    maxWidth: '500px',
  },
  icon: {
    fontSize: '50px',
    marginBottom: '20px',
  },
  title: {
    color: '#dc3545', // Hibajelző piros
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
    fontStyle: 'italic',
  },
  buttonGroup: {
    marginTop: '25px',
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
  },
  retryButton: {
    padding: '12px 24px',
    fontSize: '16px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  homeButton: {
    padding: '12px 24px',
    fontSize: '16px',
    backgroundColor: '#6c757d',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  }
};

export default PaymentCancel;