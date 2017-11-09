import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Projects from './Projects';

// import Projects from './Projects';

class About extends Component {

    render() {
        return (
            <div>
                <h2>About PAge</h2>
                <ul>
                    {/* <li><Link to="/about">About</Link></li> */}
                    <li><Link to="/about/projects">Projects</Link></li>
                    {/* <li><Link to="/about">About</Link></li>
                        <li><Link to="/topics">Topics</Link></li> */}
                </ul>
                {/* <Link to="/projects">Projects</Link> */}

                <Route path='/about/projects' component={Projects} />
            </div>
        );
    }
}

export default About;