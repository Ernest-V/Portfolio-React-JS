import "./NavbarStyles.css";

import React, {useState} from "react";
import { Link } from "react-router-dom";

import {FaBars, FaTimes} from "react-icons/fa";


const Navbar = () => {

  //navbar:hamburger = SHOW/HIDDEN menu , JS code start
  // mun te perdorim cdo lloj emertimi brenda kllapave [kliko, setKliko]
  //(!click) -> not click
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click); 

  //Navbar ndryshon background on scroll
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  }
  window.addEventListener('scroll', changeColor);

  return (
    <nav className={color ? "header header-bg" : "header"}>
      {/* className={color ? "header header-bg" : "header"}> === color if: nqs color nuk esht ne header ateher ktheje ne header-bg '#000' nqs jo atehere leje ne header'trasparent'  */}
        <Link to={"/"} >
            <h2>Ernest V.</h2>
        </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              {/* className={click ? "nav-menu active" : "nav-menu"}> === if: nqs klikoj menu aktivizohet ose mbyllet/hiqet */}
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/project"}>Project</Link> </li>
                <li><Link to={"/about"}>About</Link> </li>
                <li><Link to={"/contact"}>Contact</Link> </li>
            </ul> 

            <div className="hamburger" onClick={handleClick} >
              {/* FaTimes eshte X ne navmenu ne react*/}
              {/*FaBars eshte 3vijat e navmenu ne react*/} 
              {/*click ? (<FaTimes.....) == if navbar menu is clicked I wont to show closed icon */} 
              {/** :() == else close or open menu */}

              {click ? (<FaTimes size={20} style={{color:"#fff"}} />
              ) : ( <FaBars size={20} style={{color:"#fff"}} />)}
               

              </div>    
    </nav>
  )
}
export default Navbar