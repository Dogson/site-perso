import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Profile} from "./components/Profile/Profile";
import {ProfileHeader} from "./components/Profile/ProfileHeader";
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

    renderHeaderFooter() {
        if (this.state.renderHeaderFooter) {
            return [<ProfileHeader/>, <ProfileFooter/>];
        }
    }
    render() {
        return (
            <div className="App">
                <Profile/>
                <Description/>
                {this.renderHeaderFooter()}
            </div>
        );
    }
}

export default App;
