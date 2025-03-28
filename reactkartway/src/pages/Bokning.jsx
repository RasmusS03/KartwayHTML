import React from "react";

class Bokning extends React.Component {
    render() {
        return (
            <div>
                <div className="section-header">
                    <h2>Bokning</h2>
                </div>

                <div className="booking-text">
                    <p>
                        Utöver drop-in finns det även möjlighet att boka race.<br />
                        Svensexa, företagets kick-off eller ett kompisgäng som vill tävla, boka och se vem som är snabbast.<br />
                        <br /><br />
                        Vi erbjuder följande bokningspaket. Lediga tider finns längre ner på sidan.<br />
                        Ring Fredrik Melander 070-699 29 00 för att boka.
                    </p>
                </div>

                <section className="packages">
                    <div className="package">
                        <h2>Le Mans 60 min</h2>
                        <p><strong>1450 SEK / gokart</strong><br />Minst 4 gokartar</p>
                        <ul>
                            <li>60 minuter långlopp</li>
                            <li>2-4 pers per gokart</li>
                            <li>Upp till 14 gokartar samtidigt</li>
                            <li>Ca 1 h 30 min tidsåtgång</li>
                        </ul>
                        <p>Laget med flest antal varv efter tiden är slut vinner! Vid behov finns möjlighet till fler gokartar.</p>
                    </div>

                    <div className="package">
                        <h2>Litet Grand Prix</h2>
                        <p><strong>550 SEK / person</strong><br />Minst 6 personer</p>
                        <ul>
                            <li>3 minuter uppvärmning</li>
                            <li>2×6 varv tidskval</li>
                            <li>8 varv final</li>
                            <li>Ca 1 h / grupp</li>
                        </ul>
                        <p>Först över mållinjen i finalen vinner! Vid bokningar av fler än 14 personer delas ni in i grupper.</p>
                    </div>

                    <div className="package">
                        <h2>Stort Grand Prix</h2>
                        <p><strong>700 SEK / person</strong><br />Minst 5 personer</p>
                        <ul>
                            <li>3 minuter uppvärmning</li>
                            <li>2×6 varv tidskval</li>
                            <li>6 varv förfinal</li>
                            <li>8 varv final</li>
                            <li>Ca 1 h 30 min / grupp</li>
                        </ul>
                        <p>Först över mållinjen i finalen vinner! Vid bokningar av fler än 14 personer delas ni in i grupper.</p>
                    </div>
                </section>

                <div className="section-header">
                    <h2>Tider</h2>
                </div>

                <div className="booking-section">
                    <table className="booking-table">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Torsdag</th>
                            <th>Fredag</th>
                            <th>Lördag</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>9 - 10</td>
                            <td className="ledig">Ledigt</td>
                            <td className="bokat">Bokat</td>
                            <td className="ledig">Ledigt</td>
                        </tr>
                        <tr>
                            <td>10 - 11</td>
                            <td className="ledig">Ledigt</td>
                            <td className="ledig">Ledigt</td>
                            <td className="bokat">Bokat</td>
                        </tr>
                        <tr>
                            <td>11 - 12</td>
                            <td className="ledig">Ledigt</td>
                            <td className="bokat">Bokat</td>
                            <td className="ledig">Ledigt</td>
                        </tr>
                        <tr>
                            <td>12 - 13</td>
                            <td className="bokat">Bokat</td>
                            <td className="bokat">Bokat</td>
                            <td className="ledig">Ledigt</td>
                        </tr>
                        <tr>
                            <td>13 - 14</td>
                            <td className="bokat">Bokat</td>
                            <td className="bokat">Bokat</td>
                            <td className="bokat">Bokat</td>
                        </tr>
                        <tr>
                            <td>14 - 15</td>
                            <td className="ledig">Ledigt</td>
                            <td className="ledig">Ledigt</td>
                            <td className="bokat">Bokat</td>
                        </tr>
                        <tr>
                            <td>15 - 16</td>
                            <td className="ledig">Ledigt</td>
                            <td className="bokat">Bokat</td>
                            <td className="ledig">Ledigt</td>
                        </tr>
                        <tr>
                            <td>16 - 17</td>
                            <td className="bokat">Bokat</td>
                            <td className="ledig">Ledigt</td>
                            <td className="bokat">Bokat</td>
                        </tr>
                        <tr>
                            <td>17 - 18</td>
                            <td className="ledig">Ledigt</td>
                            <td className="ledig">Ledigt</td>
                            <td className="ledig">Ledigt</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Bokning;
