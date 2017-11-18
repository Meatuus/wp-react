import React, { Component } from 'react';
// import {
//     BrowserRouter,
//     Route,
//     Link
// } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
import './style.css';
// import Home from './containers/Home';
// import About from './containers/About';
// import Project from './containers/Project';

class Nav extends Component {
    constructor() {
        super()

        this.state = {
            mounted: false
        }
    }

    componentDidMount() {
        // setTimeout()
        setTimeout(function () { this.setState({ mounted: true }) }.bind(this), 1000);
        console.log('mounted');
        setTimeout(function () { console.log('mount delay'); }, 100);
    }

    render() {
        return (
            <nav>
                <h2 className="nav-title">&#123;&nbsp; <span className={this.state.mounted ? "nav-span mounted" : "nav-span"}>Some Text</span> &nbsp;&#125;</h2>
                
            </nav>

        );
    }
}

export default Nav;