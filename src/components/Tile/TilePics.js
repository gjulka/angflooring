import React from 'react'
import classes from './TilePics.module.css'
import tile1 from '../../assets/tile/tile1.jpg'
import tile2 from '../../assets/tile/tile2.jpg'
import tile3 from '../../assets/tile/tile3.jpg'
import tile4 from '../../assets/tile/tile4.jpg'


const TilePics = () => (
    <div className={classes.TilePics}>
        <div className={classes.allImages}>
            <img className={classes.image1} src={tile1} alt=""></img>
            <img className={classes.image2} src={tile2} alt=""></img>
            <img className={classes.image3} src={tile3} alt=""></img>
            <img className={classes.image4} src={tile4} alt=""></img>
        </div>
    </div>
)

export default TilePics
