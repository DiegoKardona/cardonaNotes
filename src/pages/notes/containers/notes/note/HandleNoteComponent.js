import React, { Component } from "react";

//Importing firebase
import firebase from "firebase";

//Importing NoteComponent to handle it
import NoteComponent from "../../../components/notes/note/NoteComponent";

class HandleNoteComponent extends Component {
  state = {};

  handlePrivacity = () => {
    const db = firebase.firestore();

    const batch = db.batch();

    const note = db.collection("notes").doc(this.props.note.id);

    note
      .get()
      .then(doc => this.setState({ ...doc.data() }))
      .catch(error => alert("Error getting document:", error));

    if (this.state.private) {
      batch.update(note, { private: false });
    } else {
      batch.update(note, { private: true });
    }

    batch.commit().then(() => {
      alert("Privacity seted to: " + this.state.private);
    });
  };

  handleRemoveNote = () => {
    const db = firebase.firestore();

    db.collection("notes")
      .doc(this.props.note.id)
      .delete()
      .then(() => {
        alert("Note removed!");
      })
      .catch(error => {
        alert("Error removing note: ", error);
      });
  };

  render() {
    return (
      <NoteComponent
        {...this.props.note}
        key={this.props.note.id}
        handlePrivacity={this.handlePrivacity}
        handleRemoveNote={this.handleRemoveNote}
      />
    );
  }
}

export default HandleNoteComponent;
