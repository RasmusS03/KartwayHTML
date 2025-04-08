import React from "react";
import {NavLink, Link} from "react-router-dom";
import App from "../App.jsx";

function Footer({ setSelectedCity }) {
  const handleCityClick = (city) => {
    setSelectedCity(city);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Snabblänkar</h4>
          <ul>
            <li>
              <NavLink to="index">Hem</NavLink>
            </li>
            <li>
              <NavLink to="bokning">Boka</NavLink>
            </li>
            <li>
              <NavLink to="om">Om oss</NavLink>
            </li>
            <li>
              <NavLink to="statistik">Statistik</NavLink>
            </li>
            <li>
              <NavLink to="profil">Profil</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Platser</h4>
          <ul>
            <li>
              <a href="#" onClick={() => handleCityClick('Piteå')}>
                Piteå
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleCityClick('Luleå')}>
                Luleå
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleCityClick('Skellefteå')}>
                Skellefteå
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Drop-In</h4>
          <p>Öppet nu</p>
          <p>stänger om X minuter</p>
        </div>

        <div className="footer-section">
          <h4>Kontakt</h4>
          <p>Email: info@kartway.se</p>
          <p>Telefon: 070-123 45 67</p>
          <p>Adress: Kartvägen 12, Stockholm</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Kartway</p>
      </div>
    </footer>
  );
}

export default Footer;