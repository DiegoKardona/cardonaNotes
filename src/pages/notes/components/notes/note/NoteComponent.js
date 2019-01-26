import React from "react";

import "./NoteComponent.scss";

//Importing primeReact components
import { Card } from "primereact/card";
import { Button } from "primereact/button";

//Importing icons
import { IconContext } from "react-icons";
import { MdLockOpen, MdLockOutline } from "react-icons/md";

const NoteComponent = props => {
  return (
    <div className="noteComponent p-xl-4 p-lg-6 p-md-6 p-sm-12">
      <Card>
        <div className="noteHeader">
          <h3>{props.title}</h3>
          <div className="notePrivate" onClick={props.handlePrivacity}>
            {props.private ? (
              <IconContext.Provider value={{ size: "20px" }}>
                <MdLockOutline />
              </IconContext.Provider>
            ) : (
              <IconContext.Provider value={{ size: "20px" }}>
                <MdLockOpen />
              </IconContext.Provider>
            )}
          </div>
        </div>
        <div
          className="noteBody"
          dangerouslySetInnerHTML={{ __html: `${props.content}` }}
        />
        <div className="noteControls">
          <Button onClick={props.handleRemoveNote} label="Remove" />
        </div>
      </Card>
    </div>
  );
};

export default NoteComponent;
