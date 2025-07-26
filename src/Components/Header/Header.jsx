import React from 'react'
import './Header.css'
import ListManager from '../ListManager/ListManager'

const Header = ({activeTab , setActiveTab}) => {
  return (
    <header>
      <div className={`${activeTab === 'Timer' ? 'timer-btn active-tab' : 'timer-btn '}`}onClick={()=>{setActiveTab("Timer")}}>Subjects Time</div>
      <div className={`${activeTab === 'ListManager' ? "listmanager-btn active-tab": "listmanager-btn"}`} onClick={()=>{setActiveTab('ListManager')}}>Manage List</div>
    </header>
  )
}

export default Header