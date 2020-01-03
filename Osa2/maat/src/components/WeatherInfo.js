import React from 'react'

const WeatherInfo = ({ weather}) => {

    const CurrentTemp = weather.main
    const CurrentWind = weather.wind
    const CurrentWeather = weather.weather
  
    if ( CurrentTemp === undefined )  {
    return (
        <div></div>
      )}
      else {
        var iconcode = CurrentWeather[0].icon
        var iconUrl = "http://openweathermap.org/img/w/" + iconcode + ".png"
        console.log('iconin urli', iconUrl)
        return (
        <div> 
          <p><b>temperature:</b> {CurrentTemp.temp} Celsius </p>
          <img src={iconUrl} width="120px" />
          <p><b>description:</b> {CurrentWeather[0].description} </p>
          <p><b>wind:</b> {CurrentWind.speed} kph direction {CurrentWind.deg} degree</p>
  
          </div>

        )
      }
      
      }

export default WeatherInfo