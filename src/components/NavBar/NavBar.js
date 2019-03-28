import React from 'react';
import classes from './NavBar.module.css';


const Navbar = () => (
    <div className={classes.NavBar}>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="navbar-brand">ANG Flooring</div>
            <div className="collapse navbar-collapse moveRight">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    
)

export default Navbar;