import React from 'react'
import classes from './Backdrop.module.css';

function BackDrop(props) {
    return(
        <div className={classes.BackDrop} onClick={props.click}>

        </div>
    )
}

export default BackDrop