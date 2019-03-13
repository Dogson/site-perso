import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import {Profile} from "./components/Profile/Profile";
import {SocialIconsFooter} from "./components/HeaderFooter/SocialIconsFooter";
import {Skills} from "./components/Skills/Skills";
import {Description} from "./components/Description/Description";
import {BackToTopHeader} from "./components/HeaderFooter/BackToTopHeader";
import {Prestations} from "./components/Contact/Prestations";
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

        this.profileRef = React.createRef();
        this.descriptionRef = React.createRef();
        this.skillsRef = React.createRef();
        this.prestationsRef = React.createRef();

        this.handleScroll = this.handleScroll.bind(this);
        this.scrollToDescription = this.scrollToDescription.bind(this);
        this.scrollToSkills = this.scrollToSkills.bind(this);
        this.scrollToPrestations = this.scrollToPrestations.bind(this);
        this.handleArrowKeyPress = this.handleArrowKeyPress.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('keydown', this.handleArrowKeyPress, false);
    }

    handleScroll(e) {
        if (window.pageYOffset >= window.innerHeight - 1) {
            this.setState({renderHeaderFooter: true});
        }
        else if (this.state.renderHeaderFooter) {
            this.setState({renderHeaderFooter: false});
        }
    }

    handleWheelOnProfile(e) {
        if (window.innerWidth < 1280)
            return;

        e.preventDefault();

        if (this.state.isScrolling) {
            return;
        }

        if (e.deltaY > 0) {
            this.scrollToDescription()
        }
    }

    handleWheelOnDescription(e) {
        if (window.innerWidth < 1280)
            return;

        e.preventDefault();

        if (this.state.isScrolling) {
            return;
        }

        if (e.deltaY > 0) {
            this.scrollToSkills()
        }
        else {
            this.scrollToProfile()
        }
    }

    handleWheelOnSkills(e) {
        if (window.innerWidth < 1280)
            return;

        e.preventDefault();

        if (this.state.isScrolling) {
            return;
        }

        if (e.deltaY > 0) {
            this.scrollToPrestations();
        }
        else {
            this.scrollToDescription()
        }
    }

    handleWheelOnPrestations(e) {
        if (window.innerWidth < 1280)
            return;

        e.preventDefault();

        if (this.state.isScrolling) {
            return;
        }

        if (e.deltaY < 0) {
            this.scrollToSkills()
        }
    }

    handleArrowKeyPress(e) {
        const profileHeight = this.profileRef.current.clientHeight;
        const descriptionHeight = this.descriptionRef.current.clientHeight;
        const skillsHeight = this.skillsRef.current.clientHeight;

        if (window.innerWidth >= 1280 && e.keyCode === 40) {
            e.preventDefault()
            if (window.pageYOffset >= profileHeight + descriptionHeight) {
                this.scrollToPrestations();
            }
            else if (window.pageYOffset >= profileHeight) {
                this.scrollToSkills();
            }
            else {
                this.scrollToDescription();
            }

        }
        else if (window.innerWidth >= 1280 && e.keyCode === 38) {
            e.preventDefault();
            if (window.pageYOffset >= profileHeight + descriptionHeight + skillsHeight) {
                this.scrollToSkills();
            }
            else if (window.pageYOffset >= profileHeight + descriptionHeight) {
                this.scrollToDescription();
            }
            else {
                this.scrollToProfile();
            }
        }
    }

    scrollToProfile() {
        let _this = this;
        this.setState({isScrolling: true});
        window.scrollTo(0, 0);
        window.setTimeout(() => _this.setState({isScrolling: false}), 800);
    }

    scrollToDescription() {
        let _this = this;
        this.setState({isScrolling: true});
        window.scrollTo(0, this.descriptionRef.current.offsetTop);
        window.setTimeout(() => _this.setState({isScrolling: false}), 800);
    }

    scrollToSkills() {
        let _this = this;
        this.setState({isScrolling: true});
        window.scrollTo(0, this.skillsRef.current.offsetTop);
        window.setTimeout(() => _this.setState({isScrolling: false}), 800);
    }

    scrollToPrestations() {
        let _this = this;
        this.setState({isScrolling: true});
        window.scrollTo(0, this.prestationsRef.current.offsetTop);
        window.setTimeout(() => _this.setState({isScrolling: false}), 800);
    }

    render() {
        return (
            <div>
                <section onWheel={(e) => {
                    this.handleWheelOnProfile(e)
                }}
                         ref={this.profileRef}>
                    <Profile onClick={this.scrollToDescription}/>
                </section>
                <section ref={this.descriptionRef}
                         onWheel={(e) => {
                             this.handleWheelOnDescription(e)
                         }}>
                    <Description/>
                </section>
                <section ref={this.skillsRef} onWheel={(e) => {
                    this.handleWheelOnSkills(e)
                }}>
                    <Skills/>
                </section>
                <section ref={this.prestationsRef} onWheel={(e) => {
                    this.handleWheelOnPrestations(e)
                }}>
                    <Prestations/>
                </section>
                <SocialIconsFooter visible={this.state.renderHeaderFooter}/>
                <BackToTopHeader visible={this.state.renderHeaderFooter}/>
            </div>
        );
    }
}