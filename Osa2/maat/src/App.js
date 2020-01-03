import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Weather from "./components/Weather";
//import showCountry from './showCountry'


const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ filter, setFilter ] = useState('')

  useEffect(() => {
		axios
			.get('https://restcountries.eu/rest/v2/all')
			.then(response => {

				setCountries(response.data)
			})
	}, [])
  


const buttonHandeler = (event) => {
  setFilter(event.target.id.toLowerCase())
}

  const ShowCountries = ( { countries }) => {
    console.log(countries)

    if ( countries.length > 10) {
    return (
      <div>Too many matches, specify another filter</div>
    )}
    else if 
      ( countries.length === 1) {
        
        const country = countries[0]
        console.log('maa', country)
        console.log('maa 2', countries[0])
        return (
        <div>
        <h1>{countries[0].name}</h1>
        <p>capital: {countries[0].capital}</p>
        <p>population: {countries[0].population}</p>
        <h2>languages</h2>
        <ul>
          {countries[0].languages.map(language => <li key={language.name}>{language.name}</li>)}
        </ul>
        <ul>
        <img src={countries[0].flag} width="180px" alt="flag"/>
        </ul>
        <div>
          <h2>weather in {countries[0].capital}</h2>
        </div>
        <Weather city={countries[0].capital}/>
        </div>
         ) }
    
    else {
return (
  <div>
    {countries.map(country => <p key={country.name}>{country.name} <button id={country.name} onClick={buttonHandeler}> show </button></p>)}
    
  </div>
)}
  }
  
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const foundCountries = () => (
  countries.filter(country => country.name.toLowerCase().includes(filter)))

  
  return (
    <div>
    <h1> Countries</h1>
    <div>Search country:
      <input value={filter}
      onChange={handleFilterChange} />
    </div>
    <ShowCountries countries={foundCountries(countries)} />
    </div>
  )}

  
export default App;