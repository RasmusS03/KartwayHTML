import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home.jsx";
import Om from "./pages/Om.jsx";
import Profil from "./pages/Profil.jsx";
import Statistik from "./pages/Statistik.jsx";
import Bokning from "./pages/Bokning.jsx";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";


import './App.css'

function App() {
    const [selectedCity, setSelectedCity] = useState(null);

    return(
        <div>
            <Router>
                <Header selectedCity={selectedCity} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/bokning" element={<Bokning />} />
                    <Route path="/statistik" element={<Statistik />} />
                    <Route path="/om" element={<Om />} />
                    <Route path="/profil" element={<Profil />} />
                </Routes>
                <Footer setSelectedCity={setSelectedCity} />
            </Router>
        </div>
  )
}

export default App
