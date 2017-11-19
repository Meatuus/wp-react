import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './style.css';

const Nav = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {/* <li><Link to="/home/project">Project</Link></li> */}
                    <li><HashLink to="/#projects">Projects</HashLink></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;