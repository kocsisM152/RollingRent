import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Cars from './pages/Cars';
import Home from './pages/Home';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/cars"
                    element={<Cars />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
