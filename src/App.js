import React, {Component} from 'react';
import './App.css';
import {Profile} from "./components/Profile/Profile";
import {SocialIconsFooter} from "./components/HeaderFooter/SocialIconsFooter";
import {Description} from "./components/Description/Description";
import {Skills} from "./components/Skill/Skills";
import {BackToTopHeader} from "./components/HeaderFooter/BackToTopHeader";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {renderHeaderFooter: false};

        this.descriptionRef = React.createRef();
        this.skillsRef = React.createRef();
        this.profileRef = React.createRef();

        this.handleScroll = this.handleScroll.bind(this);
        this.scrollToDescription = this.scrollToDescription.bind(this);
        this.scrollToSkills = this.scrollToSkills.bind(this);
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

        if (e.deltaY < 0) {
            this.scrollToDescription()
        }
    }

    handleArrowKeyPress(e) {
        const profileHeight = this.profileRef.current.clientHeight;
        const descriptionHeight = this.descriptionRef.current.clientHeight;
        const skillsHeight = this.skillsRef.current.clientHeight;

        if (window.innerWidth >= 1280 && e.keyCode === 40) {
            e.preventDefault();
            if (window.pageYOffset >= profileHeight) {
                this.scrollToSkills();
            }
            else {
                this.scrollToDescription();
            }

        }
        else if (window.innerWidth >= 1280 && e.keyCode === 38) {
            e.preventDefault();
            if (window.pageYOffset >= profileHeight + descriptionHeight) {
                this.scrollToDescription();
            }
            else {
                this.scrollToProfile();
            }
        }
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

    scrollToProfile() {
        let _this = this;
        this.setState({isScrolling: true});
        window.scrollTo(0, 0);
        window.setTimeout(() => _this.setState({isScrolling: false}), 800);
    }

    render() {
        return (
            <div className="App">
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
                <SocialIconsFooter visible={this.state.renderHeaderFooter}/>
                <BackToTopHeader visible={this.state.renderHeaderFooter}/>
            </div>
        );
    }
}

export default App;
