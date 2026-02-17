import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-background">
            <div className="menu">
                <Link to="/lead">Főoldal</Link>
                <Link to="/cars" id="autok">Autók</Link>
            </div>

            <div className="home-kontener">RollingRent Autókölcsönző</div>
        </div>
    );
};

export default Home;
