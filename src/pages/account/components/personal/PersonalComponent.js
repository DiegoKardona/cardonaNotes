import React from "react";

import "./PersonalComponent.scss";

//Importing primereact components
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

//Importing components
import CoverComponent from "./cover/CoverComponent";
import AvatarComponent from "./avatar/AvatarComponent";

const PersonalComponent = props => {
  return (
    <div id="personal">
      <h2>My profile</h2>
      <Card>
        <div id="personal-container">
          <div id="cover">
            <CoverComponent />
          </div>
          <div id="avatar">
            <AvatarComponent
              handleAvatar={props.handleAvatar}
              handleChange={props.handleChange}
              data={props.data}
            />
          </div>
          <div id="user-name">
            <form onSubmit={props.handleUsername}>
              <InputText
                name="displayName"
                value={props.data.displayName}
                onChange={props.handleChange}
              />
              <Button id="save-username" label="Ok" />
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PersonalComponent;
