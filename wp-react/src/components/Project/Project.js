import React, { Component } from 'react';
import './style.css';
import lefty from './lefty.svg';
import righty from './righty.svg';

class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mounted: false,
            featImages: this.props.project.gallery
        }

        this.close = this.close.bind(this)
        this.stopPropagation = this.stopPropagation.bind(this)
        this.rotateImages = this.rotateImages.bind(this)
    }

    close() {
        console.log('project unmounted');
        this.setState({mounted: false})
        setTimeout(function() {this.props.onClose("")}.bind(this), 1000)
    }

    stopPropagation(e) {
        e.stopPropagation()
    }

    rotateImages() {
        console.log('direction');
    }

    componentDidMount() {
        console.log('project mounted');
        setTimeout(function () { this.setState({ mounted: true }) }.bind(this), 10);
    }

    render() {
        const {project} = this.props
        const {mounted, featImages} = this.state

        const bg = {
        //     backgroundImage: `url(${project.acf.feature_image.url})`
            backgroundImage: `url(${featImages[1].guid})`
        }

        return (
            <div className={mounted ? "proj__bg mounted" : "proj__bg"} onClick={this.close}>
                <div className={mounted ? "proj__container mounted" : "proj__container"} onClick={this.stopPropagation} onTransitionEnd={this.transitionEnd}>    
                    <span className="proj__close" onClick={this.close}>X</span>
                    <div className="proj__img" style={bg}><img src={lefty} alt="" className="left" onClick={this.rotateImages} /><img src={righty} alt="" className="right" onClick={this.rotateImages} /></div>                            
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