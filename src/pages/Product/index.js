import React from 'react';

const Product = ({ itemList }) => {
    console.log(itemList)

    //Key prop is needed for each child list
    const items = itemList.map((items, itemKey) => <li key={itemKey}> {items.title} </li>)

    return (
        <div className="card" style={{width: "18rem;"}}>
            {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title">{items.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    );
}


export default Product;
