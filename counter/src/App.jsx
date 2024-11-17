import { useState } from 'react'
import Header from './Header'
import { courses } from './Data'
import Course from './components/Course'
import './css/Course.css'

function App() {
 

  return (
    <>
  <Header/>
  <div className='course-main'>
  {
    courses?.map((course)=>(
        <Course className='course-item' key={course.id} course={course}/>
    ))
  }
  </div>
    </>
  )
}

export default App
