import React, {Component} from 'react';
import {FaLaptopCode, FaFlask, FaGlobeAfrica, FaGripHorizontal} from 'react-icons/fa';

export class DescriptionCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderIcon() {
        switch (this.props.type) {
            case 'skills':
                return <FaLaptopCode className={"card-icon " + this.state.className}/>;
            case 'traits' :
                return <FaFlask className={"card-icon " + this.state.className}/>;
            case 'location' :
                return <FaGlobeAfrica className={"card-icon " + this.state.className}/>;
        }
    }

    renderBody() {
        switch (this.props.type) {
            case 'skills':
                return <div>
                    <div className="inline">Développeur <span className="emphasis">web</span> et <span
                        className="emphasis">mobile</span></div>
                    <div className="separator-icon">&#9830;</div>
                    <div>Aime <span className="emphasis">concevoir</span> et <span className="emphasis">développer</span>
                    </div>
                    <div className="separator-icon">&#9830;</div>
                    <div>Ecosystème <span className="emphasis">Javascript fullstack</span> <br/>(React JS et Native,
                        NodeJS, Firebase).</div>
                </div>;
            case 'traits' :
                return <div>
                    <div><span className="emphasis">Autonome</span> et <span className="emphasis">organisé</span></div>
                    <div className="separator-icon">&#9830;</div>
                    <div>Passionné par de nouveaux <span className="emphasis">défis métiers</span> ou <span
                        className="emphasis">techniques</span>.</div>
                    <div className="separator-icon">&#9830;</div>
                    <div>Force <span className="emphasis">d'initiative</span> et de proposition</div>
                </div>;
            case 'location' :
                return <div>
                    <div>Réside à <span className="emphasis">Dakar, Sénégal</span></div>
                    <div className="separator-icon">&#9830;</div>
                    <div>Maîtrise des outils indispensable au <span className="emphasis">télétravail </span></div>
                    <div className="separator-icon">&#9830;</div>
                    <div><span className="emphasis">Disponibilité</span> virtuelle totale</div>
                </div>;
        }
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
            <div className="card-body">{this.renderBody()}</div>
        </div>
    }
}