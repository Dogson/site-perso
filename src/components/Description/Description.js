import React from 'react';
import "./description.css";
import TrackVisibility from 'react-on-screen';
import {FaGlobeAfrica, FaReact} from 'react-icons/fa';

export const Description = () => {
    return <div className="section-container description-container">
        <div className="wrapper">
            <TrackVisibility className="title-container" partialVisibility>
                <DescriptionTitle/>
            </TrackVisibility>
            <DescriptionBody/>
        </div>
    </div>
};

const DescriptionTitle = ({isVisible}) => {
    let className;
    if (isVisible) {
        className = 'visible';
    }
    return <div className={"title " + className}>Qui suis-je ?</div>;
};

const DescriptionBody = () => {
    return <div className={"body "}>
        <TrackVisibility partialVisibility>
            <DescriptionSection1/>
        </TrackVisibility>
        <TrackVisibility partialVisibility>
            <DescriptionSection2/>
        </TrackVisibility>
    </div>
};

const DescriptionSection1 = ({isVisible}) => {
    let className;
    if (isVisible) {
        className = 'visible';
    }
    return <div className={"body-section body-section-1 " + className}>
        <div>
            <FaReact className="description-icon"/>
        </div>
        <div>
            <p>
                Je suis un développeur <span className="emphasis">web</span> et <span
                className="emphasis">mobile</span> spécialisé dans les technologies <span
                className="emphasis">Javascript</span>, en particulier ReactJS
                & React Native.
            </p>
            <p>
                Depuis 3 ans, je m'aventure dans l'écosystème <span className="emphasis">front-end</span> Javascript
                afin de découvrir et maîtriser de
                nouvelles façons de <span className="emphasis">concevoir</span> et <span
                className="emphasis">développer</span> des applications web et mobiles modernes.
            </p>
        </div>
        <div className="transparent">
            <FaReact className="description-icon"/>
        </div>
    </div>;
};

const DescriptionSection2 = ({isVisible}) => {
    let className;
    if (isVisible) {
        className = 'visible';
    }
    return <div className={"body-section body-section-2 " + className}>
        <div className="transparent"><FaGlobeAfrica className="description-icon"/></div>
        <div><p>
            <span className="emphasis">Aventurier</span> en informatique, mais pas seulement. Passioné de voyage depuis toujours, je
            suis actuellement en résidence à <span className="emphasis">Dakar, Sénégal</span>.

        </p>
            <p>
                Etant résolument <span className="emphasis">autonome</span> et très <span
                className="emphasis">organisé</span>, je suis à même d'évoluer sur des projets <span
                className="emphasis">à distance</span>, tout en
                restant <span className="emphasis">virtuellement disponible</span> à 100% pour participer activement aux
                processus de <span className="emphasis">gestion de projet</span> qui
                vous conviennent. </p>
        </div>
        <div><FaGlobeAfrica className="description-icon"/></div>
    </div>;
};