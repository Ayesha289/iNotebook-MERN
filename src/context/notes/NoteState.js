import React, { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzNGMzNWU3MDc1Y2VhNGExYjExY2U3In0sImlhdCI6MTY5Nzk2OTYyM30.2odmXSGzPjY0-1mUv2WmVffwXD6ydD5Mb_oeUTe03ZE",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  //add a note
  const addNote = async (title, description) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzNGMzNWU3MDc1Y2VhNGExYjExY2U3In0sImlhdCI6MTY5Nzk2OTYyM30.2odmXSGzPjY0-1mUv2WmVffwXD6ydD5Mb_oeUTe03ZE",
      },
      body: JSON.stringify({ title, description }),
    });

    const json = await response.json();
    console.log(json);

    const note = {
      _id: "6534fc596249e7cf87196717",
      user: "6534c35e7075cea4a1b11ce7",
      title: title,
      description: description,
      date: "2023-10-22T10:41:29.311Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzNGMzNWU3MDc1Y2VhNGExYjExY2U3In0sImlhdCI6MTY5Nzk2OTYyM30.2odmXSGzPjY0-1mUv2WmVffwXD6ydD5Mb_oeUTe03ZE",
      },
    });

    const json = response.json();
    console.log(json);

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //edit a note
  const editNote = async (id, title, description) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUzNGMzNWU3MDc1Y2VhNGExYjExY2U3In0sImlhdCI6MTY5Nzk2OTYyM30.2odmXSGzPjY0-1mUv2WmVffwXD6ydD5Mb_oeUTe03ZE",
      },
      body: JSON.stringify({ title, description }),
    });
    const json = response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));

    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <noteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
