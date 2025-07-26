import React from "react";
import "./ListManager.css";
import { toast } from "react-toastify";

const ListManager = ({ subjectList, setSubjectList }) => {

    const addNewSubject = (e)=>{
        e.preventDefault()

        const formData = new FormData(e.target)

        const subjectName = formData.get("subject")
        const totalTime = formData.get("totalTime")

        if(isNaN(totalTime) || totalTime.trim() === ""){
            toast.error("Enter a valid Time")
            e.target.reset()
            return
        }

        setSubjectList((prev)=>{
            const newList = [...prev]
            const obj = {}
            obj.subjectName = subjectName
            obj.totalTime = totalTime
            obj.remainingTime = totalTime

            newList.push(obj)
            return newList
        })
        
        e.target.reset()
    }


    const deleteSubject= (index)=>{
        setSubjectList((prev)=>{
            const newSubjectList = [...prev]

            newSubjectList.splice(index , 1)

            return newSubjectList
            

        })
    }



  return (
    <div className="list-manager-window">

    <div className="list-manager">
      <div className="subject-list">
        <div className="cell-title">Subject</div>
        <div className="cell-title">Total Time(min)</div>
        <div className="cell-title">Remaining Time(min)</div>
        <div className="blank-cell"></div>
        {subjectList.map((data, index) => {
          return (
            <React.Fragment key={index}>
              <div className="cell">{data.subjectName}</div>
              <div className="cell">{data.totalTime}</div>
              <div className="cell">{data.remainingTime}</div>
              <div className="del-button">
                <button onClick={()=>deleteSubject(index)}>Delete</button>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <form className="myform" onSubmit={addNewSubject}>
        
        <label htmlFor="subject">Subject</label>
        <input type="text" name="subject" id="subject" />
        <label htmlFor="totalTime">Total Time</label>
        <input type="text" name="totalTime" id="totalTime" />
        <button className="add-btn" type="submit">Add</button>
      </form>
    </div>
    </div>
  );
};

export default ListManager;
