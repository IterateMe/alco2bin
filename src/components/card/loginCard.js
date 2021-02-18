import React from "react";
import  '../../style/loginPageCSS.scss';

const loginCard = ({
                        nomDutilisateur = "Adresse courriel",
                        motDePasse = "Mot de passe",
                        connexion = "Connexion",
                        a2b = "A2B"
                    }) => {
    return (
        <div className="loginCard">
            <div className="flexWrapperOne">
                <p className="nomDutilisateur">
                    {nomDutilisateur}
                </p>
                <div className="line1" />
                <p className="motDePasse">{motDePasse}</p>
                <div className="line2" />
                <div className="flexWrapperTwo">
                    <p className="connexion">{connexion}</p>
                </div>
            </div>
            <div className="flexWrapperThree">
                <p className="a2b">{a2b}</p>
            </div>
        </div>
    );
};

export default loginCard;