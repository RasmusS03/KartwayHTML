import React from "react";
import App from "../App.jsx";

class Header extends React.Component {
    render() {
        return (
            <header>
                <a href="src/index.html">
                    <img src="src/assets/logo.png" alt="Kartway logga" className="logo"/>
                </a>
                <div className="dropdown">
                    <button id="dropdownBtn">Välj stad</button>
                    <div className="dropdown-content" id="dropdownContent">
                        <a href="#" data-city="Piteå">Piteå</a>
                        <a href="#" data-city="Luleå">Luleå</a>
                        <a href="#" data-city="Skellefteå">Skellefteå</a>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li><a href="bokning.html">Boka</a></li>
                        <li><a href="statistik.html">Statistik</a></li>
                        <li><a href="om.html">Om oss</a></li>
                        <li><a href="profil.html">
                            <img src="src/assets/pfp.png" alt="Profil" className="profile"/>
                        </a></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;