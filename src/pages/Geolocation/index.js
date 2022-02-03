import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'

const Geo = () => {
    const [data, setData] = useState({})


    useEffect(() => {
        fetchLocation()
      }, [])


      const fetchLocation = async () => {
          try{
              const response = await axios.get('http://ip-api.com/json/')
              console.log(response)
              setData(response.data)
          }catch (error){
              console.log(error)
              console.log(data)
          }
      }
    return (
        <div>
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
    );
}

export default Geo;
