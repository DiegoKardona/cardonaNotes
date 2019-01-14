import React, { Component } from "react";

/*Importing components*/
import Header from "../login/components/header/Header";
//Importing HandleRegister that controls the RegisterForm
import RegisterForm from "./containers/handleRegister/HandleRegister";

class RegisterPage extends Component {
  componentDidMount() {
    document.title = "Regster - Cardonanotes | A place to write anything";
  }

  render() {
    return (
      <div>
        <Header />
        <RegisterForm />
      </div>
    );
  }
}

export default RegisterPage;
