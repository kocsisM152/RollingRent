import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Cars from "./pages/Cars";
import Home from "./pages/Home";
import LeadPage from "./pages/LeadPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EgyediCar from "./pages/EgyediCar";
import Foglalas from "./pages/Foglalas";
import Fizetes from "./pages/Fizetes";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lead" element={<LeadPage />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/egyedi-car/:id" element={<EgyediCar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/foglalas/:id" element={<Foglalas />} />
        <Route path="/fizetes" element={<Fizetes />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
