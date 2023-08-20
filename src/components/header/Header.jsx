import React from 'react';
import './header.css';
import { SiFlipkart } from "react-icons/si";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <SiFlipkart className='header__icon' />
        <h1>Flipkart Loyalty Tokens</h1>
        {/* <h1>Rasif Taghizade</h1>
        <h5 className="text-light">Front-end Developer</h5> */}
      </div>
    </header>
  );
};

export default Header;
