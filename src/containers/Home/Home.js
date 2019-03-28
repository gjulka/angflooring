import React from 'react'

import arrow from '../../assets/down-arrow.svg'
import classes from './Home.module.css';

const Home = () => (
    <div>
        <div className={classes.Home}>
            <div className={classes.HomeBody}>
                <h1>Choose your next floor</h1>
                <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </h6>
            </div>
            <div className={classes.Arrow}><img src={arrow}></img></div>
            <div className={classes.Arrow2}><img src={arrow}></img></div>
        </div>
        <div className={classes.Details}>
            <h1>more details</h1>
        </div>
    </div>
)

export default Home