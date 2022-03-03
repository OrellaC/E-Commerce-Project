import axios from 'axios';
import { useState } from 'react';

const WishlistForm = ({ fetchItems, editForm, editItem }) => {
   
    console.log('editItem', editItem)

    const [itemName, setItemName] = useState('')
    const [itemDescription, setItemDescription] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newItem = {
            itemname: itemName,
            itemdescription: itemDescription
        }
        try {
            // To Edit/Update a wishlist item 
            if (editForm) {
                const response = await axios.put(`http://localhost:8080/api/v1/updateitem/${editItem.id}`, newItem)

                // Adding an item to wishlist 
            } else {
                const response = await axios.post('http://localhost:8080/api/v1/additem', newItem)

                if (response.status === 200) {
                    setItemName('')
                    setItemDescription('')
                }
            }

            fetchItems()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Item Name</label>
                <input
                 type="text"
                 value={itemName}
                 placeholder={editItem.itemname} 
                 onChange={e => setItemName(e.target.value)}
                 className="form-control" 
                 id="exampleInputEmail1" 
                 aria-describedby="emailHelp" 
                 />
            </div>


            <div className="mb-3">
                <label className="form-label">Item Description</label>
                <input 
                type="text" 
                placeholder={editItem.itemdescription}
                value={itemDescription}
                onChange={e => setItemDescription(e.target.value)}
                className="form-control" 
                id="exampleInputPassword1" 
                />
            </div>
    
            <button type="submit" className="btn btn-primary"> {editForm ? "Edit" : "Submit"}</button>
        </form>
    );
}

export default WishlistForm;
