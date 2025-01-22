import React from 'react';
import './Nav.scss';

const nav = ['home', 'education', 'skills', 'contacts', 'projects']

function Nav() {
  return (
    <nav>
      {
        nav.map(item => (
          <a className='nav-item' href={`#${item}`}>{item.toUpperCase()}</a>
        ))
      }
    </nav>
  )
}

export default Nav;