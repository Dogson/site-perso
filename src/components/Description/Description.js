import React from 'react';
import "./description.css";
import TrackVisibility from 'react-on-screen';
import {DescriptionCard} from "./DescriptionCard";

export const Description = () => {
    return <div className="description-container">
        <div class="wrapper">
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
    return <div className={"title " + className}><h1>Qui suis-je ?</h1></div>;
};

const DescriptionBody = ({isVisible}) => {
    let className;
    if (isVisible) {
        className = 'visible';
    }
    return <div className={"body " + className}>
        <TrackVisibility partialVisibility className="flex-grow">
            <DescriptionSection1/>
        </TrackVisibility>
        <TrackVisibility partialVisibility className="flex-grow">
            <DescriptionSection2/>
        </TrackVisibility>
        <TrackVisibility partialVisibility className="flex-grow">
            <DescriptionSection3/>
        </TrackVisibility>
    </div>
};

const DescriptionSection1 = ({isVisible}) => {
    let className;
    if (isVisible) {
        className = 'visible';
    }
    return <div className={"body-section body-section-1 " + className}><DescriptionCard type="skills"/></div>;
};

const DescriptionSection2 = ({isVisible}) => {
    let className;
    if (isVisible) {
        className = 'visible';
    }
    return <div className={"body-section body-section-2 " + className}><DescriptionCard type="traits"/></div>;
};

const DescriptionSection3 = ({isVisible}) => {
    let className;
    if (isVisible) {
        className = 'visible';
    }
    return <div className={"body-section body-section-3 " + className}><DescriptionCard type="location"/></div>;
};
