import React, { useState, useEffect } from "react";
import axios from 'axios';
import WeatherInfo from './WeatherInfo.js'

const Weather = ({city}) => {
    const [ weather, setWeather ] = useState({})
 
    
    useEffect (() => {
      axios
      .get('http://api.openweathermap.org/data/2.5/weather?q='.concat(city)+'&units=metric&APPID=5c12d9cbd4870e7e086099834fc9e718')
      .then(response => {
        setWeather(response.data)
      })
    }, [])

    console.log('Mitä on saassa', weather)


    return (
      <div>
        <WeatherInfo weather={weather} />
      </div>
    )
    

  }

    export default Weather