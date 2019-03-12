import React from 'react';
import "./description.css";
import TrackVisibility from 'react-on-screen';

export const Description = () => {
    return <div className="section-container description-container">
        <div className="wrapper">
            <TrackVisibility className="title-container" partialVisibility>
                <DescriptionTitle/>
            </TrackVisibility>
            {/*<DescriptionBody/>*/}
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