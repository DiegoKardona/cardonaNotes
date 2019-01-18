import React, { Component } from "react";

/*Importing components*/
//HandleMenu controls the Header
import Header from "../home/containers/header/HandleMenu";
//HandleNewNote constrols the NewNote
import NewNote from "./containers/handleNewNote/HandleNewNote";
//HandleMyNotes controls the MyNotes component
import MyNotes from "./containers/notes/HandleMyNotes";

class NotesPage extends Component {
  componentDidMount() {
    document.title = "Notes - Cardonanotes | A place to write anything";
  }

  render() {
    return (
      <div>
        <Header />
        <NewNote />
        <MyNotes />
      </div>
    );
  }
}

export default NotesPage;
