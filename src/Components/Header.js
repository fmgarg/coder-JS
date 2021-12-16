import React from 'react';

import Nav from './NavBar';

import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
            <header>
                <NavLink to="/">
                    <h1>Home</h1>
                </NavLink>
                <Nav/>
            </header>
    )
}

export default Header;