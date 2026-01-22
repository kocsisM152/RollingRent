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
        <div className="navbar-kontener">
            <Link to="/">Nyitó</Link>
            <Link to="/lead">Főoldal</Link>
            <Link to="/cars">Autók</Link>
            <Link to="/favouritecars">Kedvenc Autók</Link>
            <Link to="/policy">Bérleti Feltételek</Link>
            {isLoggedIn ? (
                <div className="login-belso-kontener">
                    <Link to="/register">Regisztráció</Link>
                    <Link to="/login">Bejelentkezés</Link>
                </div>
            ) : (
                <div className="logout-kontener">
                    <button onClick={kijelentkezes}>Kijelentkezés</button>
                </div>
            )}
            {isAdmin ? (
                <div className="backend-nav">
                    <Link to="http://localhost:3500/api">Szerver</Link>
                </div>
            ) : (
                <div className="backend-nav"></div>
            )}
        </div>
    );
};

export default Navbar;
