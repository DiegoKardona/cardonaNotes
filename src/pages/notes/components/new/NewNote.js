import React from "react";

import "./NewNote.scss";

//Importing primeReact components
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { InputSwitch } from "primereact/inputswitch";

import { Editor } from "primereact/editor";
import { Button } from "primereact/button";

const NewNote = props => {
  return (
    <div id="new-note">
      <div className="first-content marged-content">
        <h2>Write anything you want!</h2>
        <Card>
          <form onSubmit={props.handleNewNote}>
            <div id="note-header">
              <div id="note-title">
                <InputText
                  id="input-title"
                  name="noteTitle"
                  value={props.data.noteTitle}
                  onChange={props.handleChange}
                  placeholder="Insert a title"
                />
              </div>
              <div id="note-private">
                <p>Private</p>
                <InputSwitch
                  name="notePrivate"
                  checked={props.data.notePrivate}
                  onChange={props.handleChange}
                />
              </div>
            </div>
            <div id="note-body">
              <Editor
                style={{ height: "320px" }}
                name="noteBody"
                value={props.data.noteBody}
                onTextChange={props.handleBody}
                placeholder="Just write..."
              />
            </div>
            <Button id="post-button" label="Post" />
          </form>
        </Card>
      </div>
    </div>
  );
};

export default NewNote;
