import React from 'react';

// const removeFromCart = () => {

// }

// const quantity = () => {
//     // clicks: 0,
//     //     show: true
// };

// IncrementItem = () => {
//     quantity.setState({ clicks: quantity.state.clicks + 1 });
// }
// DecreaseItem = () => {
//     quantity.setState({ clicks: quantity.state.clicks - 1 });
// }
// ToggleClick = () => {
//     quantity.setState({ show: !quantity.state.show });
// }



const Cart = ({ cart }) => {
    console.log(cart)
    return (
        <div className="product-container">
            <h1>My Cart</h1>

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
                               
                               
                               
                                {/* Adjusts quantity of item */}
                                {/* <button onClick={quantity.IncrementItem}>Click to increment by 1</button>
                                <button onClick={quantity.DecreaseItem}>Click to decrease by 1</button>
                                <button onClick={quantity.ToggleClick}>
                                    {quantity.state.show ? 'Hide number' : 'Show number'}
                                </button>
                                {quantity.state.show ? <h2>{quantity.state.clicks}</h2> : ''} */}
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
