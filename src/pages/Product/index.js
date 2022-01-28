import React from 'react';
import axios from 'axios';
const Product = async () => {
    try {
        const response = await axios.get("https://fakestoreapi.com/products")

    } catch (error) {
        console.log(error)
    }







return (
    <div>
        PRODUCT
    </div>
);
}


export default Product;
