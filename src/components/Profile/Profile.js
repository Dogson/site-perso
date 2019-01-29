import React from 'react';
import "./profile.css";
import {SocialIcon} from 'react-social-icons';
import {Button} from 'react-bootstrap';

export const Profile = () => (
    <div className="profile-container">
        <div>
            <img src="/assets/img/avatar.png" className="avatar"/>
            <div className="name">Gwenaël Girod</div>
        </div>
        <div className="job-title">Développeur FullStack ReactJS & Native</div>
        <div>
            <Button bsClass="btn primary" onClick={() => {
                window.scroll({
                    top: window.innerHeight,
                    left: 0,
                    behavior: 'smooth'
                });
            }}>Découvrir</Button>
            <Button bsClass="btn secondary">ME CONTACTER</Button>
        </div>
        <div>
            <SocialIcon target="_blank" rel="noopener noreferrer" url="https://github.com/Dogson"
                        bgColor="#F0F3BD"
                        className="social-icon"
                        style={{height: 40, width: 40, margin: '10px'}}/>
            <SocialIcon target="_blank" rel="noopener noreferrer" url="https://www.linkedin.com/in/ggirod/"
                        bgColor="#F0F3BD"
                        className="social-icon" style={{height: 40, width: 40, margin: '10px'}}/>
            <SocialIcon target="_blank" rel="noopener noreferrer" url="https://soundcloud.com/gwena-l-dogson"
                        bgColor="#F0F3BD"
                        className="social-icon" style={{height: 40, width: 40, margin: '10px'}}/>
        </div>
    </div>
);

