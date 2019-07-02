import React, {Component} from 'react';
import {Link} from 'react-scroll'
import classes from './NavBar.module.css';



class Navbar extends Component {
    render() {
        return(
            <div className={classes.Navbar}>
                <div className={classes.innerNav}>
                    <div className={classes.menu}>
                        <button style={{color: 'white'}} onClick={this.props.sideDrawerClickHandler} className={classes.menuButton}><ion-icon name="menu"></ion-icon></button>
                        <div className={classes.menuList}>
                            <ul>
                                <li >
                                    <div className={classes.aboutLink}>
                                        <Link
                                            to="home"
                                            spy={true}
                                            smooth={true}
                                            offset={0}
                                            duration={500}
                                        >Home</Link>
                                    </div>
                                </li>
                                <li >
                                    <div className={classes.aboutLink}>
                                        <Link
                                            to="aboutus"
                                            spy={true}
                                            smooth={true}
                                            offset={0}
                                            duration={500}
                                        >About Us</Link>
                                    </div>
                                </li>
                                <li className={classes.productsDropDown}>
                                    <div className={classes.productsDropDownLink}>
                                        <Link
                                            to="products"
                                            spy={true}
                                            smooth={true}
                                            offset={0}
                                            duration={500}
                                        >Products</Link>
                                    </div>
                                    <div className={classes.dropDownContent}>
                                        <a href='/'>Granite</a>
                                        <a href='/'>Hardwood/Laminate</a>
                                        <a href='/'>Tile</a>
                                        <a href='/'>Carpet</a>
                                    </div>
                                </li>
                                <li>
                                    <div className={classes.aboutLink}>
                                        <Link
                                            to="contact"
                                            spy={true}
                                            smooth={true}
                                            offset={0}
                                            duration={500}
                                        >Contact</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.logo}>
                        <h1>ANG Flooring</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;