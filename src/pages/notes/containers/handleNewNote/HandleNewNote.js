import React, { Component } from "react";

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

    alert(this.state.noteBody);
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

export default HandleNewNote;
