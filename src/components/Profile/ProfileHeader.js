import React from 'react';
import "./profile.css";

export class ProfileHeader extends React.Component {

    render() {
        let className = this.props.visible ? 'visible' : 'invisible';
        return <div className={"header " + className}>
            <img src="/assets/img/avatar.png" className="avatar"/>
        </div>
    }
}