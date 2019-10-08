import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ( { header} ) => ( 
    <h1>{header}</h1>
)

const Button = ( { handleClick, text} ) => ( 
<button onClick={handleClick}>
    {text}
    </button>
    )

const Display = ( { text, value} ) => (
    <div>{text} {value}</div>
)

const Statistics = (props) => {
    
    let allFeedback = (props.good+props.bad+props.neutral)

    let avarage = ((props.good - props.bad) / allFeedback || 0)
   
    let positive = ((props.good / allFeedback || 0) * 100) + ' %'
    if (allFeedback === 0) {
        return (
            <div>
            <Header header={'Statistics'} />
            <Display text={'No feedback given'} />
            </div>
        )
    }

    return (
        <div>
            <Header header={'Statistics'} />
            <Display text={'good'} value={props.good} />
            <Display text={'neutral'} value={props.neutral} />
            <Display text={'bad'} value={props.bad} />
            <Display text={'all'} value={allFeedback} />
            <Display text={'avarage'} value={avarage} />
            <Display text={'positive'} value={positive} />
        </div>
    )
}

const App = () => {
 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


 const handleGood = () => {
      setGood(good +1 )
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }
  

  return (
    <div>
      <Header header={'Give feedback'} />
      <Button handleClick={handleGood} text={'good'} />
      <Button handleClick={handleNeutral} text={'neutral'} />
      <Button handleClick={handleBad} text={'bad'} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>

    
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)