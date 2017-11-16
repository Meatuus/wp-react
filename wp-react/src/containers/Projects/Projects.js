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
            filteredProjects: [],
            filterTag: "all",
            items: ['hello', 'world', 'click', 'me']
        }

        this.onLinkClick = this.onLinkClick.bind(this)
        this.onFilterTags = this.onFilterTags.bind(this)
    }

    // componentWillReceiveProps(nextProps) {
    //     if (this.props !== nextProps) {
    //         console.log('inside willreceive');
    //         this.setState({
    //             filteredProjects: nextProps.projects
    //         })
    //     }
    // }

    componentDidMount() {
        this.setState({
            filteredProjects: this.props.projects
        })
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
        let allProjects = this.props.projects

        if (tag === "all") {
            this.setState({
                filteredProjects: this.props.projects,
                filterTag: tag
            })
        } else {
            let filtered = allProjects.filter(proj => proj.stack_tag.includes(tag))
            this.setState({
                filteredProjects: filtered,
                filterTag: tag
            })
        }
    }

    render() {
        const {selectedProj, filteredProjects, filterTag} = this.state
        
        const projectThumbs = filteredProjects.map((proj, index) => (
            <Thumbnail img={proj.acf.feature_image.url} 
                title={proj.title.rendered}
                subhd={proj.acf.subheading}
                key={proj.id}
                id={proj.id}
                index={index}
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
                        transitionAppear={true}
                        transitionAppearTimeout={2500}
                        transitionEnterTimeout={1000}
                        transitionLeaveTimeout={1000}> 
                        {projectThumbs}
                    </CSSTransitionGroup> 
                </div>
                {project}
            </div>
        );
    }
}

export default Projects;
