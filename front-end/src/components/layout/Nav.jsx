import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li><NavLink to='/index'>Index</NavLink></li>
        <li><NavLink to='/permissions'>Permissions</NavLink></li>
        <li><NavLink to='/create-permissions'>Create Permissions</NavLink></li>
        
      </ul>
    </nav>
  )
}
