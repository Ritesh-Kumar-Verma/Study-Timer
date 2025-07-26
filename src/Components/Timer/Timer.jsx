import React, {useState,useRef} from 'react'
import './Timer.css'
const Timer = ({subjectList, setSubjectList}) => {
    

    const [activeSubject , setActiveSubject] = useState(null)
    
    const [timerRunning , setTimerRunning] = useState(false)

    const intervalRef = useRef(null) 


    const startTimer=(data,index)=>{
        if(timerRunning){
            clearInterval(intervalRef.current)
            return
        }
        setTimerRunning(true)
        setActiveSubject(index)

        let timeLeftSecond = data.remainingTime*60 
        intervalRef.current = setInterval(()=>{
             
            if(timeLeftSecond<=0){
                clearInterval(intervalRef.current)
                return
            }
            timeLeftSecond--;

            setSubjectList((prevList)=>{
                const newSubjectList = [...prevList]
                newSubjectList[index].remainingTime = (timeLeftSecond/100).toFixed(2)
                return newSubjectList
            })

        },1000)
    }

  return (
    <div className='home'>
        <div className="timer">
            <div className="cell-title">Subject</div>
            <div className="cell-title">Total Time(min)</div>
            <div className="cell-title">Remaining Time(min)</div>
            <div className="blank-cell"></div>
            {subjectList.map((data,index)=>{
                return <React.Fragment key={index}>
                    <div className={`cell ${activeSubject === index ? 'active' : ''}`}>{data.subjectname}</div>
                    <div className="cell">{data.totalTime}</div>
                    <div className="cell">{data.remainingTime}</div>
                    <div className="start-button"><button onClick={()=>startTimer(data,index)}>{activeSubject===index ? "Stop" : "Start"}</button></div>
                </React.Fragment>
            })}
        </div>

    </div>
  )
}

export default Timer