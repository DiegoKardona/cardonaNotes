import React from "react";

import "./HeaderMenu.scss";

//Importing router
import { Link } from "react-router-dom";

//Importing prime components
import { Button } from "primereact/button";

const LoggedMenu = props => {
  return (
    <div id="logged-menu">
      <div id="user-name">
        <Link to="/account" className="link">
          <p>{props.user.displayName}</p>
        </Link>
      </div>
      <div id="user-avatar">
        <Link to="/account" className="link">
          <div
            id="avatar"
            style={{ backgroundImage: `url("${props.user.photoURL}")` }}
          />
        </Link>
      </div>
      <div id="menu">
        <Link to="/" className="link">
          <p>Home</p>
        </Link>
        <Link to="/notes" className="link">
          <p>Notes</p>
        </Link>
      </div>
      <div id="logout">
        <Button
          id="logout-button"
          className="primaryColor"
          onClick={props.handleLogout}
          label="Log out"
        />
      </div>
    </div>
  );
};

const LoginMenu = () => {
  return (
    <div id="login-menu">
      <Link to="/login" className="link">
        Log in
      </Link>
      <Link to="/register" className="link">
        Sign up
      </Link>
    </div>
  );
};

export { LoggedMenu, LoginMenu };
