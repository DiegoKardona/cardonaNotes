import React, { Component } from "react";

//Importing firebase
import firebase from "firebase";

//Import redux
import { connect } from "react-redux";

//Importing NewNote component to handle it
import NewNote from "../../components/new/NewNote";

class HandleNewNote extends Component {
  state = {
    noteTitle: "",
    notePrivate: false,
    noteBody: ""
  };

  handleChange = e => {
    switch (e.target.name) {
      default:
        this.setState({ ...this.state, [e.target.name]: e.target.value });
    }
  };

  handleBody = e => this.setState({ noteBody: e.htmlValue });

  handleNewNote = e => {
    e.preventDefault();
    const db = firebase.firestore();

    db.collection("notes")
      .add({
        title: this.state.noteTitle,
        private: this.state.notePrivate,
        content: this.state.noteBody,
        author: {
          name: this.props.user.displayName,
          avatar: this.props.user.photoURL,
          email: this.props.user.email
        }
      })
      .then(docRef => {
        alert("Post save with id: " + docRef.id);
      })
      .catch(error => {
        alert("Error: " + error);
      });
  };

  render() {
    return (
      <NewNote
        data={this.state}
        handleChange={this.handleChange}
        handleBody={this.handleBody}
        handleNewNote={this.handleNewNote}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(HandleNewNote);
