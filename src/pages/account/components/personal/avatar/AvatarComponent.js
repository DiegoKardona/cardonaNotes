import React from "react";

import "./AvatarComponent.scss";

//Importing icons froms react-icons
import { IconContext } from "react-icons";
import { MdAddAPhoto } from "react-icons/md";

//Importing primeReact components
import { Lightbox } from "primereact/lightbox";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const AvatarComponent = props => {
  return (
    <div
      id="avatar"
      style={{ backgroundImage: `url("${props.data.photoURL}")` }}
    >
      <div id="change-avatar">
        <Lightbox
          target={
            <IconContext.Provider value={{ size: "28px", color: "white" }}>
              <MdAddAPhoto />
            </IconContext.Provider>
          }
          id="change-avatar-container"
        >
          <Card>
            <h3>Upload a new photo avatar</h3>
            <progress
              id="avatar-progress"
              value={props.data.avatarProgress}
              max="100"
            />
            <form onSubmit={props.handleAvatar}>
              <div id="avatar-input-container">
                <p>Select image</p>
                <input
                  id="avatar-input"
                  name="photoURL"
                  onChange={props.handleChange}
                  type="file"
                />
              </div>
              <Button id="save-avatar" label="Ok" />
            </form>
          </Card>
        </Lightbox>
      </div>
    </div>
  );
};

export default AvatarComponent;

/*<input
          id="avatar-input"
          name="photoURL"
          value={props.data.photoURL}
          onChange={props.handleChange}
          type="file"
        />*/
