import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom';
import './NavbarStyle.css';

import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';

function Navbar() {
  const [click, setClick] = useState(false);

  //navbar scroll when active state
  const [navbar, setNavbar] = useState(false)


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // navbar scroll changeBackground function
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  return (
    
    <nav className={navbar ? "navbar active" : "navbar"}>
    
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <DiCssdeck size="2rem" /> GUY SOH
          <i class='fab fa-typo3' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          <FaBars/>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
              RESUME
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/portfolio' className='nav-links' onClick={closeMobileMenu}>
              PORTFOLIO
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
              CONTACT
            </Link>
          </li>

        </ul>
      </div>
    </nav>
    
  );
}

export default Navbar;