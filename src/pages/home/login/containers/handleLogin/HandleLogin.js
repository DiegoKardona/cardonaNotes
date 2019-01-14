import React, { Component } from "react";

//Importing firebase
import firebase from "../../../../../firebase";

//Importing router
import { Redirect } from "react-router-dom";

//Importing redux
import { connect } from "react-redux";

//Importing LoginForm to handle it
import LoginForm from "../../components/loginForm/LoginForm";

class HandleLogin extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        // Handling errors
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          alert("Wrong password.");
        } else {
          alert(errorCode);
        }
      });
  };

  render() {
    const logged = this.props.logged;

    if (logged) {
      return <Redirect to="/" />;
    } else {
      return (
        <LoginForm
          data={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      );
    }
  }
}

const mapStateToProps = (state, props) => {
  return { logged: state.logged };
};

export default connect(mapStateToProps)(HandleLogin);
