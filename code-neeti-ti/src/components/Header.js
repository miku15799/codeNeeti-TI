import React from 'react';
import { BrowserRouter as  Link } from 'react-router-dom';
import '../css/Login.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">Code Neeti</h1>
      <nav className="nav">
        <Link className="nav-link" to="/">Homepage</Link>
        <Link className="nav-link" to="./componrnts/LoginPage">User Login</Link>
      </nav>
    </header>
  );
};

export default Header;
