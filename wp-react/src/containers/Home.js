import React, { Component } from 'react';
// import {
//     // BrowserRouter,
//     Route,
//     Link
// } from 'react-router-dom';
import Project from './Project';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            wpData: []
        }
    }

    componentDidMount() {
        const dataUrl = "http://local.site.com/wp-json/wp/v2/pages/"

        fetch(dataUrl)
            .then(res => res.json())
            .then((json) => {
                this.setState({ wpData: json })
            })
    }

    render() {
        return (
            <div>
                <h2>Home PAge</h2>
                <Project data={this.state.wpData} />
            </div>
        );
    }
}

export default Home;