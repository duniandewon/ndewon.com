import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = () => (
  <nav className='nav'>
    <ul>
      <li className='nav-item'>
        <Link to='/' className='nav-link'>
          About
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/blog' className='nav-link'>
          Blog
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/myworks' className='nav-link'>
          My Works
        </Link>
      </li>
      <li className='nav-item'>
        <Link to='/contact' className='nav-link'>
          Contact
        </Link>
      </li>
    </ul>
  </nav>
);

export default MainNav;
