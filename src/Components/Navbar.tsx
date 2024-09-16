import { FiMenu } from 'react-icons/fi';
import './Navbar.css';
import  { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import {FaInstagram } from 'react-icons/fa';

import { ImGithub, ImLinkedin} from 'react-icons/im';
const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <button className='menu-bars ' onClick={showSidebar}>
          {sidebar ? <IoClose/>: <FiMenu /> }
        </button>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul onClick={showSidebar}>
        
          <li>
            <a href="#home" onClick={() => scrollTo(0,0)}>Home</a>
          </li>
          <li>
            <a onClick={() => scrollTo(0,260)}>About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
       
      </nav>
    </>
  );
}

export default Navbar;