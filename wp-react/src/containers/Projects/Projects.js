import React, { Component } from 'react';
import './styles.css';
import Thumbnail from '../../components/Thumbnail/Thumbnail';

class Projects extends Component {
    render() {
        const {projects} = this.props
        
        const hero = projects.map(proj => {
            return <Thumbnail img={proj.acf.feature_image.url} 
                title={proj.title.rendered}
                subhd={proj.acf.subheading}
                key={proj.id} />
        })

        return (
            <div>
                <h1 className="proj-thmbs__title" onMouseEnter={this.hovered}>PROJECTS</h1>
                <div id="projects" className="proj-thmbs">
                    {hero}
                </div>
            </div>
        );
    }
}

export default Projects;
