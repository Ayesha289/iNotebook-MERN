import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import noteContext from "../context/notes/NoteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="note">
      <h1>{note.title}</h1>
      <p>{note.description}</p>
      <button
        onClick={() => {
          deleteNote(note._id);
        }}
      >
        <DeleteIcon />
      </button>
      <button>
        <EditIcon
          onClick={() => {
            updateNote(note);
          }}
        />
      </button>
    </div>
  );
};

export default NoteItem;
