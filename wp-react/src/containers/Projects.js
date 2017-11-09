import React, { Component } from 'react';

class Projects extends Component {

    render() {
        const hero = this.props.data.map(page => {
            return <div key={page.id}>
                <div>
                    <img src={page.acf.hero_image.url} alt={page.acf.hero_image.title} />
                </div>
                <h1>{page.acf.hero_title}</h1>
                <p>{page.acf.hero_description}</p>
            </div>
        })

        return (
            <div id="projects">
                <h1>Hello World</h1>
                <p>Projects page</p>
                {hero}
            </div>
        );
    }
}

export default Projects;