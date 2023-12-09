import React, { useState, useContext } from "react";
import noteContext from "../context/notes/NoteContext";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";
import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";

const AddNote = () => {
  const navigate = useNavigate();
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
  });

  const submitNote = (e) => {
    e.preventDefault();
    if (localStorage.getItem("token") !== null) {
      addNote(note.title, note.description);
      setNote({
        title: "",
        description: "",
      });
    } else {
      //<Link to="/login" />;
      navigate("/login");
    }
  };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const [isExpanded, setExpanded] = useState(false);

  function expand() {
    setExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}
        <textarea
          name="description"
          onClick={expand}
          onChange={handleChange}
          value={note.description}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default AddNote;
