import React, { Component } from 'react'
import classes from './About.module.css';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import storeImage from '../../assets/home_examples/pic2.jpg'
import storeImage2 from '../../assets/home_examples/pic1.jpg'
import storeImage3 from '../../assets/home_examples/pic3.jpg'
import storeImage4 from '../../assets/home_examples/pic4.jpg'
import storeImage5 from '../../assets/home_examples/pic5.jpg'
import storeImage6 from '../../assets/home_examples/pic6.jpg'
import storeImage7 from '../../assets/home_examples/pic7.jpg'
import storeImage8 from '../../assets/home_examples/pic8.jpg'

class About extends Component {
    state = {
        value: 0
    }


    onChange = value => this.setState({ value });


    render() {
        return(
            <div id="aboutus" className={classes.AboutDiv}>
                <div className={classes.innerAboutDiv}>
                    <div className={classes.secondInnerDiv}>
                        <h3>About Us</h3>
                        <p>Welcome to Tile Center USA. Always ready to serve you the best product! 
                            We offer all flooring types to meet your needs and help turn your dream house into 
                            your dream home with the look and feel you want in every room.
                        </p>
                        <hr />
                    </div>
                    <div className={classes.thirdInnerDiv}>
                        <div className={classes.storeImage}>
                            <Carousel
                                arrowLeft={<ion-icon style={{color: 'black', fontSize: '32px'}} name="arrow-dropleft"></ion-icon>}
                                arrowRight={<ion-icon style={{color: 'black',fontSize: '32px'}} name="arrow-dropright"></ion-icon>}
                                infinite
                                addArrowClickHandler>
                                <img src={storeImage} alt='products' />
                                <img src={storeImage2} alt='products' />
                                <img src={storeImage3} alt='products' />
                                <img src={storeImage4} alt='products' />
                                <img src={storeImage5} alt='products' />
                                <img src={storeImage6} alt='products' />
                                <img src={storeImage7} alt='products' />
                                <img src={storeImage8} alt='products' style={{objectPosition: '0 100%'}}/>
                            </Carousel>
                        </div>
                        <div className={classes.storePara}>
                            <div className={classes.storeParaTitle}>
                                <h5>Transform your Home </h5>
                            </div>
                            <div className={classes.storeParaInfo}>
                                <ul>
                                    <li>
                                        <p>Are you seeking for best and creative tiles to display in your new home? Here we, 
                                            Tile Center USA provide you unimaginable and attractive tile designs to decorate your home. 
                                            We have numerous collection imported from various countries to smarten your home.
                                        </p>
                                    </li>
                                    <li>
                                        <p>One has to choose the best flooring to give soul to your home. 
                                            As people loves to have unique designs in their home we have worked on it and 
                                            designed a new kind of tile which looks exactly like a stone.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default About