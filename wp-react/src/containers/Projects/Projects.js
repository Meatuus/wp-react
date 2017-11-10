import React, { Component } from 'react';
import './styles.css';

import Project from '../../components/Project/Project';

class Projects extends Component {
    render() {
        const {projects} = this.props
        
        const hero = projects.map(proj => {
            return <Project project={proj} key={proj.id} />
        })

        return (
            <div>
                <h1 className="proj-thmbs__title" onMouseEnter={this.hovered}>Projects</h1>
                <div id="projects" className="proj-thmbs">
                    {hero}
                </div>
            </div>
        );
    }
}

export default Projects;