import React from 'react';
import '../css/Header.css';


const Header = () => {
  return (
    <header>
      <img src="logo.png" alt="Logo" />
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};

export default Header;