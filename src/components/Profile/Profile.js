import React from 'react';
import "./profile.css";
import { SocialIcon } from 'react-social-icons';

export class Profile extends React.Component {

    constructor(props) {
        super(props);

        let $this = this;
        this.state = {
            displayType: 'full'
    }
        ;
        window.setTimeout(() => {
            $this.setState({displayType: 'header'})
        }, 1000)
    }

    render() {
        return <div className={"container " + this.state.displayType}>
            <img src="/assets/img/avatar.png" className={"avatar " + this.state.displayType}/>
            <div>
                <div className={"name " + this.state.displayType}>Gwenaël Girod</div>
                <div className={"job-title " + this.state.displayType}>Développeur FullStack ReactJS & Native</div>
            </div>
            <div>
                <SocialIcon target="_blank" rel="noopener noreferrer" url="https://github.com/Dogson" className="social-icon" style={{ height: 40, width: 40, margin: '10px' }} />
                <SocialIcon target="_blank" rel="noopener noreferrer" url="https://www.linkedin.com/in/ggirod/" className="social-icon"  style={{ height: 40, width: 40, margin: '10px' }} />
                <SocialIcon target="_blank" rel="noopener noreferrer" url="https://soundcloud.com/gwena-l-dogson" className="social-icon"  style={{ height: 40, width: 40, margin: '10px' }} />
            </div>
        </div>
    }
}