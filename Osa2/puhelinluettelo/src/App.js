import React, { useState, useEffect } from 'react'
import NewPersonForm from "./components/NewPersonForm.js"
import Filter from "./components/Filter.js"
import ShowPersons from "./components/Persons.js"
import axios from 'axios'
import contactService from './services/contacts.js'
import Notification from './components/Notification.js'

const App = () => {
  /*
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' , 
     number: '040-123456'},
     { name: 'Ada Lovelace' , 
     number: '39-44-5323523'},
     { name: 'Dan Abramov' , 
     number: '12-43-234345'},
     { name: 'Mary Poppendieck' , 
     number: '39-23-6423122'},
  ]) */
  
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [ persons, setPersons] = useState('')
  const [ message, setMessage ] = useState('')


/*
  useEffect(() => {
    console.log('useEffect')
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      //console.log('promise fulfilled')
      setPersons(response.data)
    })
    .catch((error) => {
      throw error
    })
  }, [])*/
  //console.log('rende', persons.length, 'person')

  //const [ persons, setPersons] = useState('')

  useEffect(() => {
    console.log('useEffect servicestä')
    contactService
    .getAll()
    .then(response => {
      //console.log('promise fulfilled')
      setPersons(response.data)
    })
    .catch((error) => {
      throw error
    })
  }, [])
  
  

console.log('appin persons', persons)
const handleNameChange = (event) => {
  setNewName(event.target.value)
}

const handleNumberChange = (event) => {
  setNewNumber(event.target.value)
}

const handleFilterChange = (event) => {
  console.log(event.target.value)
  setNewFilter(event.target.value)
  filteredPersons()
}


const filteredPersons = () => {
  console.log('Tuleeko filtteriin')
  persons.filter(person => person.name.toLowerCase().includes(newFilter))}

/*
const addPerson = (event) => {
  event.preventDefault()
  if (persons.some(person => person.name === newName)) {
    alert(`${newName} is already added to phonebook`)

  setNewName('')
  setNewNumber('')
return}
  const personObject = {
    name: newName,
    number: newNumber
  
 }
    console.log('uusi nimi', newName)


setPersons(persons.concat(personObject))
setNewName('')
setNewNumber('')
}*/

const addPerson = (event) => {
  event.preventDefault()
  if (persons.some(person => person.name === newName)) {
    alert(`${newName} is already added to phonebook`)
    return (
  setNewName('')
 // setNewNumber('')
  )}
  
  const personObject = {
    name: newName,
    number: newNumber
  
 }
  

  axios
    .post('http://localhost:3001/persons', personObject)
    .then(response => {
      //console.log("post response", response)
      setPersons(persons.concat(response.data))
    })

 }
  


 const handleRemove = (person) => {
   console.log('Tuleeko poistoon')
   const id = person.id
   console.log('personin id ', id)
   const name = person.name
   if(window.confirm(`Do you want to remove ${name}?`)) {
     console.log(window.confirm)
     contactService
     .deletePerson(id)
     .then(data => {
       setPersons(person => person.id === id)
     })
     //.then(response => { 
       //const removedPerson = persons.find(person => person.id === id )
       // setPersons(removedPerson)
       console.log('TULEEKO POISTOSSA ETEENPÄIN', name)
        setMessage(`Person ${name} removed`)
        setTimeout(() => {
          setMessage(null)
        }, 5000)
     //}
     //)

}}
 

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <form> 
        <div>
          <Filter filter={newFilter} onChange={handleFilterChange} />
        </div>
        <h2>add a new</h2>
        </form>
      <NewPersonForm onSubmit={addPerson} name={newName} onNameChange={handleNameChange}
      number={newNumber} onNumberChange={handleNumberChange} />  
      <h2>Numbers</h2>
       <ShowPersons persons={persons} handleRemove={handleRemove} filteredPersons={filteredPersons} />
    </div>
  )

  }

export default App