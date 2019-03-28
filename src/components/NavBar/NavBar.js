import React from 'react';


const Navbar = () => (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="navbar-brand">Navbar</div>
        <div className="collapse navbar-collapse">
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
)

export default Navbar;