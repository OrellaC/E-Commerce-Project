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

                {/* Bootstrap for Carousel BannesImage */}
                <div className='carousel-container'>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src={updatedGeoBanner} className="img-fluid d-block w-100 caro-imgs" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                    </div>

                    <div className='mb-4 rounded bg-warning p-3'>
                        <h1 className='text-center'>Geolocation API </h1>
                        <h5 className='text-center'> We at OrTech believe that businesses thrive when they are able to identify their target demographic in the most specific details.</h5>

                        <h4> <u> Implementing our geolocation API will: </u> </h4>

                        <ul>
                            <li> Help client's identify the regions where their customers are accessing their website from</li>
                            <li>Allow client's to better tailor their advertisements and other promotional material</li>
                        </ul>
                    </div>

                    <div className="info-box border border-success bg-success rounded text-white p-4">
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
