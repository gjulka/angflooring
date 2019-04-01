import React from 'react'
import classes from './Description.module.css'


const Description = (props) => (
    <div className={classes.Description}>
        <div>
            {props.children}
        </div>
    </div>

)

export default Description

