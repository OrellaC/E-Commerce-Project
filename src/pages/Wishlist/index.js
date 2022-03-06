import axios from 'axios';
import { useEffect, useState } from 'react';
import WishlistForm from '../../components/Form/wishlistform';
import "./styles.css"

const Wishlist = () => {

    const [wItems, setWItems] = useState([])
    const [editForm, setEditForm] = useState(false)
    const [editItem, setEditItem] = useState({})

    useEffect(() => {
        fetchListItems()
    }, [])

    const fetchListItems = async () => {
        try {

            const response = await axios.get("https://ecommbackend2022.herokuapp.com/api/v1/checkallitems")

            console.log(response)
            setWItems(response.data)


        } catch (error) {
            console.log(error)
        }
    }

    const deleteItem = async (id) => {
        try{
            const response = await axios.delete(`https://ecommbackend2022.herokuapp.com/api/v1/deleteitem/${id}`) 
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
        <div className='card mb-3 center border-primary style={{ maxwidth: "540px" }}'>
            <WishlistForm 
            fetchListItems={fetchListItems}
            editForm={editForm}
            editItem={editItem}
            />


            <table className="table info-box border border-success bg-primary rounded text-center text-white p-4 ">
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
            </div>
        </>
    );
}

export default Wishlist;
