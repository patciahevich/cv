/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header id='home'>
      <div className='wrapper'>
        <h2>Hello, World!</h2>
        <h1>My name is <span className='accent'>Volha</span>.</h1>
        <h2>I am junior frontend developer.</h2>
      </div>
      <a className='down' href='#about'/>
      
    </header>
  )
}

export default Header;