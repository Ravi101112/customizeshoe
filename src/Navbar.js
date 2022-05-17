import React from 'react';
import {Link} from "react-router-dom";
import './navbar.css';
import websitelogo from './images/websitelogo.png';
export const Navbar= () =>{
  return (
    <div className='navcontainer'>
 <img className='logo' src={websitelogo} />
    <div className='navbar'>
   
    <li>
      <Link to="/">JOURNEY</Link>
    </li>
    <li>
      <Link to="/Team">TEAM</Link>
    </li>
    <li>
      <Link to="/Store">STORE</Link>
    </li>
    <li>
      <Link to="/Contact">CONTACT</Link>
    </li>
  </div>
  </div>
  );
}
