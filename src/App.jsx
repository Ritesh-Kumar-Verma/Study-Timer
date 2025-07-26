import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Timer from "./Components/Timer/Timer";
import "./App.css";
import ListManager from "./Components/ListManager/ListManager";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [activeTab , setActiveTab] = useState(null)
  const [subjectList, setSubjectList] = useState(() => {
    const list = localStorage.getItem("subjectList");
    list ? setActiveTab('Timer') : setActiveTab("ListManager")
    return list ? JSON.parse(list) : [];

  });


  useEffect(() => {
    localStorage.setItem("subjectList", JSON.stringify(subjectList));
  }, [subjectList]);

  console.log(subjectList)
  console.log(subjectList.length)
  return (
    <>
      <ToastContainer position="bottom-center" autoClose={2000} />
      <Header activeTab={activeTab} setActiveTab={setActiveTab}/>
      <div className="app-window">
        {
          activeTab === 'ListManager' ? (
        <ListManager
          subjectList={subjectList}
          setSubjectList={setSubjectList}
        />) :(<Timer subjectList={subjectList} setSubjectList={setSubjectList} />)
        }
        
      </div>
    </>
  );
};

export default App;
