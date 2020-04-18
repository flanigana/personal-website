import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pagesContent from './pages-content';

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            originalTop: 0,
            isStickied: false,
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', this.handleScroll);
        this.setState({offsetTop: this.myRef.current.offsetTop});
    }
    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll () {
        let windowOffsetTop = window.pageYOffset;
        if (!this.state.isStickied) {
            if (windowOffsetTop >= this.myRef.current.offsetTop) {
                this.setState({originalTop:this.myRef.current.offsetTop});
                this.setState({isStickied:true});
            }
        } else {
            if (windowOffsetTop < this.state.originalTop) {
                this.setState({isStickied:false});
            }
        }
    }

    render () {
        return (
            <nav ref={this.myRef} className={`${this.state.isStickied ? "sticky" : "notSticky"}`}>
                <img id="nav-logo" src={require("./images/logo.png")} alt="Logo" />
                <ul>
                    {pagesContent.map(function create (page, key) {

                        const name = page.name;
                        const capitalName = name[0].toUpperCase() + name.slice(1);
                        
                        return (
                            <li id={`${name}Link`} key={key}>
                                <Link to={name}>{capitalName}</Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    }
}

export default NavBar;