import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ token, username, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <header className="navbar is-dark">
      <nav className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">Home</Link>
          <Link className="navbar-item" to="/about">About</Link>
        </div>
        <div className="navbar-end">
        { token ? ( 
          <> 
            <span className="navbar-item">Hola, {username}</span>
            <button className="button is-light" onClick={handleLogout}>Logout</button> 
          </> 
          ) : ( 
            <Link className="navbar-item" to="/login">Login</Link> 
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
