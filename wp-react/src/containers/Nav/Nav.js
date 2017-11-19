import React, { Component } from 'react';
import './style.css';
import Logo from '../../components/Logo/Logo';

class Nav extends Component {

    render() {
        return (
            <nav>
                <Logo title="Testing Name." />
            </nav>
        );
    }
}

export default Nav;