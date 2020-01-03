import React from 'react';
//import ReactDOM from 'react-dom';
import Course from './components/Course.js'

const App = ( {courses} ) => (
        <div>
            <h1> Web development curriculum </h1>
            {courses.map(course => <Course key={course.id} course={course} />)}
        </div>
    )
     

export default App     