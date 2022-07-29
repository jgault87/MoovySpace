import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchBar from "../SearchBar/SearchBar";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header>
      <SearchBar />
      <button id="profilePictureContainer">
        <AccountCircleIcon />
      </button>
      {/* <div>
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
      </div> */}
    </header>
  );
};

export default Header;
