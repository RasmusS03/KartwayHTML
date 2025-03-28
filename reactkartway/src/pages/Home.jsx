import React from "react";



class Home extends React.Component {
    render() {
        return (
            <div>
                {/* Hero Video Sektion */}
                <section className="hero">
                    <video autoPlay muted loop playsInline className="hero-video">
                        <source src="src/assets/gkfootage.mp4" type="video/mp4" />
                        Din webbläsare stöder inte videouppspelning.
                    </video>
                    <div className="hero-overlay"></div>
                    <div className="hero-content">
                        <h2>Välkommen till</h2>
                        <h1>Kartway</h1>
                        <p>Din lokala gokartbana</p>
                        <a href="bokning.html" className="hero-button">
                            Boka nu
                        </a>
                    </div>
                </section>

                {/* Drop-In Sektion */}
                <section className="drop-in-container">
                    <div className="drop-in-header">
                        <h2>Drop-In</h2>
                    </div>
                </section>
                <section className="drop-in-content">
                    <div className="drop-in-box">
                        <h2>Drop-In</h2>
                        <h3>200 SEK / Person</h3>
                        <ul>
                            <li>8 minuter körning</li>
                            <li>Tävla mot familj och vänner</li>
                        </ul>
                        <p>
                            Under sommaren har vi öppet Drop-In vilket innebär att det bara är
                            att dyka upp och köra gokart. Vid mycket regn kan vi stänga banan,
                            då uppdateras öppettiderna till höger live.
                        </p>
                    </div>

                    <div className="opening-hours">
                        <h3>Öppettider - Piteå</h3>
                        <p>Öppettider kan variera beroende på väder</p>
                        <table>
                            <tbody>
                            {[
                                ["Söndag", "11:00 - 16:00"],
                                ["Måndag", "09:00 - 20:00"],
                                ["Tisdag", "09:00 - 20:00"],
                                ["Onsdag", "09:00 - 20:00"],
                                ["Torsdag", "09:00 - 20:00"],
                                ["Fredag", "09:00 - 20:00"],
                                ["Lördag", "10:00 - 15:00"],
                            ].map(([day, hours], index) => (
                                <tr key={index}>
                                    <td>{day}</td>
                                    <td>{hours}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Våra Banor */}
                <div className="section-header">
                    <h2>Våra banor</h2>
                </div>

                <section className="tracks">
                    {[
                        {
                            name: "Piteå",
                            imgSrc: "src/assets/pitea.png",
                            location: "Motorstadion, Haraholmen",
                            mapLink: "https://www.google.com/maps?q=Fordonsvägen+2,Piteå",
                            address: "Fordonsvägen 2",
                        },
                        {
                            name: "Luleå",
                            imgSrc: "src/assets/lulea.png",
                            location: "Luleå Karting, Kallaxheden",
                            mapLink: "https://www.google.com/maps?q=Lulviksvägen+40,Luleå",
                            address: "Lulviksvägen 40",
                        },
                        {
                            name: "Skellefteå",
                            imgSrc: "src/assets/skelleftea.png",
                            location: "Skellefteå Kart Arena, Furunäs",
                            mapLink: "https://www.google.com/maps?q=Motorbacken+1,Skellefteå",
                            address: "Motorbacken 1",
                        },
                    ].map((track, index) => (
                        <div className="track" key={index}>
                            <h3>{track.name}</h3>
                            <img src={track.imgSrc} alt={`${track.name} bana`} />
                            <hr />
                            <p>{track.location}</p>
                            <a href={track.mapLink} target="_blank" rel="noopener noreferrer" className="map-link">
                                <strong>{track.address}</strong>
                            </a>
                        </div>
                    ))}
                </section>
            </div>
        );
    }
}

export default Home;