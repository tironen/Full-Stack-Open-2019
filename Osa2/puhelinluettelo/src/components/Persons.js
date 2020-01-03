import React from "react"


console.log('tuleeko personssii')

const ShowPersons = ( {persons, handleRemove} ) => {
  //const [testi] = persons
  console.log('Mitä tulee personssiin persons arvolla', persons)


  if (!persons ) return ( <div></div>)
  return (
    <div>
      {persons.map(person => <div key={person.id}>{person.name} {person.number}  <button 
      onClick={() => { 
        handleRemove(person)
      }}>
        delete</button> </div>)}
      </div>
  )
    }
    
export default ShowPersons    