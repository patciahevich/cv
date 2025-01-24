import React from 'react';
import './Burger.scss';

function Burger({open, setOpen}) {
  return (
    <div className={open ? 'burger active' : 'burger'} onClick={() => setOpen(!open)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default Burger;


