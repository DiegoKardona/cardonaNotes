import React from "react";

import "./Header.scss";

//Importing md icons
import { IconContext } from "react-icons";
import { MdKeyboardArrowLeft } from "react-icons/md";

/*Importing react router*/
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <div id="header-container">
        <div id="brand">
          <div id="arrow-back">
            <IconContext.Provider value={{ size: "34px" }}>
              <Link to="/" className="link">
                <MdKeyboardArrowLeft />
              </Link>
            </IconContext.Provider>
          </div>
          <div id="brand-title">
            <h1>
              <Link to="/" className="link">
                cardona<span>notes</span>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
