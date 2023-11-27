import React, { useContext } from 'react';
import NoteItem from './NoteItem';
import noteContext from '../context/notes/NoteContext';
import { Stack } from 'react-bootstrap';

const Notes = () => {
    // eslint-disable-next-line
    const context = useContext(noteContext); 
    const {notes, setNotes} =  context;
  return (
    <div>
        <h3>Your Notes</h3>
        {notes.map((note)=>{
            return (
              <Stack gap={3}>
              <NoteItem className="p-2" note={note} />
              </Stack>
        )})}
    </div>
  )
}

export default Notes;
