import React from "react";

import "./LoginForm.scss";

/*Importing primeReact components*/
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const LoginForm = props => {
  return (
    <div id="login-form" className="p-grid p-justify-center p-align-center">
      <Card className="p-xl-4 p-lg-6 p-md-8 p-sm-10">
        <h2>Log in</h2>
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
            <h3>Password</h3>
            <InputText
              id="input-password"
              type="password"
              name="password"
              value={props.data.password}
              onChange={props.handleChange}
            />
          </div>
          <Button id="login-button" className="primaryColor" label="Log in" />
        </form>
      </Card>
    </div>
  );
};

export default LoginForm;
