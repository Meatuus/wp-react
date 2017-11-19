import React from 'react';
import { Link } from 'react-router-dom';
import Typist from 'react-typist';
import './style.css';

const Logo = (props) => {
    const { title } = props
    return (
        <h1 className="nav-title">
            &#123;&nbsp;
            <Link to="/">
            <Typist className="nav-span" cursor={{ show: true, hideWhenDone: true, blink: true, element: '|', hideWhenDoneDelay: 3000 }} avgTypingDelay={250} startDelay={2000} >
                {title}
            </Typist>
            </Link>
            &nbsp;&#125;
        </h1>
    )
}

export default Logo;