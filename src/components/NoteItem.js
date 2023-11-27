import React from 'react';
import Card from 'react-bootstrap/Card';

const NoteItem = (props) => {
    const {note} = props;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{note.title}</Card.Title>
                <Card.Text>{note.description}</Card.Text>
            </Card.Body>
        </Card>
  )
}

export default NoteItem
