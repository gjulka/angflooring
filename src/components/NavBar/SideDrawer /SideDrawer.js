import React from 'react'
import classes from './SideDrawer.module.css';
import {Link} from 'react-scroll'

function SideDrawer() {

    
    return(
        <div>
            <nav className={classes.SideDrawer}>
                <ul>
                    <div className={classes.productsSideLink}>
                        <Link 
                            to="aboutus"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >About Us</Link>
                    </div>
                    <div className={classes.productsSideLink}>
                        <Link 
                            to="products"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >Products</Link>
                    </div>
                    <div className={classes.productsSideLink}>
                        <Link 
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={1000}
                            duration={500}
                        >Contact</Link>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default SideDrawer