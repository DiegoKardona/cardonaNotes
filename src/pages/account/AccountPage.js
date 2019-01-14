import React, { Component } from "react";

//Importing redux
import { connect } from "react-redux";

//Importing router
import { Redirect } from "react-router-dom";

/*Importing components*/
//HandleMenu controls the header
import Header from "../home/containers/header/HandleMenu";
//HandlePersonal constrols the personal component
import PersonalComponent from "./containers/personal/HandlePersonal";

class AccountPage extends Component {
  componentDidMount() {
    document.title = "Your account - Cardonanotes | A place to write anything";
  }

  render() {
    const logged = this.props.logged;

    if (logged) {
      return (
        <div>
          <Header />
          <PersonalComponent />
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = (state, props) => {
  return { logged: state.logged };
};

export default connect(mapStateToProps)(AccountPage);
