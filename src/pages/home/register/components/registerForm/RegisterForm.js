import React from "react";

import "./RegisterForm.scss";

/*Importing primeReact components*/
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const RegisterForm = props => {
  return (
    <div id="register-form" className="p-grid p-justify-center p-align-center">
      <Card className="p-xl-4 p-lg-6 p-sm-8">
        <h2>Sign up</h2>
        <hr />
        <form onSubmit={props.handleSubmit}>
          <div>
            <h3>Email</h3>
            <InputText
              name="email"
              onChange={props.handleChange}
              value={props.data.email}
              id="input-email"
              type="email"
            />
          </div>
          <div>
            <h3>Username</h3>
            <InputText
              id="input-username"
              name="username"
              value={props.data.username}
              onChange={props.handleChange}
              type="text"
            />
          </div>
          <div>
            <h3>Password</h3>
            <InputText
              id="input-password"
              type="password"
              name="password"
              value={props.data.password}
              onChange={props.handleChange}
            />
          </div>
          <Button
            id="register-button"
            className="primaryColor"
            label="Sign up"
          />
        </form>
      </Card>
    </div>
  );
};

export default RegisterForm;
