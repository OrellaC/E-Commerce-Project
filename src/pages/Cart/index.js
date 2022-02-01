import React from 'react';
import Product from '../Product';
import { useState } from 'react'
const Cart = () => {
    const [itemList, setItemList] = useState([])

    return (
       
       <div className="product-container">

            {itemList.map((items) => {
                    return (
                        <div className="card" style={{ width: "18rem" }} key={items?.title} >
                            <img src={items.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"> {items.title} </h5>
                                <p className="card-text">${items.price} </p>
                                <button className="btn btn-primary"> Remove from Cart </button>

                            </div>
                        </div>

                    )
                })
            }
        </div>

    );
}

export default Cart;
