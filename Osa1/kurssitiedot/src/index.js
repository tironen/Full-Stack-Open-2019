import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    //console.log(props) testataan mikä ollaanko kiinni oikeassa oliossa
    return <h1>{props.course.name}</h1>

}


const Content = (props) => (
    <div>
    <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
    <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
    <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>

)

const Total = (props) => {
    return(
    <p>Number of exercises {props.parts[0].exercises
        + props.parts[1].exercises
        + props.parts[2].exercises}</p>)
    
}

    const Part = (props) => (
        <p>{props.part} {props.exercises}</p>
    )

    const App = () => {
    const course = {
    name: 'Half Stack applicaton development',
    parts: [
    {
        name: 'Fundementals of React',
        exercises: 10
    },
    {
        name: 'Using props to pass data',
        exercises: 7
    }
    ,{
        name: 'State of a component',
        exercises: 14
    }
]
    }
//console.log(parts) testataan mitä taulukossa on



    return (
        <div>
            <Header course={course} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
            
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))