import React from 'react'
import classes from './DescriptionPics.module.css'

const DescriptionPics = (props) => (
    <div className={classes.DescriptionPics}>
        <div>
            {props.children}
        </div>
    </div>
)   

export default DescriptionPics


