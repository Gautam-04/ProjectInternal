import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { MdOutlineVerifiedUser } from "react-icons/md";
import { PiTruckDuotone,PiMegaphoneDuotone  } from "react-icons/pi";
import { CiBellOn } from "react-icons/ci";

const menu = [
  {
    id: 1,
    title: "home",
    url: "/home",
    icon: <AiFillHome />
  },
  {
    id: 2,
    title: "Verify SOS Credibility",
    url: "/home/verifysos", // Updated URL
    icon: <MdOutlineVerifiedUser size={22}/>
  },
  {
    id: 3,
    title: "Issue Advisories",
    url: "/home/advisories", // Updated URL
    icon: <PiMegaphoneDuotone  size={22}/>
  },
  {
    id: 4,
    title: "Deploy and Track Rescue Forces",
    url: "/home/track", // Updated URL
    icon: <PiTruckDuotone  size={22}/>
  },
  {
    id: 5,
    title: "Alert Early Warning",
    url: "/home/alert", // Updated URL
    icon: <CiBellOn  size={22}/>
  },
];

function Menu() {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className='item' key={item.id}>
          <Link to={item.url} className='listItem'>
            {item.icon} {/* Correctly using the icon component */}
            <span className='listItemTitle'>{item.title}</span> {/* Corrected class name */}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Menu;
