import React, { Component } from 'react';
import './styles.css';

class Projects extends Component {

    render() {
        const {projects} = this.props

        
        const hero = projects.map(proj => {
            let bg = {
                background: `url(${proj.acf.feature_image.url})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover' 
            }
            return <div key={proj.id} className="container" style={bg}>
                {/* <div className="proj-thmb__img-wrap" >
                    <img className="proj-thmb__img" src={proj.acf.feature_image.url} alt={proj.acf.feature_image.title} />
                </div> */}
                <div className="titles">
                    <h2 className="h2">{proj.title.rendered}</h2>
                    <h3 className="h3">{proj.acf.subheading}</h3>
                </div>
                <a href="" className="link">Learn More</a>
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