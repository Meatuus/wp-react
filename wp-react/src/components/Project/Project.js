import React, { Component } from 'react';
import './style.css';

class Project extends Component {
    constructor() {
        super()
        this.state = {
            mounted: false
        }

        this.close = this.close.bind(this)
        this.stopPropagation = this.stopPropagation.bind(this)
        // this.addFade = this.addFade.bind(this)
    }

    close() {
        this.props.onClose("")
    }

    stopPropagation(e) {
        e.stopPropagation()
    }

    componentDidMount() {
        console.log('project mounted');
        setTimeout(function () { this.setState({ mounted: true }) }.bind(this), 10);
    }

    render() {
        const {project} = this.props
        const {mounted} = this.state

        const bg = {
            backgroundImage: `url(${project.acf.gallery.url})`
        }
        return (
            <div className={mounted ? "proj__bg mounted" : "proj__bg"} onClick={this.close}>
                <div className={mounted ? "proj__container mounted" : "proj__container"} onClick={this.stopPropagation} onTransitionEnd={this.transitionEnd}>    
                    <span className="proj__close" onClick={this.close}>X</span>
                    <div className="proj__img" style={bg}></div>                            
                    <h2 className="proj__title">{project.acf.page_title}</h2>
                    <h3 className="proj__subhd">{project.acf.page_subheading}</h3>
                    <p className="proj__desc">{project.acf.page_description}</p>
                    <a href={project.acf.url} className="proj__link"><button className="proj__btn">View Website</button></a>
                </div>
            </div>
        );
    }
}

export default Project;