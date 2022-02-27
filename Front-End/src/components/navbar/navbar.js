import React from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.css';

export const NavBar = _ => {
    return (
        <header className='navbar'>
            <div className='navbar__icon'>
                <h1>
                    <NavLink to='/'>Testing Environment</NavLink>
                </h1>
            </div>
            <nav className='navbar__items'>
                <ul>
                    <li>
                        <NavLink to='/dataFetch'>ReadData</NavLink>
                    </li>
                    <li>
                        <NavLink to='/test'>Test</NavLink>
                    </li>
                    <li>
                        <NavLink to='/linear-regression'>Linear Regression</NavLink>
                    </li>
         
                </ul>
            </nav>
        </header>
    );
}