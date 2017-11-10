import React, { Component } from 'react';
import './styles.css';
import Thumbnail from '../../components/Thumbnail/Thumbnail';

class Projects extends Component {
    constructor() {
        super()

        this.state = {
            selectedProj: ""
        }

        this.onLinkClick = this.onLinkClick.bind(this)
    }

    onLinkClick(id) {
        let project = this.props.projects.find(element => {
            return id === element.id
        })
        this.setState({
            selectedProj: project
        })
    }

    render() {
        const {projects} = this.props
        
        const hero = projects.map(proj => {
            return <Thumbnail img={proj.acf.feature_image.url} 
                title={proj.title.rendered}
                subhd={proj.acf.subheading}
                key={proj.id}
                id={proj.id}
                onLinkClick={this.onLinkClick} />
        })

        return (
            <div>
                <h1 className="proj-thmbs__title">PROJECTS</h1>
                <div id="projects" className="proj-thmbs">
                    {hero}
                </div>
                <div>
                    <h2>New Section</h2>
                </div>
            </div>
        );
    }
}

export default Projects;
