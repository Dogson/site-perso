import React, {Component} from 'react';
import {FaLaptopCode, FaFlask, FaGlobeAfrica} from 'react-icons/fa';

export class DescriptionCard extends Component {

    renderIcon() {
        switch (this.props.type) {
            case 'skills':
                return <FaLaptopCode size="3em" className="card-icon"/>;
            case 'traits' :
                return <FaFlask size="3em" className="card-icon"/>;
            case 'location' :
                return <FaGlobeAfrica size="3em" className="card-icon"/>;
        }
    }

    renderBody() {
        switch (this.props.type) {
            case 'skills':
                return <div style={{alignSelf: 'flex-start'}}>
                    <p>Développeur <b>web</b> et <b>mobile</b> cherchant à
                        concevoir et développer dans un <b>écosystème Javascript fullstack</b> (React JS et Native,
                        NodeJS,
                        Firebase).</p>
                </div>;
            case 'traits' :
                return <div style={{alignSelf: 'center'}}>
                    <p>Je suis une personne <b>autonome</b> et passionnée par la découverte de nouveaux projets et de nouvelles
                        problématiques métiers ou techniques.</p>
                </div>;
            case 'location' :
                return <div style={{alignSelf: 'flex-end'}}>
                <p>Je réside à l'étranger pour des raisons familiales, ce qui ne m'empêche pas de collaborer en télétravail
                    sur des projets prenant place sur le territoire français en restant présent et disponible virtuellement
                    tout au long de mes missions.</p>
            </div>;
        }
    }

    render() {
        return <div className="card-container">
            {this.renderIcon()}
            <div className="card-body">{this.renderBody()}</div>
        </div>
    }
}