import React from 'react'
import classes from './Home.module.css';
import { Link } from 'react-scroll'


function Home() {
    return (
        <div id="home" className={classes.HomeDiv}>
            <div className={classes.homePhrase}>
                <h1>CHOOSE YOUR NEXT FLOOR</h1>
                <button className={classes.productsButton}>
                    <Link
                        to="products"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >View Our Products</Link>
                </button>
            </div>
        </div>
    )
}

export default Home