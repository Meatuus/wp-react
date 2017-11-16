import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './styles.css';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import Project from '../../components/Project/Project';
import FilterTags from '../../components/FilterTags/FilterTags';

class Projects extends Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedProj: "",
            filterTag: "all"
        }

        this.onLinkClick = this.onLinkClick.bind(this)
        this.onFilterTags = this.onFilterTags.bind(this)
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

    onFilterTags(tag) {
        this.setState({filterTag: tag})
    }

    render() {
        const projects = this.props
        const {selectedProj, filterTag} = this.state
        
        const projectThumbs = projects.projects.map((proj, index) => (
            <Thumbnail img={proj.acf.feature_image.url} 
                title={proj.title.rendered}
                subhd={proj.acf.subheading}
                key={proj.id}
                id={proj.id}
                index={index}
                selectedTag={proj.stack_tag.includes(filterTag) || filterTag === "all" ? true : false}
                onLinkClick={this.onLinkClick} />
        ))

        let project = null
        if (selectedProj !== "") {
            project = <Project project={this.state.selectedProj} onClose={this.onCloseSelected}/>
        }

        return (
            <div className="projects">
                <h1 className="proj-thmbs__title">PROJECTS</h1>
                <FilterTags selectedTag={filterTag} onTagClick={this.onFilterTags} />
                <div id="projects" className="proj-thmbs">
                    <CSSTransitionGroup
                        transitionName="example"
                        transitionLeave={true}
                        transitionEnterTimeout={2000}
                        transitionLeaveTimeout={2000}> 
                        {projectThumbs}
                    </CSSTransitionGroup> 
                </div>
                {project}
            </div>
        );
    }
}

export default Projects;
