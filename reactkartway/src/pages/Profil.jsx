import React from "react";

class Profil extends React.Component {
    render() {
        return (
            <div>
                <div className="section-header">
                    <h2>Din profil</h2>
                </div>

                <div className="profile-container">
                    <div className="profile-pic">
                        <img src="src/assets/bigpfp.png" alt="Profilbild" />
                    </div>
                    <div className="profile-info">
                        <h2>Name: John Doe <a href="#" className="edit-icon">✏️</a></h2>
                        <p>Email: <a href="mailto:johndoe@gmail.com">johndoe@gmail.com</a></p>
                        <p>Phone: <a href="tel:0700001123">070 000 1123</a></p>
                        <p>Password: ******</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profil;