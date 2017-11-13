import React, { Component } from 'react';
import './style.css';
import Slider from '../Slider/Slider';
import lefty from './lefty.svg';
import righty from './righty.svg';

class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mounted: false,
            featImages: this.props.project.gallery,
            selectedImage: this.props.project.gallery[0],
            slideDirection: null
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
        const images = this.state.featImages
        const newImage = images.find((element) => { 
            return element === images[images.findIndex((el) => { 
                return el === this.state.selectedImage
             }) - 1] 
        })
        this.setState({selectedImage: newImage, slideDirection: "slideLeft"})
    }

    imageRight() {
        const images = this.state.featImages
        const newImage = images.find((element) => {
            return element === images[images.findIndex((el) => {
                return el === this.state.selectedImage
            }) + 1]
        })
        this.setState({ selectedImage: newImage, slideDirection: "slideRight" })
    }

    componentDidMount() {
        console.log('project mounted');
        setTimeout(function () { this.setState({ mounted: true }) }.bind(this), 10);
    }


    // 1. onclick - setstate 'ie 'removing item
    // 2. conditoional statement in return div - if state give class that will fade out image
    // 3. set state of next selected image
    // 4. have default of selected image to have low opacity
    // 5. then setstaet of 'removing item' to false and bring opacity back to 1

    render() {
        const { project } = this.props
        const { mounted, featImages, selectedImage, slideDirection } = this.state

        const bg = {
        //     backgroundImage: `url(${project.acf.feature_image.url})`
            backgroundImage: `url(${selectedImage.guid})`
        }

        let leftArrow = null
        let rightArrow = null
        if ((featImages.findIndex((el) => { return el === selectedImage }) === 0) && (featImages.findIndex((el) => { return el === selectedImage }) === (featImages.length - 1))) {
            leftArrow = null
            rightArrow = null
        } else if (featImages.findIndex((el) => { return el === selectedImage }) === 0) {
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
                    {/* <div className="proj__img-wrap"> */}
                        <Slider image={selectedImage} direction={slideDirection}>
                        </Slider>
                        {leftArrow}
                        {rightArrow}
                    {/* </div> */}

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