import React, { Component } from 'react';

class Projects extends Component {

    render() {
        const {projects} = this.props

        const hero = projects.map(proj => {
            return <div key={proj.id} className="proj-thmb__container">
                <div className="proj-thmb__img-wrap">
                    <img className="proj-thmb__img" src={proj.acf.feature_image.url} alt={proj.acf.feature_image.title} />
                </div>
                <h1 className="proj-thmb__title">{proj.title.rendered}</h1>
                <p className="proj-thmb__subheading">{proj.acf.subheading}</p>
            </div>
        })

        return (
            <div>
                <h1 className="proj-thmbs__title">Projects</h1>
                <div id="projects" className="proj-thmbs">
                    {hero}
                </div>
            </div>
        );
    }
}

export default Projects;