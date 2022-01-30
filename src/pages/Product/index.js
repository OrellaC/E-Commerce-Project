import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'

// Css
import "./styles.css"


const Product = () => {
    const [itemList, setItemList] = useState([])
    // const [cart, setCart] = useState([])
    const fetchProduct = async () => {

        try {
            const response = await axios.get("https://fakestoreapi.com/products")
            console.log(itemList)

            setItemList(response.data)

        } catch (error) {
            console.log(error)
        }
    }

    // const addToCart = (items) => {
    //     console.log(items, 'has been added to your cart')
    //     setCart([...cart, items])
    // }

    useEffect(() => {
        fetchProduct()
        // Dependency array: if empty, it will call useEffect once only when DOM Component loads
    }, [])
    return (
        <div className="product-container">

            {
                itemList.map((items) => {
                    return (
                        <div className="card" style={{ width: "18rem" }} key={items?.title} >
                            <img src={items.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"> {items.title} </h5>
                                <p className="card-text">${items.price} </p>
                                <button className="btn btn-primary" onClick={()=> addToCart(items)}>Add to Cart</button>
                                

                            </div>
                        </div>
                    )
                })
            }
        </div>

    );
}



export default Product;
