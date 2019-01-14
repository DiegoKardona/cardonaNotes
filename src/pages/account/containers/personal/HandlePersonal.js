import React, { Component } from "react";

//Importing redux
import { connect } from "react-redux";

//Importing firebase
import firebase from "firebase";

//Importing personal componentn to handle it
import PersonalComponent from "../../components/personal/PersonalComponent";

class HandlePersonal extends Component {
  state = {
    ...this.props.user,
    avatarProgress: 0
  };

  handleUsername = e => {
    e.preventDefault();

    this.props.dispatch({
      type: "CHANGE_USERNAME",
      payload: this.state.displayName
    });
  };

  handleAvatar = e => {
    e.preventDefault();

    const storageRef = firebase.storage().ref(`${this.state.email}/avatar`);
    const task = storageRef.put(this.state.photoURL);

    task.on(
      "state_changed",
      snapshot => {
        var progressPercentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState({ avatarProgress: progressPercentage });
      },
      error => {
        alert("Ha ocurrido un error");
      },
      () => {
        task.snapshot.ref.getDownloadURL().then(downloadURL => {
          this.setState({
            ...this.state,
            photoURL: downloadURL,
            avatarProgress: 100
          });

          this.props.dispatch({
            type: "CHANGE_AVATAR",
            payload: this.state.photoURL
          });
        });
      }
    );
  };

  handleChange = e => {
    switch (e.target.name) {
      case "photoURL": {
        this.setState({ ...this.state, photoURL: e.target.files[0] });
        break;
      }

      default:
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    }
  };

  render() {
    return (
      <PersonalComponent
        handleUsername={this.handleUsername}
        handleAvatar={this.handleAvatar}
        handleChange={this.handleChange}
        data={this.state}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(HandlePersonal);
