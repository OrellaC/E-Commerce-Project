import React from 'react';

const Product = ({ itemList }) => {
    console.log(itemList)

    //Key prop is needed for each child list
    const items = itemList.map((items, i) => <li key={i}>{items.title}</li> )

    return (
        <div className="card" style={{width: "18rem"}} >
         <img src="..." className="card-img-top" alt="..." />
         {/* {itemList.map(items =>  items.title )} */}
                <div className="card-body">
                    <h5 className="card-title"> Title:{items.title} </h5>
                    <p className="card-text">Price: {items.price} </p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div> 
        </div>
    
           
        
    );
}


export default Product;
