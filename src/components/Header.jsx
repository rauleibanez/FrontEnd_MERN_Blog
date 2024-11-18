import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="navbar is-dark"> 
      <nav className="navbar-menu"> 
        <div className="navbar-start"> 
          <Link className="navbar-item" to="/">Home</Link> 
          <Link className="navbar-item" to="/about">About</Link> 
        </div>
        <Link className="navbar-item" to="/login">Login</Link> 
      </nav> 
    </header>
  );
};

export default Header;
