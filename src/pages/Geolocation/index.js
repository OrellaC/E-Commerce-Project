import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import locationBanner from './Images/locationBanner.png'
import updatedGeoBanner from "./Images/updatedGeoBanner.png"

const Geo = () => {
    const [data, setData] = useState({})


    useEffect(() => {
        fetchLocation()
    }, [])


    const fetchLocation = async () => {
        try {
            const response = await axios.get('http://ip-api.com/json/')
            console.log(response)
            setData(response.data)
        } catch (error) {
            console.log(error)
            console.log(data)
        }
    }
    return (
        <div className='parent'>
            <div className='container'>
        

            

            <div className='carousel-container'>
                    {/* Carousel Image 1 */}
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src={updatedGeoBanner} className="img-fluid d-block w-100 caro-imgs" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                       </div> 



            
            <div className='header'>
                <h1>Geolocation tracker </h1>
            </div>

            <div className="geo-box">
                <h4>City: {data?.city}</h4>
                <h4>Country: {data?.country}</h4>
                <h4>Region: {data?.regionName}</h4>
                <h4>Zip code: {data?.zip}</h4>
                <h4>Time Zone: {data?.timezone}</h4>
            </div>

</div>
        </div>
        </div>
    );
}

export default Geo;
