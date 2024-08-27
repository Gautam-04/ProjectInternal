import React, {useEffect,useState} from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { MdGroups2, MdHome, MdMore, MdOutlineVerifiedUser } from "react-icons/md";
import { PiTruckDuotone,PiMegaphoneDuotone  } from "react-icons/pi";
import { CiBellOn } from "react-icons/ci";
import { IoAnalyticsSharp } from 'react-icons/io5';

const superAdmin = [
  {
    id: 1,
    title: "home",
    url: "/home",
    icon: <MdHome />
  },
  {
    id: 2,
    title: "Disaster Analysis",
    url: "/home/disasteranalysis", // Updated URL
    icon: <IoAnalyticsSharp />
  },
]

const Adminmenu = [
  {
    id: 1,
    title: "Verify SOS Credibility",
    url: "/home/verifysos", // Updated URL
    icon: <MdOutlineVerifiedUser size={22}/>
  },
  {
    id: 2,
    title: "Issue Notifications/Advisories",
    url: "/home/advisories", // Updated URL
    icon: <PiMegaphoneDuotone  size={22}/>
  },
  {
    id: 3,
    title: "Deploy and Track Rescue Forces",
    url: "/home/track", // Updated URL
    icon: <PiTruckDuotone  size={22}/>
  },
  {
    id: 4,
    title: "Alert Early Warning",
    url: "/home/alert", // Updated URL
    icon: <CiBellOn  size={22}/>
  },
];

function Menu() {
  const [Role,setRole] = useState("");
  useEffect(() => {
    const role = localStorage.getItem('role')

    setRole(role);
    console.log(role)
  }, [])
  
  return (
    <div className="menu">
    {Role === 'superAdmin'?<>
    {superAdmin.map((item) => (
        <div className='item' key={item.id}>
          <Link to={item.url} className='listItem'>
            {item.icon} {/* Correctly using the icon component */}
            <span className='listItemTitle'>{item.title}</span> {/* Corrected class name */}
          </Link>
        </div>
      ))}</> : 
        <div className='item'>
          <Link to={'/home'} className='listItem'>
            {<AiFillHome />}
            <span className='listItemTitle'>{'Home'}</span> {/* Corrected class name */}
          </Link>
        </div>
        }
      {Adminmenu.map((item) => (
        <div className='item' key={item.id}>
          <Link to={item.url} className='listItem'>
            {item.icon} {/* Correctly using the icon component */}
            <span className='listItemTitle'>{item.title}</span> {/* Corrected class name */}
          </Link>
        </div>
      ))}
      <div className='manyMore item'>
          <Link to={'/'} className='listItem' disabled>
            {<MdMore />}
            <span className='listItemTitle'>{'More'}</span> {/* Corrected class name */}
          </Link>
        </div>
    </div>
  );
}

export default Menu;
