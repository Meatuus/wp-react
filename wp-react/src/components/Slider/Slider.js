import React, { Component } from 'react';
import './style.css';
import Slide from '../Slide/Slide';
import lefty from '../../Assets/lefty.svg';
import righty from '../../Assets/righty.svg';

class Slider extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            activeIndex: 0
        }

        this.previousImage = this.previousImage.bind(this)
        this.nextImage = this.nextImage.bind(this)
    }

    previousImage() {
        let currentIndex = this.state.activeIndex
        this.setState({ activeIndex: --currentIndex })
    }

    nextImage() {
        let currentIndex = this.state.activeIndex
        this.setState({ activeIndex: ++currentIndex })
    }

    render() {
        const { images } = this.props
        const { activeIndex } = this.state

        let slidesList = images.map((item, index) => (
            <Slide image={item} activeIndex={activeIndex} index={index} key={index} />
        ))

        let leftArrow = null
        let rightArrow = null
        if (images.length === 1) {
            leftArrow = null
            rightArrow = null
        } else if (activeIndex === 0) {
            leftArrow = null
            rightArrow = <img src={righty} alt="" className="right" onClick={this.nextImage} />
        } else if (activeIndex === (images.length - 1)) {
            leftArrow = <img src={lefty} alt="" className="left" onClick={this.previousImage} />
            rightArrow = null
        } else {
            leftArrow = <img src={lefty} alt="" className="left" onClick={this.previousImage} />
            rightArrow = <img src={righty} alt="" className="right" onClick={this.nextImage} />
        }

        return (
            <div>
                <ul className="slides">
                    {slidesList}
                </ul>
                <div className="arrows">
                    {leftArrow}
                    {rightArrow}
                </div>
            </div>                
        );
    }
}

export default Slider;
