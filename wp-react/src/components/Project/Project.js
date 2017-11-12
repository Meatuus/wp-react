import React, { Component } from 'react';
import './style.css';
import lefty from './lefty.svg';
import righty from './righty.svg';

class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mounted: false,
            featImages: this.props.project.gallery,
            selectedImage: this.props.project.gallery[0]
        }

        this.close = this.close.bind(this)
        this.stopPropagation = this.stopPropagation.bind(this)
        this.imageLeft = this.imageLeft.bind(this)
        this.imageRight = this.imageRight.bind(this)
    }

    close() {
        console.log('project unmounted');
        this.setState({mounted: false})
        setTimeout(function() {this.props.onClose("")}.bind(this), 1000)
    }

    stopPropagation(e) {
        e.stopPropagation()
    }

    imageLeft() {
        console.log('left');
        
    }

    imageRight() {
        console.log('right');
    }

    componentDidMount() {
        console.log('project mounted');
        setTimeout(function () { this.setState({ mounted: true }) }.bind(this), 10);
    }

    render() {
        const {project} = this.props
        const {mounted, featImages, selectedImage} = this.state

        const bg = {
        //     backgroundImage: `url(${project.acf.feature_image.url})`
            backgroundImage: `url(${selectedImage.guid})`
        }

        let leftArrow = null
        let rightArrow = null
        if (featImages.findIndex((el) => { return el === selectedImage }) === 0) {
            leftArrow = null
            rightArrow = <img src={righty} alt="" className="right" onClick={this.imageRight} />
        } else if (featImages.findIndex((el) => { return el === selectedImage }) === (featImages.length - 1)) {
            leftArrow = <img src={lefty} alt="" className="left" onClick={this.imageLeft} />
            rightArrow = null
        } else {
            leftArrow = <img src={lefty} alt="" className="left" onClick={this.imageLeft} />
            rightArrow = <img src={righty} alt="" className="right" onClick={this.imageRight} />
        }

        return (
            <div className={mounted ? "proj__bg mounted" : "proj__bg"} onClick={this.close}>
                <div className={mounted ? "proj__container mounted" : "proj__container"} onClick={this.stopPropagation} onTransitionEnd={this.transitionEnd}>    
                    <span className="proj__close" onClick={this.close}>X</span>
                    <div className="proj__img" style={bg}>
                        {leftArrow}
                        {rightArrow}
                    </div>                            
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