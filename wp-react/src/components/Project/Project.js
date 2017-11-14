import React, { Component } from 'react';
import './style.css';
import Slider from '../Slider/Slider';

class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mounted: false,
            featImages: this.props.project.gallery
        }

        this.close = this.close.bind(this)
        this.stopPropagation = this.stopPropagation.bind(this)
    }

    close() {
        console.log('project unmounted');
        this.setState({mounted: false})
        setTimeout(function() {this.props.onClose("")}.bind(this), 1000)
    }

    stopPropagation(e) {
        e.stopPropagation()
    }

    componentDidMount() {
        console.log('project mounted');
        setTimeout(function () { this.setState({ mounted: true }) }.bind(this), 10);
    }

    render() {
        const { project } = this.props
        const { mounted, featImages } = this.state

        return (
            <div className={mounted ? "proj__bg mounted" : "proj__bg"} onClick={this.close}>
                <div className={mounted ? "proj__container mounted" : "proj__container"} onClick={this.stopPropagation} onTransitionEnd={this.transitionEnd}>    
                    <span className="proj__close" onClick={this.close}>X</span>
                    <Slider images={featImages} />
                    <h2 className="proj__title">{project.acf.page_title}</h2>
                    <h3 className="proj__subhd">{project.acf.page_subheading}</h3>
                    <p className="proj__desc">{project.acf.page_description}</p>
                    <a href={project.acf.url} className="proj__link">
                        <button className="proj__btn">View Website</button>
                    </a>
                </div>
            </div>
        );
    }
}

export default Project;