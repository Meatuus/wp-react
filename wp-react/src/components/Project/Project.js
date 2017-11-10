import React, { Component } from 'react';
import './style.css';

class Project extends Component {
    constructor() {
        super();
        this.state = {
            hovered: false
        }

        this.onHoverOver = this.onHoverOver.bind(this);
        this.onHoverOut = this.onHoverOut.bind(this);
    }

    onHoverOver() {
        console.log(this);
        this.setState({ hovered: true })
    }

    onHoverOut() {
        console.log(this);
        this.setState({ hovered: false })
    }

    render() {
        const { project } = this.props

        // const hero = projects.map(proj => {
        //     let bg = {
        //         background: `url(${proj.acf.feature_image.url})`,
        //         backgroundPosition: 'center',
        //         backgroundSize: 'cover'
        //     }
        //     return <div key={proj.id} className="thumb__container" style={bg} onMouseEnter={this.hovered}>
        //         <div className="thumb__titles hovered">
        //             <h2 className="thumb__h2">{proj.title.rendered}</h2>
        //             <h3 className="thumb__h3">{proj.acf.subheading}</h3>
        //         </div>
        //         <a href="" className="thumb__link hovered">Learn More</a>
        //     </div>
        // })
        
        let bg = {
            background: `url(${project.acf.feature_image.url})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }
        return (
            <div className="thumb__container" style={bg} onMouseEnter={this.onHoverOver} onMouseLeave={this.onHoverOut}>
                <div className="thumb__titles hovered">
                    <h2 className="thumb__h2">{project.title.rendered}</h2>
                    <h3 className="thumb__h3">{project.acf.subheading}</h3>
                </div>
                <a href="" className="thumb__link hovered">Learn More</a>
            </div>
        );
    }
}

export default Project;