import React, { Component } from "react";

//Importing Redux
import { connect } from "react-redux";

//Importing firebase
import firebase from "firebase";

//Importing Header to handle it
import Header from "../../components/header/Header";
//Importing menu to handle it
import { LoggedMenu, LoginMenu } from "../../components/header/menu/HeaderMenu";

class HandleMenu extends Component {
  handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.dispatch({ type: "USER_LOGOUT" });
      })
      .catch(error => {
        alert(error);
      });
  };

  render() {
    return (
      <Header
        handleRenderMenu={
          this.props.logged ? (
            <LoggedMenu
              user={this.props.user}
              handleLogout={this.handleLogout}
            />
          ) : (
            <LoginMenu />
          )
        }
      />
    );
  }
}

const mapStateToProps = state => {
  return { logged: state.logged, user: state.user };
};

export default connect(mapStateToProps)(HandleMenu);
