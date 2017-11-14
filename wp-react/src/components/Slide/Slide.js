import React from 'react';
import './style.css';

const Slide = ({image, activeIndex, index}) => {
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

export default Slide;