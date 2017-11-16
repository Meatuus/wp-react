import React, { Component } from 'react';
import Projects from './Projects/Projects';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        const projectsUrl = "http://local.site.com/wp-json/wp/v2/projects"

        fetch(projectsUrl)
            .then(res => res.json())
            .then((json) => {
                console.log(json);
                this.setState({ projects: json })
            })
    }

    render() {
        const projects = this.state
        let allProjects = null
        // console.log(projects.projects);
        if (projects.projects.length > 1) {
            // console.log(projects);
            // allProjects = projects
            allProjects = <Projects projects={projects.projects} />
        }
        return (
            <div>
                <h2>Home PAge</h2>
                {/* <Projects projects={this.state.projects} /> */}
                {allProjects}
            </div>
        );
    }
}

export default Home;