import React from 'react';

const Header = ( { header }) => {
    return <h2>{header}</h2>

}

const Content = ( {parts} ) => (
    <div>
        {parts.map(part => <Part key={part.id} part={part} />)}
    </div>

)

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
        <b> total of {total} exercises</b>
    )
}

export default Course
