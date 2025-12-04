import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Cars from './pages/Cars';
import Home from './pages/Home';
import LeadPage from './pages/LeadPage';
import Login from './pages/Login';
import Register from './pages/Register';
import EgyediCar from './pages/EgyediCar';

function App() {
    return (
        <BrowserRouter>
            {/* <Navbar /> */}
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/lead"
                    element={<LeadPage />}
                />
                <Route
                    path="/cars"
                    element={<Cars />}
                />
                <Route
                    path="/egyedi-car/:id"
                    element={<EgyediCar />}
                />
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="/register"
                    element={<Register />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
