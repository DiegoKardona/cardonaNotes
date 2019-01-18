import React from "react";

import "./MainHero.scss";

//Importing prime components
import { Card } from "primereact/card";
import { Button } from "primereact/button";

//Importing router
import { Link } from "react-router-dom";

const MainHero = props => {
  return (
    <div id="hero">
      <div id="hero-container" className="p-grid">
        <div
          id="noter-container"
          className="p-grid p-col p-justify-center p-align-end"
        >
          <Card className="p-xl-4">
            <div id="be-noter">
              <h2>Be a Noter</h2>
              <p>Be a noter to write anything you want. It´s free and easy!</p>
              <Link to={props.logged ? "/notes" : "/register"}>
                <Button label="Start noting" />
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
