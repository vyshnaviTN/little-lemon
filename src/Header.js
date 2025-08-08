import React from 'react';
import logo from './logo.png';

function Header() {
  return (
    <header>
      <img src={logo} alt="Little Lemon Logo" style={{ height: '80px' }} />
    </header>
  );
}

export default Header;