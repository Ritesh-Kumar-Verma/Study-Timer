import React, {useState} from 'react'
import Header from './Components/Header/Header'
import Timer from './Components/Timer/Timer'
import './App.css'

const App = () => {


  const [subjectList , setSubjectList] = useState([
          {
              subjectname : "Maths",
              totalTime : 2,
              remainingTime : 1
          },
          {
              subjectname : "GK",
              totalTime : 1,
              remainingTime : 0.5
          }
  
      ])

  return (
    <div className='app-window'>
      <Header/>
      <Timer subjectList={subjectList} setSubjectList={setSubjectList}/>
      
    </div>
  )
}

export default App