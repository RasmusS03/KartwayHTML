import React from "react";
import {NavLink, Link} from "react-router-dom";
import App from "../App.jsx";

function Header ({selectedCity}) {
    const getBackgroundColor = () => {
        switch (selectedCity) {
            case "Piteå":
                return "#d11111";
            case "Skellefteå":
                return "#ffab00";
            case "Luleå":
                return "green";
            default:
                return "#d11111";
        }
    };

        const headerStyle = {
            backgroundColor: getBackgroundColor(),
            transition: "background-color 0.3s ease",
        };

        return (
            <header style={headerStyle}>
                <NavLink to="/">
                    <img src="src/assets/logo.png" alt="Kartway logga" className="logo"/>
                </NavLink>
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
                        <li><NavLink to="/bokning">Boka</NavLink></li>
                        <li><NavLink to="/statistik">Statistik</NavLink></li>
                        <li><NavLink to="/om">Om oss</NavLink></li>
                        <li><NavLink to="/profil">
                            <img src="src/assets/pfp.png" alt="Profil" className="profile"/>
                        </NavLink></li>
                    </ul>
                </nav>
            </header>
        )

}

export default Header;