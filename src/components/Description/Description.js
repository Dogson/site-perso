import React from 'react';
import "./description.css";
import TrackVisibility from 'react-on-screen';
import {DescriptionCard} from "./DescriptionCard";

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
};

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
};

const DescriptionSection1 = ({isVisible}) => {
    let className;
    if (isVisible) {
        className = 'visible';
    }
    return <div className={"body-section " + className}><DescriptionCard className={"body-section " + className} type="skills"/></div>;
};

const DescriptionSection2 = ({isVisible}) => {
    let className;
    if (isVisible) {
        className = 'visible';
    }
    return <div className={"body-section " + className}><DescriptionCard className={"body-section " + className} type="traits"/></div>;
};

const DescriptionSection3 = ({isVisible}) => {
    let className;
    if (isVisible) {
        className = 'visible';
    }
    return <div className={"body-section " + className}><DescriptionCard className={"body-section " + className} type="location"/></div>;
};
