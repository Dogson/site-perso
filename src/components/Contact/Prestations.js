import TrackVisibility from "react-on-screen";
import React from "react";
import "./prestations.css";
import Slider from "react-slick";
import {MdWebAsset, MdPhoneAndroid, MdPeopleOutline} from 'react-icons/md';

export const Prestations = () => {
    return <div className="section-container prestations-container">
        <div className="wrapper">
            <TrackVisibility className="title-container" partialVisibility>
                <PrestationsTitle/>
            </TrackVisibility>
            <TrackVisibility partialVisibility>
                <PrestationsBody/>
            </TrackVisibility>
        </div>
    </div>
};

const PrestationsTitle = ({isVisible}) => {
    let className;
    if (isVisible) {
        className = 'visible';
    }
    return <div className={"title " + className}><h1>Prestations</h1></div>;
};

const PrestationsBody = ({isVisible}) => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        arrows: true,
        autoplaySpeed: 5000,
        dotsClass: "slick-dots my-dots"
    };

    let className;
    if (isVisible) {
        className = 'visible';
    }
    return <div className={"body " + className}>
        <Slider {...settings}>
            <PrestationSimpleWebPage/>
            <PrestationMobileApp/>
            <PrestationRegie/>
        </Slider>
    </div>;
};

const PrestationSimpleWebPage = () => {
    return <div className="prestation-type">
        <MdWebAsset className="prestation-icon"/>
        <div className="prestation-title">
            Site internet <span class="emphasis">simple</span>
        </div>
        <div className="prestation-description">
            Conception d'un site internet vitrine/marketting
        </div>
        <div className="prestations-actions">
            <div className="action">
                Maquettage
            </div>
            <div className="separator-icon">&#9830;</div>
            <div className="action">
                Développement
            </div>
            <div className="separator-icon">&#9830;</div>
            <div className="action">
                Hébergement
            </div>
        </div>
    </div>
};

const PrestationMobileApp = () => {
    return <div className="prestation-type">
        <MdPhoneAndroid className="prestation-icon"/>
        <div className="prestation-title">
            Application <span class="emphasis">mobile</span>
        </div>
        <div className="prestation-description">
            Conception d'une application mobile android
        </div>
        <div className="prestations-actions">
            <div className="action">
                Développement
            </div>
            <div className="separator-icon">&#9830;</div>
            <div className="action">
                Intégration des APIs Google
            </div>
            <div className="separator-icon">&#9830;</div>
            <div className="action">
                Déploiement sur le Play Store
            </div>
        </div>
    </div>
};

const PrestationRegie = () => {
    return <div className="prestation-type">
        <MdPeopleOutline className="prestation-icon"/>
        <div className="prestation-title">
            Régie à <span class="emphasis">distance</span>
        </div>
        <div className="prestation-description">
            Au sein de vos équipes sur un projet de plus grande envergure
        </div>
        <div className="prestations-actions">
            <div className="action">
                Réponse à un besoin technique précis
            </div>
            <div className="separator-icon">&#9830;</div>
            <div className="action">
                Apport d'expertise sur les technologies front-end
            </div>
            <div className="separator-icon">&#9830;</div>
            <div className="action">
                Participation à la conception d'applications complexes
            </div>
        </div>
    </div>
};


