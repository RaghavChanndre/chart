import React,{useState} from 'react'
import {
       FaTh,
       FaBars,
       FaUserAlt,
       FaBook,
       FaLock,
     } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './side.css';

const Side = () => {
       const [active,setActive] = useState(false)

    const activateNav = () => {
        setActive(!active)
    } 

  return (
    <div className={active ? 'header' : 'header-mobile'}>

               <div className='menu-icon' onClick={activateNav}>

               {!active ? < FaBars className='menu'/> : < FaBars className='menu'/>}

               </div>

        <nav>
            <ul className={active ? 'ul-item' : 'ul-item oicon'}>
            <NavLink to='/dashboard'>
                <li>
                    < FaTh className='icon'/>
                   Dashboard
                </li>
               </NavLink>

               <NavLink to='/contact'>
                <li>
                    < FaUserAlt className='icon'/>
                   Contact
                </li>
               </NavLink>
               
               <NavLink to='/task'>
                <li>
                    < FaBook className='icon'/>
                   Task
                </li>
               </NavLink>
               <NavLink to='/log'>
                <li>
                    < FaLock className='icon'/>
                   Logout
                </li>
               </NavLink>
              

                

            </ul>
        </nav>

    </div>
  )
}

export default Side;