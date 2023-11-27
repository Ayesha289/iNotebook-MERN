import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Notes from './Notes';
//import noteContext from '../context/notes/NoteContext';
import { Container } from 'react-bootstrap';


export const Home = () => {
    return (
        <>
            <Container>
            <h3>Add a Note</h3>
            <Form>
                    <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                        Name
                    </Form.Label>
                    <Form.Control id="inlineFormInputName" placeholder="Title" />
                    <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
                        Username
                    </Form.Label>
                    <InputGroup>
                        <Form.Control
                        id="inlineFormInputGroupUsername"
                        placeholder="Description"
                        />
                    </InputGroup>
                    <Button type="submit">Submit</Button>
            </Form>
            </Container>
            <Notes/>
        </>
    )
}

export default Home;