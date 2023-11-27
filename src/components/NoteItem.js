import React from "react";
import Card from "react-bootstrap/Card";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="note">
      <h1>{note.title}</h1>
      <p>{note.description}</p>
      <button>
        <DeleteIcon />
      </button>
      <button>
        <EditIcon />
      </button>
    </div>
  );
};

export default NoteItem;
