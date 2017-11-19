import React from 'react';
// import './style.css';
import Logo from '../../components/Logo/Logo';
import Nav from '../../components/Nav/Nav';

const Header = () => {
    return (
        <header className="App-header">
            <Logo title="Testing Name." />
            <Nav />
        </header>
    )
}

export default Header;