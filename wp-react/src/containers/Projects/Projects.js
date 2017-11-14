import React, { Component } from 'react';
import './styles.css';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import Project from '../../components/Project/Project';
import FilterTags from '../../components/FilterTags/FilterTags';

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

        this.onCloseSelected = this.onCloseSelected.bind(this);
    }

    onCloseSelected() {
        this.setState({selectedProj: ""})
    }

    render() {
        const {projects} = this.props
        const {selectedProj} = this.state
        
        const projectThumbs = projects.map((proj, index) => (
            <Thumbnail img={proj.acf.feature_image.url} 
                title={proj.title.rendered}
                subhd={proj.acf.subheading}
                key={index}
                id={proj.id}
                onLinkClick={this.onLinkClick} />
        ))

        let project = null
        if (selectedProj !== "") {
            project = <Project project={this.state.selectedProj} onClose={this.onCloseSelected} onTransitionEnd={this.transitionEnd}/>
        }

        return (
            <div className="projects">
                <h1 className="proj-thmbs__title">PROJECTS</h1>
                <FilterTags />
                <div id="projects" className="proj-thmbs">
                    {projectThumbs}
                </div>
                {project}
            </div>
        );
    }
}

export default Projects;
