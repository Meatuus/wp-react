import React from 'react';
import Typist from 'react-typist';
import './style.css';

const Logo = (props) => {
    const { title } = props
    return (
        <nav>
            <h2 className="nav-title">
                &#123;&nbsp;
                <Typist className="nav-span" cursor={{ show: true, hideWhenDone: true, blink: true, element: '|', hideWhenDoneDelay: 3000 }} avgTypingDelay={250} startDelay={2000} >
                    {title}
                </Typist>
                &nbsp;&#125;
            </h2>
        </nav>
    )
}

export default Logo;