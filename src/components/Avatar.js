import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../assets/img/profile.jpg';

const Avatar = () => (
  <div className='avatar'>
    <img src={Image} alt='dunia ndewon' />
    <Link to='/'>
      <h1>Dunia Ndewon</h1>
    </Link>
  </div>
);

export default Avatar;
