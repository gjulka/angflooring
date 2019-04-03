import React from 'react'
import Fade from 'react-reveal/Fade'
import classes from './Home.module.css';

import arrow from '../../assets/misc/down-arrow.svg'
import laminate1 from '../../assets/laminate/laminate1_single.jpg'
import laminate2 from '../../assets/laminate/laminate2_single.jpeg'
import laminate3 from '../../assets/laminate/laminate3_single.jpeg'
import laminate4 from '../../assets/laminate/laminate4_single.jpeg'


import Laminate from '../../components/Laminate/Laminate'
import LaminatePics from '../../components/Laminate/LaminatePics';
import Tile from '../../components/Tile/Tile'
import TilePics from '../../components/Tile/TilePics'
import Granite from  '../../components/Granite/Granite'
import GranitePics from '../../components/Granite/GranitePics'
import Description from '../../components/Description/Description'
import DescriptionPics from '../../components/Description/DescriptionPics'


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
            <div className={classes.Arrow}><img src={arrow} alt=""></img></div>
            <div className={classes.Arrow2}><img src={arrow} alt=""></img></div>
        </div>

        {/* 
            Each section uses same class...could possibly change if you run into errors.
            Also, added a resuable component called Description, to eliminate excessive component creation. 
            This may cause errors with animation but we shall see.
        */}

        <section className={classes.Details}>
            <Description>
                <Fade left>
                    <h1>Laminate</h1>
                    <h4>We offer top quality laminate from top rated manufacturers, with a high range of textures and colors.</h4>
                </Fade>
            </Description>
            <DescriptionPics>
                <Fade right>
                    <h1>Laminate Pics</h1>
                    <img className={classes.image} src={laminate1} alt=""></img>
                    <img className={classes.image} src={laminate2} alt=""></img>
                    <img className={classes.image} src={laminate3} alt=""></img>
                    <img className={classes.image} src={laminate4} alt=""></img>
                </Fade>
            </DescriptionPics>
        </section>
        <section className={classes.Details}>
            <TilePics>
                
            </TilePics>
            <Tile>

            </Tile>
        </section>
        <section className={classes.Details}>
            <Granite />
            <GranitePics />
        </section>

    </div>
)

export default Home