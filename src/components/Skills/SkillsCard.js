import React, {Component} from 'react';
import {FaJsSquare, FaGlobe, FaToolbox} from 'react-icons/fa';

export class SkillsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderIcon() {
        switch (this.props.title) {
            case 'javascript':
                return <FaJsSquare className={"card-icon " + this.state.className}/>;
            case 'web' :
                return <FaGlobe className={"card-icon " + this.state.className}/>;
            case 'outils' :
                return <FaToolbox className={"card-icon " + this.state.className}/>;
        }
    }

    renderSkills() {
        return this.props.skills.map((skill, i) => {
            if (i === this.props.skills.length - 1) {
                return <div className="skill">{skill}</div>
            }
            return <div className="skill">{skill}
                <div className="separator-icon">&#9830;&#xFE0E;</div>
            </div>
        })
    }


    render() {
        return <div className={"card-container " + this.state.className}
                    onMouseEnter={() => {
                        this.setState({className: 'shadowed big'})
                    }}
                    onMouseLeave={() => {
                        this.setState({className: ''})
                    }}
        >
            {this.renderIcon()}
            <div className="card-body">
                <div className="section-title">{this.props.title}</div>
                <div>
                    {this.renderSkills()}
                </div>
            </div>
        </div>
    }
}