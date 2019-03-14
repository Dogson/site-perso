import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import {Profile} from "./components/Profile/Profile";
import {SocialIconsFooter} from "./components/HeaderFooter/SocialIconsFooter";
import {Skills} from "./components/Skills/Skills";
import {Description} from "./components/Description/Description";
import {BackToTopHeader} from "./components/HeaderFooter/BackToTopHeader";
import {Prestations} from "./components/Prestations/Prestations";
import {Page404} from "./components/Page404/Page404";

class App extends Component {

    render() {
        return <div className="App"><BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route component={Page404}/>
            </Switch>
        </BrowserRouter>
        </div>
    }
}

export default App;

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {renderHeaderFooter: false};

        const profileRef = React.createRef();
        const descriptionRef = React.createRef();
        const skillsRef = React.createRef();
        const prestationsRef = React.createRef();

        this.state = {
            refs: [profileRef, descriptionRef, skillsRef, prestationsRef],
            currentElement: 0
        };

        this.handleScroll = this.handleScroll.bind(this);
        this.handleWheel = this.handleWheel.bind(this);
        this.handleArrowKeyPress = this.handleArrowKeyPress.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('keydown', this.handleArrowKeyPress, false);
    }

    preventScroll() {
        return (window.innerHeight < this.state.refs[0].current.clientHeight ||
            window.innerHeight < this.state.refs[1].current.clientHeight ||
            window.innerHeight < this.state.refs[2].current.clientHeight ||
            window.innerHeight < this.state.refs[3].current.clientHeight)
    }

    handleWheel(e) {
        if (this.preventScroll()) {
            return;
        }

        e.preventDefault();
        if (e.deltaY > 0) {
            const elementToScroll = this.state.currentElement + 1 < this.state.refs.length ? this.state.currentElement + 1 : this.state.currentElement;
            this.state.refs[elementToScroll].current.scrollIntoView({behavior: 'smooth'});
        }
        else {
            const elementToScroll = this.state.currentElement > 0 ? this.state.currentElement - 1 : 0;
            this.state.refs[elementToScroll].current.scrollIntoView({behavior: "smooth"});
        }
    }

    handleScroll() {
        if (window.pageYOffset >= window.innerHeight - 1) {
            this.setState({renderHeaderFooter: true});
        }
        else if (this.state.renderHeaderFooter) {
            this.setState({renderHeaderFooter: false});
        }
    }


    handleArrowKeyPress(e) {
        if (!this.preventScroll() && e.keyCode === 40) {
            e.preventDefault();
            const elementToScroll = this.state.currentElement + 1 < this.state.refs.length ? this.state.currentElement + 1 : this.state.currentElement;
            this.state.refs[elementToScroll].current.scrollIntoView({behavior: 'smooth'});
            this.setState({currentElement: elementToScroll});

        }
        else if (!this.preventScroll() && e.keyCode === 38) {
            e.preventDefault();
            const elementToScroll = this.state.currentElement > 0 ? this.state.currentElement - 1 : 0;
            this.state.refs[elementToScroll].current.scrollIntoView({behavior: "smooth"});
            this.setState({currentElement: elementToScroll});
        }
    }

    render() {
        return (
            <div onWheel={(e) => {
                this.handleWheel(e)
            }}>
                <section ref={this.state.refs[0]}
                         onMouseEnter={(e) => {
                             this.setState({currentElement: 0});
                         }}>
                    <Profile onClick={() => this.state.refs[1].current.scrollIntoView({behavior: "smooth"})}/>
                </section>
                <section ref={this.state.refs[1]}
                         onMouseEnter={(e) => {
                             this.setState({currentElement: 1});
                         }}>
                    <Description/>
                </section>
                <section ref={this.state.refs[2]}
                         onMouseEnter={(e) => {
                             this.setState({currentElement: 2});
                         }}>
                    <Skills/>
                </section>
                <section ref={this.state.refs[3]}
                         onMouseEnter={(e) => {
                             this.setState({currentElement: 3});
                         }}>
                    <Prestations/>
                </section>
                <SocialIconsFooter visible={this.state.renderHeaderFooter}/>
                <BackToTopHeader visible={this.state.renderHeaderFooter}/>
            </div>
        );
    }
}