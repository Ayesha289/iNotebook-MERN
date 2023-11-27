import React, { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "6534fc596249e7cf87196717",
          "user": "6534c35e7075cea4a1b11ce7",
          "title": "First note",
          "description": "This is first note",
          "tag": "General",
          "date": "2023-10-22T10:41:29.311Z",
          "__v": 0
        },
        {
            "_id": "6534fc596249e7cf87196717",
            "user": "6534c35e7075cea4a1b11ce7",
            "title": "Second note",
            "description": "This is second note",
            "tag": "General",
            "date": "2023-10-22T10:41:29.311Z",
            "__v": 0
          },
          {
            "_id": "6534fc596249e7cf87196717",
            "user": "6534c35e7075cea4a1b11ce7",
            "title": "Third note",
            "description": "This is third note",
            "tag": "General",
            "date": "2023-10-22T10:41:29.311Z",
            "__v": 0
          }
      ]
      const [notes, setNotes] = useState(notesInitial);
    return(
        <noteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;