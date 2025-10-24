import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <Link to="/">Főoldal</Link>
            <Link to="/cars">Autók</Link>
        </div>
    );
};

export default Navbar;
