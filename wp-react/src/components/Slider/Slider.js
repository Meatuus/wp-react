import React, { Component } from 'react';
// import React from 'react';
// import './style.css';
// import Slider from '../Slider/Slider';
// import lefty from './lefty.svg';
// import righty from './righty.svg';

class Slider extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            changingImage: false,
            currentImage: this.props.image
    //     //     mounted: false,
    //     //     featImages: this.props.project.gallery,
    //     //     selectedImage: this.props.project.gallery[0]
        }

    //     // this.close = this.close.bind(this)
    //     // this.stopPropagation = this.stopPropagation.bind(this)
    //     // this.imageLeft = this.imageLeft.bind(this)
    //     // this.imageRight = this.imageRight.bind(this)
    }

    // imageLeft() {
    //     const images = this.state.featImages
    //     const newImage = images.find((element) => {
    //         return element === images[images.findIndex((el) => {
    //             return el === this.state.selectedImage
    //         }) - 1]
    //     })
    //     this.setState({ selectedImage: newImage })
    // }

    // imageRight() {
    //     console.log('right');
    //     const images = this.state.featImages
    //     const newImage = images.find((element) => {
    //         return element === images[images.findIndex((el) => {
    //             return el === this.state.selectedImage
    //         }) + 1]
    //     })
    //     this.setState({ selectedImage: newImage })
    // }
    componentWillReceiveProps(nextProps) {
        if (nextProps.image !== this.props.image) {
            console.log('new image');
            this.setState({changingImage: true})
            setTimeout(function () { this.setState({ currentImage: nextProps.image }) }.bind(this), 1000);
            // this.setState({changingImage: false})
            setTimeout(function () { this.setState({ changingImage: false }) }.bind(this), 2000);
            // if (nextProps.visible) {
            //     // $(findDOMNode(this)).stop(true, true).fadeIn('slow');
            // } else {
            //     // $(findDOMNode(this)).stop(true, true).fadeOut('slow');
            // }
        }
    }

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
        const { image } = this.props
        const { changingImage, currentImage } = this.state

        const bg = {
            //     backgroundImage: `url(${project.acf.feature_image.url})`
            backgroundImage: `url(${currentImage.guid})`
        }

        // let leftArrow = null
        // let rightArrow = null
        // if ((featImages.findIndex((el) => { return el === selectedImage }) === 0) && (featImages.findIndex((el) => { return el === selectedImage }) === (featImages.length - 1))) {
        //     leftArrow = null
        //     rightArrow = null
        // } else if (featImages.findIndex((el) => { return el === selectedImage }) === 0) {
        //     leftArrow = null
        //     rightArrow = <img src={righty} alt="" className="right" onClick={this.imageRight} />
        // } else if (featImages.findIndex((el) => { return el === selectedImage }) === (featImages.length - 1)) {
        //     leftArrow = <img src={lefty} alt="" className="left" onClick={this.imageLeft} />
        //     rightArrow = null
        // } else {
        //     leftArrow = <img src={lefty} alt="" className="left" onClick={this.imageLeft} />
        //     rightArrow = <img src={righty} alt="" className="right" onClick={this.imageRight} />
        // }

        return (
            <div className={changingImage ? "proj__img changing" : "proj__img"} style={bg}>
                {this.props.children}
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