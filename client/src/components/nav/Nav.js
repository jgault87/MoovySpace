import React from 'react';
import './nav.css';




const Nav = () => {
  
  return (
    <nav>
      <a href='/' >
       Home 
      </a>
      <a href='/home' >
        Search
      </a>
      <a href='/feed' >
        Feed
      </a>
      <a href='/profile'>
        Profile
      </a>
      
    </nav>
  );
};

export default Nav;
