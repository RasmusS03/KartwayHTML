
import React from "react";




class Om extends React.Component {
    render() {
        return (
            <div>
                <div className="section-header">
                    <h2>Om oss</h2>
                </div>

                <section className="om-oss">
                    <img src="src/assets/kart.png" alt="Kart" className="kart" />
                    <div className="about-text1">
                        <p>
                            Vi driver hyrkartbanor i Luleå, Piteå och Skellefteå. Från sommaren 2020 har vi nya gokartar på samtliga banor. Man kan köra upp till 15 enkelkartar och 3 dubbelkartar samtidigt, vilket gör det möjligt för både små och stora grupper att tävla mot varandra i en spännande och fartfylld upplevelse.
                            Oavsett om du är en van förare eller nybörjare erbjuder vi en säker och rolig aktivitet för alla åldrar. Våra hyrkartar är moderna och noggrant underhållna för att ge bästa möjliga prestanda och körupplevelse.
                        </p>
                    </div>
                </section>

                <section className="om-oss">
                    <div className="about-text2">
                        <p>
                            Dubbelkartarna gör det dessutom möjligt för yngre förare eller de som vill köra tillsammans med en vän att delta i racet.
                            Våra banor är designade för att ge både utmaning och nöje, med kurvor och raksträckor som testar din körskicklighet.
                            <br /><br />
                            Vi anordnar allt från spontana körningar till organiserade tävlingar och företagsevent. Perfekt för kick-offer, svensexor, möhippor eller bara en kul dag med kompisarna!
                            Kom och känn adrenalinet när du susar fram på banan och tävlar om snabbaste varvtid.
                        </p>
                    </div>
                    <img src="src/assets/kart2.png" alt="Kart" className="kart" />
                </section>

                <section className="om-oss">
                    <h3>
                        Vi garanterar en oförglömlig upplevelse fylld av action, skratt och gemenskap.<br />
                        Välkommen till en gokartupplevelse utöver det vanliga!
                    </h3>
                </section>
            </div>
        );
    }
}
export default Om;