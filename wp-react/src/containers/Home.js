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
        // const dataUrl = "http://local.site.com/wp-json/wp/v2/pages/"
        const projectsUrl = "http://local.site.com/wp-json/wp/v2/projects"

        fetch(projectsUrl)
            .then(res => res.json())
            .then((json) => {
                this.setState({ projects: json })
            })
    }

    render() {
        return (
            <div>
                <h2>Home PAge</h2>
                <Projects projects={this.state.projects} />
            </div>
        );
    }
}

export default Home;