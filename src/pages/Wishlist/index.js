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
        try {
            const response = await axios.delete(`https://ecommbackend2022.herokuapp.com/api/v1/deleteitem/${id}`)
            fetchListItems()
        } catch (error) {
            console.log(error)
        }
    }

    const handleEdit = (item) => {
        setEditForm(true)
        setEditItem(item)
    }

    // console.log("These are the items on your wishlist ", wItems)

    return (
        <div className='wishlistBox'>
            <h1 className='text-center'>Wishlist</h1>

            <div className='card p-5 center border-primary' style={{ maxwidth: "540px" }}>
                <div>
                    <h5 className='text-center'> The wishlist feature is a CRUD application that allows users to add any items they would like to be added to the company's e-commerce website .</h5>
                </div>



                <WishlistForm
                    fetchListItems={fetchListItems}
                    editForm={editForm}
                    editItem={editItem}
                />


                <table className="table info-box border border-primary rounded text-center text-black p-4">
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

                                        <td onClick={() => handleEdit(wItems)}>
                                        <i class="bi bi-pencil-square"></i>
                                            </td> 
                                        <td onClick={() => deleteItem(wItems.id)}>
                                        <i class="bi bi-trash3-fill"></i>
                                        </td>



                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Wishlist;
