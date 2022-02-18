import React ,{useState} from 'react';
import './navbar.css';
import Logo from '../../assets/images/BotxLogo-removebg-preview.png';
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';
export default function Navbar() {
  const [toggle,setToggle] = useState(false);
  const Menu=()=>(
    <>
    <li className="_navabar-links_container-item"><a href="#home">Home</a></li>
    <li className="_navabar-links_container-item"><a href="#about">About</a></li>
    <li className="_navabar-links_container-item"><a href="#content">Content</a></li>
    <li className="_navabar-links_container-item"><a href="#contact">Contact Us</a></li>
    </>
  )
  return(
    <div className="_navbar">
        < div className="_navbar-links">
          <div className="_navbar-links_logo">
            <img src={Logo} alt="logo" />
          </div>
          <ul className="_navbar-links_container">
           <Menu/>
          </ul>
          <div className="_navbar-links_menu">
            {
              toggle?<RiCloseLine color="#fff" size={27} onClick={()=>setToggle(false)}/>
              :<RiMenu3Line color="#fff" size={27} onClick={()=>setToggle(true)}/>
            }
            
          </div>
        </div>  
        <div>
        {
              toggle && (
                <div className="_navbar-menu-container scale-up-center">
                  <Menu/>
                </div>
              )
            }
        </div>
        </div>
  ) 
}
