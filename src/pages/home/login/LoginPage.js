import React, { Component } from "react";

/*Importing components*/
import Header from "./components/header/Header";
//Importing handleLogin that controls the LoginForm
import LoginForm from "./containers/handleLogin/HandleLogin";

class LoginPage extends Component {
  componentDidMount() {
    document.title = "Login - Cardonanotes | A place to write anything";
  }

  render() {
    return (
      <div>
        <Header />
        <LoginForm />
      </div>
    );
  }
}

export default LoginPage;
