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
      {Auth.loggedIn() ? (
        <div>
          <label>
            <span>
              {" "}
              <AccountCircleIcon id="profilePictureContainer" />{" "}
            </span>
          </label>
          <input type="checkbox" id="touch" />
          <ul className="slide">
            <li>
              <Link className="profileLinks" to="/me">
                {" "}
                Profile{" "}
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="profileLinks"
                id="logoutLink"
                onClick={logout}
              >
                {" "}
                Logout{" "}
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <label>
            <span>
              {" "}
              <AccountCircleIcon id="profilePictureContainer" />{" "}
            </span>
          </label>
          <input type="checkbox" id="touch" />
          <ul className="slide">
            <li>
              <Link className="profileLinks" to="/login">
                {" "}
                Login{" "}
              </Link>
            </li>
            <li>
              <Link className="profileLinks" to="/signup">
                {" "}
                Signup{" "}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
