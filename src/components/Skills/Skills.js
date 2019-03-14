import React from 'react';
import "./skills.css";
import TrackVisibility from 'react-on-screen';
import {SkillsCard} from "./SkillsCard";

export const Skills = () => {
    return <div className="section-container skills-container">
        <div className="wrapper">
            <TrackVisibility className="title-container" partialVisibility={true}>
                <SkillsTitle/>
            </TrackVisibility>
            <SkillsBody/>
        </div>
    </div>
};

const SkillsTitle = ({isVisible}) => {
    let className;
    if (isVisible) {
        className = 'visible';
    }
    return <div className={"title " + className}>Compétences</div>;
};

const SkillsBody = () => {
    return <div className={"body "}>
        <TrackVisibility partialVisibility={true}>
            <SkillsSection1/>
        </TrackVisibility>
        <TrackVisibility partialVisibility={true}>
            <SkillsSection2/>
        </TrackVisibility>
        <TrackVisibility partialVisibility={true}>
            <SkillsSection3/>
        </TrackVisibility>
    </div>
};

const SkillsSection1 = ({isVisible}) => {
    let className;
    if (isVisible) {
        className = 'visible';
    }
    return <div className={"body-section body-section-1 " + className}>
        <SkillsCard title="javascript"
                    skills={["ReactJS + Redux", "React Native", "AngularJS", "NodeJS + Express", "TypeScript"]}/>
    </div>;
};

const SkillsSection2 = ({isVisible}) => {
    let className;
    if (isVisible) {
        className = 'visible';
    }
    return <div className={"body-section body-section-2 " + className}>
        <SkillsCard title="web"
        skills={["Firebase", "HTML 5 + SASS/LESS", "Flexbox", "Responsive", "Bootstrap"]}/>
    </div>;
};

const SkillsSection3 = ({isVisible}) => {
    let className;
    if (isVisible) {
        className = 'visible';
    }
    return <div className={"body-section body-section-3 " + className}>
        <SkillsCard title="outils"
        skills={["Git (& SVN)", "NPM", "Babel", "Grunt", "IntelliJ"]}/>
    </div>;
};