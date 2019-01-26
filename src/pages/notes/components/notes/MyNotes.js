import React from "react";

import "./MyNotes.scss";

//Importing HandleNoteComponent that handle the NoteComponent
import NoteComponent from "../../containers/notes/note/HandleNoteComponent";

const MyNotes = props => {
  return (
    <div id="my-notes" className="marged-content">
      <h2>I'm your notes</h2>
      <div id="notes" className="p-grid">
        {Object.values(props.notes).map(note => (
          <NoteComponent note={note} />
        ))}
      </div>
    </div>
  );
};

export default MyNotes;
