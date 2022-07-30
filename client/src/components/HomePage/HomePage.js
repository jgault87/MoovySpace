import "./homepage.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Modal from "../Modal/Modal";

import Auth from "../../utils/auth";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "blue",
  padding: "10px",
};

const HomePage = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="split left">
        <div className="centered">
          <img src="" alt="Movies" />
          <h2>Site movie preview</h2>
          <p></p>
        </div>
      </div>

      <div className="split right">
        <div className="centered">
          {/* <img src='img_avatar.png' alt='login' /> */}
          {/* <h2>Login Form</h2>
          <p>it's working but needs styling</p> */}
          <div>
            {Auth.loggedIn() ? (
              <>
                <Link className="btn btn-lg btn-info m-2" to="/me">
                  {Auth.getProfile().data.username}'s profile
                </Link>
                <Link className="btn btn-lg btn-info m-2" to="/home">
                  Homepage
                </Link>
                <button className="btn btn-lg btn-light m-2" onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <div style={BUTTON_WRAPPER_STYLES}>
                  <Login />
                  <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                    <Signup />
                  </Modal>

                  <button
                    className="btn btn-primary"
                    onClick={() => setIsOpen(true)}
                  >
                    Signup instead?
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
