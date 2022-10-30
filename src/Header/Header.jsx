import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  RiRadioLine
  
  
}from "react-icons/ri";
import {BsQuestionLg}
from "react-icons/bs"
import './Header.css';
const menuItem=[
  {
      path:"/radio",
      name:"Radio",
      icon:<RiRadioLine size={28}/>
  },
  {
    path:"/aboutus",
    name:"About",
    icon:<BsQuestionLg  size={28}/>
},
  // {
  //     path:"/about",
  //     name:"About",
  //     icon:<FaUserAlt/>
  // },
  // {
  //     path:"/analytics",
  //     name:"Analytics",
  //     icon:<FaRegChartBar/>
  // },
  // {
  //     path:"/battle",
  //     name:"Battle",
  //     icon:<GiSwordsPower/>
  // }
]
export const Header = ({pStats}) => {

  return (
    <section className="header">
      
      <section className="header-top">
        <section style={{flexDirection:'column'}} className="header-top__logo">
          <a href="/" className="header-logo">Doodle's </a>
          <a href="/" className="header-logo">Music</a>
        </section>
        <hr style={{marginLeft:10}} className="header-side__seperator" />
        <section className="header-top__navbar">
          
          <section className="header-top__navigation">
          {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div  className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
          </section>
      
        </section>
      </section>
      <hr className="header-top__seperator" />

      </section>

  )
}

export default Header;