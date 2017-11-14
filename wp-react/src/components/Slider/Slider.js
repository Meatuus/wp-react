import React, { Component } from 'react';
// import React from 'react';
import './style.css';
import Slide from '../Slide/Slide';
import lefty from '../Project/lefty.svg';
import righty from '../Project/righty.svg';

class Slider extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            // changingImage: false,
            // changingDirection: null,
            // currentImage: this.props.image,
            // prevImage: null,
    //     //     mounted: false,
    //     //     featImages: this.props.project.gallery,
    //     //     selectedImage: this.props.project.gallery[0]
            activeIndex: 0
        }

    //     // this.close = this.close.bind(this)
    //     // this.stopPropagation = this.stopPropagation.bind(this)
        this.previousImage = this.previousImage.bind(this)
        this.nextImage = this.nextImage.bind(this)
    }

    previousImage() {
        // const images = this.state.featImages
        // const newImage = images.find((element) => {
        //     return element === images[images.findIndex((el) => {
        //         return el === this.state.selectedImage
        //     }) - 1]
        // })
        this.setState({ activeIndex: --this.state.activeIndex })
    }

    nextImage() {
        // console.log('right');
        // const images = this.state.featImages
        // const newImage = images.find((element) => {
        //     return element === images[images.findIndex((el) => {
        //         return el === this.state.selectedImage
        //     }) + 1]
        // })
        this.setState({ activeIndex: ++this.state.activeIndex })
    }
    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.image !== this.props.image) {
    //         this.setState({ 
    //             changingDirection: nextProps.direction, 
    //             prevImage: this.state.currentImage,
    //             currentImage: nextProps.image,
    //             // changingImage: true
    //         })

    //         setTimeout(function() {
    //             this.setState({
    //                 changingImage: true, 
    //                 // changingDirection: null
    //                 // currentImage: nextProps.image
    //                 // prevImage: null
    //             })
    //         }.bind(this), 100)

    //         setTimeout(function () {
    //             this.setState({
    //                 changingImage: false,
    //                 // changingDirection: null
    //                 // currentImage: nextProps.image
    //                 prevImage: null
    //             })
    //         }.bind(this), 2000)
    //     }
    // }

    componentDidMount() {
        console.log('slider mounted');
        // setTimeout(function () { this.setState({ mounted: true }) }.bind(this), 10);
    }


    // 1. onclick - setstate 'ie 'removing item
    // 2. conditoional statement in return div - if state give class that will fade out image
    // 3. set state of next selected image
    // 4. have default of selected image to have low opacity
    // 5. then setstaet of 'removing item' to false and bring opacity back to 1

    render() {
        const { images } = this.props
        const { activeIndex } = this.state

        // const bg = {
        //     //     backgroundImage: `url(${project.acf.feature_image.url})`
        //     backgroundImage: `url(${currentImage.guid})`
        // }

        // let bgPrev = null
        // if (prevImage) {
        //     bgPrev = {
        //         backgroundImage: `url(${prevImage.guid})`
        //     }
        // }
    
        // let classes = ["proj__img--prev"]
        // if (changingDirection && changingImage) {
        //     classes.push(`${changingDirection} changing`)
        // } else if (changingDirection) {
        //     classes.push(`${changingDirection}`)
        // }

        let allSlides = images.map((item, index) => <Slide image={item} activeIndex={activeIndex} index={index} key={index} />)

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
                {/* <div className={changingImage ? `proj__img ${changingDirection} changing` : "proj__img"} style={bg}></div>
                <div className={classes.join(' ')} style={bgPrev}></div> */}

                <ul className="slides">
                    {allSlides}
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

// const Slider = ( { image, children } ) => {
//     const compClasses = ["proj__img"];
//     if (image) {
//         compClasses.push("adding")
//     }
//     const bg = {
//         backgroundImage: `url(${image.guid})`
//     }

//     return (
//         <div className={compClasses.join(" ")} style={bg}>
//             {children}
//         </div>
//     );
// }


// export default Slider;