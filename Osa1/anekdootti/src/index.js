import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = ( { header } ) => (
  <h1>{header}</h1>
)

const Button = ( { handleClick, text}) => (
    <button onClick={handleClick}>
    {text}
    </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votesTable, setVotes] = useState(new Array(anecdotes.length).fill(0))

  // To randomise new ancdote
  const newAnecdote = () => {
    const rand = Math.floor(Math.random()* anecdotes.length)
    setSelected(rand)
  }

  // Handeling to voting of the anacdotes
  const vote = () => {
    const votesTableCopy = [...votesTable]
    votesTableCopy[selected] += 1
    console.log(votesTableCopy)
    setVotes(votesTableCopy)
  
}
  
  // Anacdote with mosts votes
  const mostVotes = (votesTable.indexOf(Math.max(...votesTable)))

  // Value of the votes that anacdote with mosts votes have
  const mostVotesValue = (Math.max(...votesTable))

  return (
  <div>
    <Header header={'Anecdote of the Day'} />
      <div> {props.anecdotes[selected]}</div>
      <p>has {votesTable[selected]} votes</p>
      <Button handleClick={vote} text={'vote'} />    
      <Button handleClick={newAnecdote} text={'next anecdote'} />
    <Header header={'Anecdote with most vote'} />
      <div>{props.anecdotes[mostVotes]}</div>
      <p>has {mostVotesValue} votes</p>
  </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)