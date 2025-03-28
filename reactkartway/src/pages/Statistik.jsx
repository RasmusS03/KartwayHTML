import React from "react";

class Statistik extends React.Component {
    render() {
        return (
            <div>
                <div className="section-header">
                    <h2>Statistik</h2>
                </div>

                <div className="stats-container">
                    {/* BANA 1: PITEÅ */}
                    <div className="stats">
                        <h2>Piteå</h2>
                        <img src="src/assets/pitea.png" alt="Bana Piteå" />
                        <div className="your-time">22. | John Doe | 1:45</div>
                        <div className="leaderboard">
                            <h3>Leaderboard</h3>
                            <ul>
                                <li>1. Namn - 1:30</li>
                                <li>2. Namn - 1:31</li>
                                <li>3. Namn - 1:32</li>
                                <li>4. Namn - 1:33</li>
                                <li>5. Namn - 1:34</li>
                            </ul>
                        </div>
                    </div>

                    {/* BANA 2: LULEÅ */}
                    <div className="stats">
                        <h2>Luleå</h2>
                        <img src="src/assets/lulea.png" alt="Bana Luleå" />
                        <div className="your-time">22. | John Doe | 1:45</div>
                        <div className="leaderboard">
                            <h3>Leaderboard</h3>
                            <ul>
                                <li>1. Namn - 1:30</li>
                                <li>2. Namn - 1:31</li>
                                <li>3. Namn - 1:32</li>
                                <li>4. Namn - 1:33</li>
                                <li>5. Namn - 1:34</li>
                            </ul>
                        </div>
                    </div>

                    {/* BANA 3: SKELLEFTEÅ */}
                    <div className="stats">
                        <h2>Skellefteå</h2>
                        <img src="src/assets/skelleftea.png" alt="Bana Skellefteå" />
                        <div className="your-time">22. | John Doe | 1:45</div>
                        <div className="leaderboard">
                            <h3>Leaderboard</h3>
                            <ul>
                                <li>1. Namn - 1:30</li>
                                <li>2. Namn - 1:31</li>
                                <li>3. Namn - 1:32</li>
                                <li>4. Namn - 1:33</li>
                                <li>5. Namn - 1:34</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Statistik;
