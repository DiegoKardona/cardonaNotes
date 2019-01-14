import React from "react";

import "./Header.scss";

/*Importing ract-router*/
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <div id="home-header">
      <div id="header-container">
        <div id="brand">
          <div id="brand-title">
            <h1>
              <Link to="/" className="link">
                cardona<span>notes</span>
              </Link>
            </h1>
          </div>
        </div>
        <div id="menu">{props.handleRenderMenu}</div>
      </div>
    </div>
  );
};

export default Header;
