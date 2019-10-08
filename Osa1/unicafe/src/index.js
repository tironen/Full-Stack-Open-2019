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


const Statistics = (props) => {
    
    let allFeedback = (props.good+props.bad+props.neutral)

    let avarage = ((props.good - props.bad) / allFeedback || 0).toFixed(1)
   
    let positive = ((props.good / allFeedback || 0) * 100).toFixed(1) + ' %'

    if (allFeedback === 0) {
        return (
            <div>
            <Header header={'Statistics'} />
            <p>No feesback given</p>
            </div>
        )
    }else 

    return (
        <div>
            <Header header={'Statistics'} />
            <table>
              <tbody>
            <Statistic text={'good'} value={props.good} />
            <Statistic text={'neutral'} value={props.neutral} />
            <Statistic text={'bad'} value={props.bad} />
            <Statistic text={'all'} value={allFeedback} />
            <Statistic text={'avarage'} value={avarage} />
            <Statistic text={'positive'} value={positive} />
              </tbody>
            </table>
        </div>
    )
}

const Statistic = ( { text, value} ) => (
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
)

const App = () => {
 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header header={'Give feedback'} />
      <Button handleClick = {()=> setGood(good +1)} text={'good'} />
      <Button handleClick = {()=> setNeutral(neutral +1)}  text={'neutral'} />
      <Button handleClick = {()=> setBad(bad +1)}  text={'bad'} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>

    
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)