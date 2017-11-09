import React, { Component } from 'react';
import {
    // BrowserRouter,
    Route,
    Link
} from 'react-router-dom';
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
                <ul>
                    {/* <li><Link to="/about">About</Link></li> */}
                    <li><Link to="/home/project">Project</Link></li>
                    {/* <li><Link to="/about">About</Link></li>
                        <li><Link to="/topics">Topics</Link></li> */}
                </ul>

                <Route path="/home/project" component={
                    () => (<Project data={this.state.wpData} />
                )} />
                {/* <Project data={this.state.wpData} /> */}
            </div>
        );
    }
}

export default Home;