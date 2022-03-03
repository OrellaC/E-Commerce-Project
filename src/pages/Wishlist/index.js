import axios from 'axios';
import { useEffect, useState } from 'react';
import WishlistForm from '../../components/Form/wishlistform';

const Wishlist = () => {

    const [wItems, setWItems] = useState([])
    const [editForm, setEditForm] = useState(false)
    const [editItem, setEditItem] = useState({})

    useEffect(() => {
        fetchListItems()
    }, [])

    const fetchListItems = async () => {
        try {

            const response = await axios.get("http://localhost:8080/api/v1/checkallitems")

            console.log(response)
            setWItems(response.data)


        } catch (error) {
            console.log(error)
        }
    }

    const deleteItem = async (id) => {
        try{
            const response = await axios.delete(`http://localhost:8080/api/v1/deletitem/${id}`) 
            fetchListItems()
        }catch (error){
            console.log(error)
        }
    }

    const handleEdit = (item) => {
        setEditForm(true)
        setEditItem(item)
    }

    // console.log("These are the items on your wishlist ", wItems)

    return (
        <>
            <WishlistForm 
            fetchListItems={fetchListItems}
            editForm={editForm}
            editItem={editItem}
            />


            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Item Name</th>
                        <th scope="col">Item Description</th>
                        <th scope="col">ID Number</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        wItems.map(wItems => {
                            return (
                                <tr key={wItems.id}>
                                    <td>{wItems.itemname}</td>
                                    <td>{wItems.itemdescription}</td>
                                    <td>{wItems.id}</td>

                                    <td onClick={() => handleEdit(wItems)}>Edit</td>
                                    <td onClick={() => deleteItem(wItems.id)}>Delete</td>


                                   
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </>
    );
}

export default Wishlist;
