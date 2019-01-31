import React from 'react';
import "./description.css";
import TrackVisibility from 'react-on-screen';
import {FaReact} from "react-icons/fa";

export const Description = () => {
    return <div className="description-container">
        <TrackVisibility className="title-container">
            <DescriptionTitle/>
        </TrackVisibility>
        <DescriptionBody/>
    </div>
};

const DescriptionTitle = ({isVisible}) => {
    let className;
    if (isVisible) {
        className = 'visible';
    }
    return <div className={"title " + className}><h1>Qui suis-je ?</h1></div>;
}

const DescriptionBody = ({isVisible}) => {
    let className;
    if (isVisible) {
        className = 'visible';
    }
    return <div className={"body " + className}>
        <TrackVisibility className="flexStart">
            <DescriptionSection1/>
        </TrackVisibility>
        <TrackVisibility className="flexCenter">
            <DescriptionSection2/>
        </TrackVisibility>
        <TrackVisibility className="flexEnd">
            <DescriptionSection3/>
        </TrackVisibility>
    </div>
}

const DescriptionSection1 = ({isVisible}) => {
    let className;
    if (isVisible) {
        className = 'visible';
    }
    return <div className={"body-section " + className} style={{alignSelf: 'flex-start'}}>
        <p>Développeur <b>web</b> et <b>mobile</b> cherchant à
            concevoir et développer dans un <b>écosystème Javascript fullstack</b> (React JS et Native, NodeJS,
            Firebase).</p>
    </div>
}

const DescriptionSection2 = ({isVisible}) => {
    let className;
    if (isVisible) {
        className = 'visible';
    }
    return <div className={"body-section " + className} style={{alignSelf: 'center'}}>
        <p>Je suis une personne <b>autonome</b> et passionnée par la découverte de nouveaux projets et de nouvelles
            problématiques métiers ou techniques.</p>
    </div>
}

const DescriptionSection3 = ({isVisible}) => {
    let className;
    if (isVisible) {
        className = 'visible';
    }
    return <div className={"body-section " + className} style={{alignSelf: 'flex-end'}}>
        <p>Je réside à l'étranger pour des raisons familiales, ce qui ne m'empêche pas de collaborer en télétravail
            sur des projets prenant place sur le territoire français en restant présent et disponible virtuellement
            tout au long de mes missions.</p>
    </div>
}
