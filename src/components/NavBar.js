import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
            <a className="brand-logo">Poke'Times</a>
            <ul className='right'>
                <li><Link to="/">Home</Link></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><Link to="/content">Content</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default NavBar;