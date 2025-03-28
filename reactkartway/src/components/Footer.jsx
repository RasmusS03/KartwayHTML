import React from "react";
import App from "../App.jsx";

class Footer extends React.Component {
    render() {
        return (

            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-section">
                        <h4>Snabblänkar</h4>
                        <ul>
                            <li><a href="index.html">Hem</a></li>
                            <li><a href="bokning.html">Boka</a></li>
                            <li><a href="om.html">Om oss</a></li>
                            <li><a href="statistik.html">Statistik</a></li>
                            <li><a href="profil.html">Profil</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Platser</h4>
                        <ul>
                            <li><a href="#">Piteå</a></li>
                            <li><a href="#">Luleå</a></li>
                            <li><a href="#">Skellefteå</a></li>
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
        )
    }
}

export default Footer;