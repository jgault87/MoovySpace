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
    <header>
      <form> 
        <input type="input" name="search-bar" className="searchBar" placeholder="Search Movie Titles..." />
      </form>
      <div className="profilePictureContainer">
        <AccountCircleIcon />
      </div>
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
              <Link className="" to="/login">
                Login
              </Link>
              <Link className="" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
    </header>
  );
};

export default Header;
