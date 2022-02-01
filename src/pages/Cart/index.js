import React from 'react';

const Cart = ({cart}) => {
    console.log(cart)
    return (
        <div className="product-container">

        {
            cart && cart.map((items) => {
                console.log(items)
                return (
                    <div className="card" style={{ width: "18rem" }} key={items.title} >
                        <img src={items?.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title"> {items.title} </h5>
                            <p className="card-text">${items.price} </p>
                            <button className="btn btn-primary"> Remove </button>
                        </div>
                    </div>
            
                )
            })
        }
        <div>
           <h4>Subtotal:</h4>
           </div>
    </div>
    );
}

export default Cart;
