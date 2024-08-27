import React from 'react'
import './navbar.css'
import { CiSearch,CiSettings,CiLogout   } from "react-icons/ci";
import { FaExpand,FaRegUserCircle  } from "react-icons/fa";
import { MdNotificationsNone } from "react-icons/md";

function Navbar() {
  return (
    <div className="navbar">
      <div className='logo'>
        <img src='logo.svg' alt='' />
        <h3>आपदाMitra</h3>
      </div>
      <div className='icons'>
        <CiSearch className='icon'/>
        <CiLogout   className='icon' />
        <FaExpand className='icon'/>
        <div className='notification'>
          <MdNotificationsNone  />
        </div>
        <div className='user'>
          <FaRegUserCircle  className='icon'/> 
          <span>Gautam</span>
        </div>
        <CiSettings  className='icon'/>
      </div>
    </div>
  )
}

export default Navbar