import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Profile} from "./components/Profile/Profile";
import {ProfileFooter} from "./components/Profile/ProfileFooter";
import {Description} from "./components/Description/Description";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {renderHeaderFooter: false}

        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll(e) {
        if (window.pageYOffset >= window.innerHeight) {
            this.setState({renderHeaderFooter: true});
        }
        else if (this.state.renderHeaderFooter) {
            this.setState({renderHeaderFooter: false});
        }
    }

    render() {
        return (
            <div className="App">
                <Profile/>
                <Description/>
                <ProfileFooter visible={this.state.renderHeaderFooter} />
            </div>
        );
    }
}

export default App;
