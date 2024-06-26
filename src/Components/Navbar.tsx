import { FiMenu } from 'react-icons/fi';
import './Navbar.css';
import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <button className='menu-bars' onClick={showSidebar}>
          {sidebar ? <IoClose/>: <FiMenu /> }
        </button>
        <span className='name-text'>BENI</span>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul onClick={showSidebar}>
        
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;