import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Project from './Project';

class About extends Component {

    render() {
        return (
            <div>
                <h2>About PAge</h2>
                <ul>
                    <li><Link to="/about/project">Project</Link></li>
                </ul>

                <Route path='/about/project' component={Project} />
            </div>
        );
    }
}

export default About;