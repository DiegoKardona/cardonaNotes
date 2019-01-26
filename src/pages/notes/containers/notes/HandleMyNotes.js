import React, { Component } from "react";

//Importing firebase
import firebase from "firebase";

//Importing redux
import { connect } from "react-redux";

//Importing MyNotes Component to handle it
import MyNotes from "../../components/notes/MyNotes";

class HandleMyNotes extends Component {
  state = {
    isLoading: false,
    notes: {}
  };

  componentDidMount() {
    const db = firebase.firestore();

    this.setState({ isLoading: true });

    db.collection("notes")
      .where("author.email", "==", this.props.authorEmail)
      .get()
      .then(querySnapshot => {
        const notes = [];
        querySnapshot.forEach(note => {
          notes.push({ ...note.data(), id: note.id });
        });
        this.setState({ isLoading: false, notes });
      })
      .catch(error => {
        alert("An error was happend :" + error);
      });
  }

  render() {
    return <MyNotes notes={this.state.notes} />;
  }
}

const mapStateToProps = (state, props) => {
  return { authorEmail: state.user.email };
};

export default connect(mapStateToProps)(HandleMyNotes);
