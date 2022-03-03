import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

const Wishlist = () => {
    const [wItems, setWItems] = useState([])

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

    console.log("These are the items on your wishlist ", wItems)
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Item Name</th>
                        <th scope="col">Item Description</th>
                        <th scope="col">ID Number</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        wItems.map(wItems => {
                            return(
                                <tr key ={wItems.id}>
                                <td>{wItems.itemname}</td>
                                <td>{wItems.itemdescription}</td>
                                <td>{wItems.id}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </div>
    );
}

export default Wishlist;
