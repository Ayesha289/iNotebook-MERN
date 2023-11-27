import React, { useContext } from "react";
import NoteItem from "./NoteItem";
import noteContext from "../context/notes/NoteContext";
import AddNote from "./AddNote";

const Notes = () => {
  // eslint-disable-next-line
  const context = useContext(noteContext);
  const { notes, addNote } = context;
  return (
    <>
      <AddNote />
      <div>
        {notes.map((note) => {
          return <NoteItem note={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;
