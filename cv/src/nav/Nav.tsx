import React, { useState} from 'react';
import './Nav.scss';
import Burger from '../burger/Burger.tsx';

const nav = ['home', 'education', 'skills', 'contacts', 'projects']

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
    <Burger open={isOpen} setOpen={setIsOpen}/>
    <div className={isOpen ? 'nav-links active' : 'nav-links'} onClick={() => setIsOpen(false)}>
      {nav.map((item, index) => (
        <a className='nav-item' href={`#${item}`} key={index}>{item.toUpperCase()}</a>
      ))}
    </div>
     
    </nav>
  )
}

export default Nav;