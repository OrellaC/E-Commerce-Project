import React from 'react';
import eComm from "../Product/Images/eComm.png"

// Css
import "./styles.css"



const Cart = ({ cart, removeFromCart }) => {
    console.log(cart)
    return (
        <div className="cart-container">
                <img src={eComm} />
                {
                    cart && cart.map((items) => {
                        console.log(items)
                        return (
                            <div className="card" style={{ width: "18rem" }} key={items.title} >
                                <img src={items?.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"> {items.title} </h5>
                                    <p className="card-text">${items.price} </p>
                                    <button className="btn btn-primary" onClick={() => removeFromCart(items)}> Remove </button>
                                </div>

                            </div>
                        )
                    })
                }
                <div>
                    <h4>Subtotal:</h4>
                </div>
            </div>
            /* Closes Child container */
    );
}

export default Cart;
