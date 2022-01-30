import React from 'react';

const Product = ({ itemList }) => {
    console.log(itemList)

    
    return (
        <div>
            Shop Our Latest Items!
            {
                itemList.map(items => <li> {items.title} </li>)
            }
        </div>
    );
}


export default Product;
