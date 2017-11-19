import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './style.css';

const Nav = () => {
    return (
        <nav>
            <ul className="nav-list">
                {/* <li className="nav-item"><Link to="/">Home</Link></li> */}
                {/* <li><Link to="/home/project">Project</Link></li> */}
                <li className="nav-item"><HashLink to="/#projects">Projects</HashLink></li>
                <li className="nav-item"><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;