import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js'

/*
const Header = ( { header }) => {
    return <h2>{header}</h2>

}


const Content = ( {parts} ) => (
    <div>
        {parts.map(part => <Part key={part.id} part={part} />)}
    </div>

)
 /*
const Course = ( { course }) => {
    return (
    <div>
    <Header header={course.name} />
    <Content parts={course.parts} />
    <Total course={course} />
    </div>    
    )
}
    
const Part = ( {part} ) => (
    <p>{part.name} {part.exercises}</p>
)


const Total = ( { course }) => {
    const total = course.parts.reduce((tot, part) => tot + part.exercises, 0)
    //console.log('funktio total', total)
    return (
        <p> total of {total} exercises</p>
    )
}*/



//const App = () => {
    const courses = [
      {
        name: 'Half Stack application development',
        id: 1,
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
          },
          {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
          },
          {
            name: 'State of a component',
            exercises: 14,
            id: 3
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      }, 
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]

    /*
    return (
        <div>
            <h1>Web development curriculum</h1>
            {courses.map(course => <Course key={course.id} course={course} />)}
        </div>
    )*/


ReactDOM.render(<App courses={courses}/>, document.getElementById('root'))