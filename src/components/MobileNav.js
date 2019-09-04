import React from 'react';
import { Link } from 'react-router-dom';
// import '../assets/scss/NavMobile.scss';
// import '../assets/scss/styles.scss';

const _OpenNav = () => {
  const navMobile = document.querySelector('.nav-mobile');
  const navMobItems = document.querySelectorAll('.nav-mobile .nav-mob-item');

  navMobile.classList.toggle('open');
  navMobItems.forEach(navItem => {
    navItem.classList.toggle('fade');
  });
};

const MobileNav = () => (
  <div className='mobile-menu-container'>
    <nav>
      <ul className='nav-mobile'>
        <li className='nav-mob-item' onClick={_OpenNav}>
          <Link to='/' className='nav-mob-link'>
            About
          </Link>
        </li>
        <li className='nav-mob-item' onClick={_OpenNav}>
          <Link to='/blog' className='nav-mob-link'>
            Blog
          </Link>
        </li>
        <li className='nav-mob-item' onClick={_OpenNav}>
          <Link to='/myworks' className='nav-mob-link'>
            My Works
          </Link>
        </li>
        <li className='nav-mob-item' onClick={_OpenNav}>
          <Link to='/contact' className='nav-mob-link'>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
    <div className='hamburger' onClick={_OpenNav}>
      <div className='line' />
      <div className='line' />
    </div>
  </div>
);

export default MobileNav;
