import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="header">
      <form className="searchForm">
        <input type="input" name="search-bar" className="searchBar" placeholder="Search Movie Titles..." />
      </form>
      <a id="profilePictureContainer">
        <AccountCircleIcon fontSize="large" />
      </a>
      <div>
        {Auth.loggedIn() ? (
          <>
            <Link className="" to="/me">
              {Auth.getProfile().data.username}'s profile
            </Link>
            <button className="" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="notSignedInBtn" to="/login">
              Login
            </Link>
            <Link className="notSignedInBtn" to="/signup">
              Signup
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
