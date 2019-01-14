import React, { Component } from "react";

/*Importing components*/
//HandleMenu controls the Header
import Header from "../home/containers/header/HandleMenu";
//HandleNewNote constrols the NewNote
import NewNote from "./containers/handleNewNote/HandleNewNote";

class NotesPage extends Component {
  componentDidMount() {
    document.title = "Notes - Cardonanotes | A place to write anything";
  }

  render() {
    return (
      <div>
        <Header />
        <NewNote />
      </div>
    );
  }
}

export default NotesPage;
