import React from 'react';
import "./headerFooter.css";
import {FaArrowUp} from "react-icons/fa";

export class BackToTopHeader extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        let className = this.props.visible ? 'visible' : '';
        return <div className={"back-to-top " + className}
                    onMouseEnter={() => {
                        this.setState({hovered: true})
                    }}
                    onMouseLeave={() => {
                        this.setState({hovered: false})
                    }}
                    onClick={() => {window.scrollTo(0, 0)}}>
            <FaArrowUp className="icon"/>
            <div className={this.state.hovered ? "text visible" : "text"}>Revenir au début</div>
        </div>
    }
}