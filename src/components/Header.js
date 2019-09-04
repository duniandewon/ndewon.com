import React from 'react';

const Header = props => {
  return (
    <header className='header'>
      <h6>{props.headerSubTitle}</h6>
      <h1>{props.headerTitle}</h1>
    </header>
  );
};

export default Header;
