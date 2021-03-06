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
            // To Edit a wishlist item 
            if (editForm) {
                const response = await axios.put(`https://ecommbackend2022.herokuapp.com/api/v1/updateitem/${editItem.id}`, newItem)

                // Adding an item to wishlist 
            } else {
                const response = await axios.post('https://ecommbackend2022.herokuapp.com/api/v1/additem', newItem)

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
        <form onSubmit={handleSubmit} className='p-3'>
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

            <div className='text-center'>
                <button type="submit" className="btn btn-success"> {editForm ? "Edit Entry" : "Add New Entry"}</button>
            </div>
        </form>
    );
}

export default WishlistForm;
