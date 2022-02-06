import React from 'react';
import Product from '../Product';
import cartImage from "./Images/cartImage.png"



const Cart = ({ cart, removeFromCart }) => {
    console.log(cart)
    return (
        <div className="product-container">
            <div className='product-child'>

           
            <img src={cartImage} />
          

            {
                cart && cart.map((items) => {
                    console.log(items)
                    return (
                        <div className="card" style={{ width: "18rem" }} key={items.title} >
                            <img src={items?.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title"> {items.title} </h5>
                                <p className="card-text">${items.price} </p>
                                <button className="btn btn-primary" onClick={()=>removeFromCart(items)}> Remove </button>
                                </div>
                               
                                </div>

                                /* Adjusts quantity of item */
                                /* <button onClick={quantity.IncrementItem}>Click to increment by 1</button>
                                <button onClick={quantity.DecreaseItem}>Click to decrease by 1</button>
                                <button onClick={quantity.ToggleClick}>
                                    {quantity.state.show ? 'Hide number' : 'Show number'}
                                </button>
                                {quantity.state.show ? <h2>{quantity.state.clicks}</h2> : ''} */  
                    )
                })
            }
            <div>
                <h4>Subtotal:</h4>
            </div>


            </div>
            {/* Closes Child container */}
        </div>
        // Closes Product container ^
    );
}

export default Cart;
