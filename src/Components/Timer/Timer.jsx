import React, {useState,useRef, useEffect} from 'react'
import './Timer.css'
const Timer = ({subjectList, setSubjectList}) => {
    useEffect(()=>{
        return ()=>{clearInterval(intervalRef.current)}
    },[])

    const [activeSubject , setActiveSubject] = useState(null)
    
    const [timerRunning , setTimerRunning] = useState(false)

    const intervalRef = useRef(null) 


    const startTimer=(data,index)=>{
        if(timerRunning){
            setTimerRunning(false)
            setActiveSubject(null)
            clearInterval(intervalRef.current)
            return
        }
        setTimerRunning(true)
        setActiveSubject(index)

        let timeLeftSecond = data.remainingTime*60 
        intervalRef.current = setInterval(()=>{
             
            if(timeLeftSecond<=0){
                clearInterval(intervalRef.current)
                setActiveSubject(null)
                return
            }
            timeLeftSecond--;

            setSubjectList((prevList)=>{
                const newSubjectList = [...prevList]
                newSubjectList[index].remainingTime = (timeLeftSecond/60).toFixed(2)
                return newSubjectList
            })

        },1000)
    }

  return (
    
    <div className="timer-window">

    
    
        <div className="timer">
            <div className="cell-title">Subject</div>
            <div className="cell-title">Total Time(min)</div>
            <div className="cell-title">Remaining Time(min)</div>
            <div className="blank-cell"></div>
            <div className="black-cell"></div>
            {subjectList.map((data,index)=>{
                return <React.Fragment key={index}>
                    <div className={`cell ${activeSubject === index ? 'active' : ''}`}>{data.subjectName}</div>
                    <div className="cell">{data.totalTime}</div>
                    <div className="cell">{data.remainingTime}</div>
                    <div className=""><button className={activeSubject === index ? 'stop-btn' : 'start-btn'} disabled={data.remainingTime<=0} onClick={()=>startTimer(data,index)}>{activeSubject===index ? "Stop" : "Start"}</button></div>
                    <button className='reset-btn' onClick={()=>{
                        setSubjectList((prev)=>{
                            const newList = [...prev]
                            newList[index].remainingTime = newList[index].totalTime
                            return newList
                        })
                    }}>Reset</button>
                    </React.Fragment>
            })}
            
        </div>
            </div>

  )
}

export default Timer