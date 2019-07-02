import React from 'react'
import classes from './Products.module.css';
import Card from '../../components/Card/Card'

import graniteImage from '../../assets/home_examples/granite.jpeg'
import hardwoodImage from '../../assets/home_examples/hardwood.jpeg'
import tileImage from '../../assets/home_examples/tile.jpg'
import carpetImage from '../../assets/home_examples/carpet.jpg'


function Products() {
    return(
        <div id="products" className={classes.ProductsDiv}>
            <div className={classes.innerProductsDiv}>
                <div className={classes.secondInnerProductsDiv}>
                    <Card 
                        image={graniteImage}
                        productName={'Granite'}
                        productDescription={'High Quality, Exotic Granite'}/>
                    <Card 
                        image={hardwoodImage}
                        productName={'Hardwood/Laminate'}
                        productDescription={'High Range of Hardwood'}/>
                    <Card 
                        image={tileImage}
                        productName={'Tile'}
                        productDescription={'Porcelain and Ceramic Tiles'}/>
                    <Card 
                        image={carpetImage}
                        productName={'Carpet'}
                        productDescription={'Carpets Made for Any Room'}/>
                    
                </div>
            </div>
        </div>
    )
}

export default Products