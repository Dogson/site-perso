import React from "react";
import "./page404.scss";

export const Page404 = () => {
    return <div className="section-container not-found-container">
        <img src="assets/img/radioactive.png" alt="404" height="200"/>
        <div className="title">Erreur <span className="emphasis">404</span></div>
        <div>La page demandée n'existe pas.</div>
        <div className="subtext">(Faites demi-tour.)</div>
    </div>
}