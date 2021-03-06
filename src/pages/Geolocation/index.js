import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import geoLogo from './Images/geoLogo.png'
import updatedGeoBanner from "./Images/updatedGeoBanner.png"

const Geo = () => {
    const [data, setData] = useState({})


    useEffect(() => {
        fetchLocation()
    }, [])

// Unfortunately this API is only HTTP accessible and not HTTPS. Therefore, it is not secure or accessible outside of my local host 
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

                {/* Bootstrap for Carousel BannerImages */}
                <div className='carousel-container'>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src={updatedGeoBanner} className="img-fluid d-block w-100 caro-imgs" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                            </div>
                        </div>
                    </div>


                    <div className="card mb-3 center border-primary" style={{ maxwidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={geoLogo} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className='mb-4 rounded bg-warning p-3'>
                                    <h1 className='text-center'>Geolocation API </h1>
                                    <h5 className='text-center'> We at OrTech believe that businesses thrive when they are able to identify their target demographic in the most specific details. The location for every site user will be compiled and sent to the site owner.</h5>

                                    <h3 className='text-center'> <u> Implementing our geolocation API will: </u> </h3>

                                    <ul>
                                        <li> Help clients identify the regions where their customers are accessing their website from</li>
                                        <li>Allow client's to better tailor their advertisements and other promotional material based on user location</li>
                                    </ul>
                                </div>

                                <div className="info-box border border-success bg-primary rounded text-center text-white p-4">
                                    <h4><u>This API allows clients to see the location of their site users</u></h4>
                                    <h4>City: {data?.city}</h4>
                                    <h4>Country: {data?.country}</h4>
                                    <h4>Region: {data?.regionName}</h4>
                                    <h4>Zip code: {data?.zip}</h4>
                                    <h4>Time Zone: {data?.timezone}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Geo;
