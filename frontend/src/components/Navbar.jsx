import { Link } from 'react-router-dom';
import './Navbar.css';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const ertek = localStorage.getItem('isLoggedIn');
        const user = JSON.parse(localStorage.getItem('user'));
        setIsLoggedIn(ertek === '1');
        if (user) setIsAdmin(user.admin);
        else setIsAdmin(false);
    }, []);

    function kijelentkezes() {
        window.alert('Tényleg ki szeretnél jelentkezni?');
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');
        localStorage.setItem('isLoggedIn', 1);
        window.location.href = '/';
    }

   return (
  <nav className="navbar">
    <div className="nav-links">
      <Link to="/">Nyitó</Link>
      <Link to="/lead">Főoldal</Link>
      <Link to="/cars">Autók</Link>
      <Link to="/favouritecars">Kedvenc Autók</Link>
      <Link to="/policy">Bérleti Feltételek</Link>
    </div>

    <div className="nav-actions">
      {isAdmin && (
        <Link className="nav-badge" to="http://localhost:3500/api">
          Szerver
        </Link>
      )}

      {isLoggedIn ? (
        <div className="auth">
          <Link to="/register">Regisztráció</Link>
          <Link to="/login" id="bejelentkezes">Bejelentkezés</Link>
        </div>
      ) : (
        <div className="auth">
          <button onClick={kijelentkezes} id="kijelentkezes">
            Kijelentkezés
          </button>
        </div>
      )}
    </div>
  </nav>
);

}
export default Navbar;
