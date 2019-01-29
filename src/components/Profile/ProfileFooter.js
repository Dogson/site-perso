import React from 'react';
import "./profile.css";
import {SocialIcon} from 'react-social-icons';

export class ProfileFooter extends React.Component {

    render() {
        let className = this.props.visible ? 'visible' : 'invisible';
        return <div className={"footer " + className}>
            <div>
                <SocialIcon target="_blank" rel="noopener noreferrer" url="https://github.com/Dogson"
                            className="social-icon"
                            style={{height: 40, width: 40, margin: '10px'}}/>
                <SocialIcon target="_blank" rel="noopener noreferrer" url="https://www.linkedin.com/in/ggirod/"
                            className="social-icon" style={{height: 40, width: 40, margin: '10px'}}/>
                <SocialIcon target="_blank" rel="noopener noreferrer" url="https://soundcloud.com/gwena-l-dogson"
                            className="social-icon" style={{height: 40, width: 40, margin: '10px'}}/>
            </div>
        </div>

    }
};