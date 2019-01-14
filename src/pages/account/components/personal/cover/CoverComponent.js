import React from "react";

import "./CoverComponent.scss";

//Importing icons froms react-icons
import { IconContext } from "react-icons";
import { MdAddAPhoto } from "react-icons/md";

const CoverComponent = () => {
  return (
    <div id="cover">
      <div id="change-cover">
        <IconContext.Provider value={{ size: "28px", color: "white" }}>
          <MdAddAPhoto />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default CoverComponent;
