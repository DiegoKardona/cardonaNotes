import React from "react";

import "./MyNotes.scss";

//Importing component to send the props
import NoteComponent from "./note/NoteComponent";

const MyNotes = props => {
  console.log(props.notes);
  return (
    <div id="my-notes" className="marged-content">
      <h2>I'm your notes</h2>
      <div id="notes" className="p-grid">
        {Object.values(props.notes).map(note => (
          <NoteComponent {...note} />
        ))}
      </div>
    </div>
  );
};

export default MyNotes;
