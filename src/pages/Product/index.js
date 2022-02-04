import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import App from "../../App"

// Css
import "./styles.css"


const Product = ({itemList, items, addToCart}) => {
    console.log(itemList)
    return (
        <div className="product-container">

            {
                itemList.map((items) => {
                    return (
                        <div className="card" style={{ width: "30rem" }} key={items?.title} >
                            <img src={items.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"> {items.title} </h5>
                                <p className="card-text">${items.price} </p>
                                <button className="btn btn-primary" onClick={()=>addToCart(items)}> Add to Cart</button>
                                
                            </div>
                        </div>
                
                    )
                })
            }
        </div>

    );
}



export default Product;
