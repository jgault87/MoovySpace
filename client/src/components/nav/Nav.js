import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <>
        <Link to='/'>Home</Link>
        <Link to='/home'>Search</Link>
        <Link to='/feed'>Feed</Link>
        <Link to='/profile'>Profile</Link>
      </>
    </nav>
  );
};

export default Nav;
