import React from 'react'
import classes from './Card.module.css'


function Card(props) {
    return(
        <div className={classes.cardDiv}>
            <div className={classes.innerCardDiv}>
                <div className={classes.imageDiv}>
                    <img src={props.image} alt="Avatar" />
                </div>
                <div className={classes.description}>
                    <h4><b>{props.productName}</b></h4> 
                    <p>{props.productDescription}</p> 
                </div>
            </div>
        </div>
    )
}


export default Card

