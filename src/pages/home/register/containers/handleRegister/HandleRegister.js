import React, { Component } from "react";

//Importing firebase
import firebase from "firebase";

//Importing  router
import { Redirect } from "react-router-dom";

//Importing redux
import { connect } from "react-redux";

//Importing LoginForm to handle it
import RegisterForm from "../../components/registerForm/RegisterForm";

class HandleRegister extends Component {
  state = {
    email: null,
    username: null,
    password: null
  };

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const findLongestWord = str => {
      const stringArray = str.split(" ");
      const longestWord = stringArray.reduce((a, b) => {
        return b.length > a.length ? b : a;
      });
      return longestWord.length;
    };

    const longestUsername = findLongestWord(this.state.username);

    if (longestUsername > 0) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          this.props.dispatch({
            type: "CHANGE_USERNAME",
            payload: this.state.username
          });

          firebase.auth().currentUser.updateProfile({
            photoURL:
              "https://www.gatesnotes.com/TGN/img/gn_profile_option_6_300.jpg"
          });

          alert("Account created!");
        })
        .catch(error => {
          // Handling errors
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorCode);
        });
    } else {
      alert("Please enter a valid username");
    }
  };

  render() {
    const logged = this.props.logged;

    if (logged) {
      return <Redirect to="/" />;
    } else {
      return (
        <div>
          <RegisterForm
            data={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = (state, props) => {
  return { logged: state.logged };
};

export default connect(mapStateToProps)(HandleRegister);
