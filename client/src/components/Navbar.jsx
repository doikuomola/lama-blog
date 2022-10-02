import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="links">
          <Link to="/?cat=art">
            <h6>ART</h6>
          </Link>
          <Link to="/?cat=science">
            <h6>SCIENCE</h6>
          </Link>
          <Link to="/?cat=technology">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          <Link to="/?cat=design">
            <h6>DESIGN</h6>
          </Link>
          <Link to="/?cat=food">
            <h6>FOOD</h6>
          </Link>
          <span>David</span>
          <span>Logout</span>
          <span>
            <Link to="write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
