import React, { Component } from 'react';
// import React from 'react';
import './style.css';

class Slide extends Component {
    render() {
        const { image, activeIndex, index } = this.props

        const bg = {
            backgroundImage: `url(${image.guid})`
        }

        let classList = ["slide"]
        if (activeIndex === index) {
            classList.push("active")
        } else if (activeIndex === index + 1) {
            classList.push("prev")
        } else if (activeIndex === index - 1) {
            classList.push("next")
        } else if (activeIndex > index) {
            classList.push("on-left")
        } else {
            classList.push("on-right")
        }

        return (
            <li className={classList.join(' ')}>
                <div className="proj__img" style={bg}></div>
            </li>
        );
    }
}

export default Slide;

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