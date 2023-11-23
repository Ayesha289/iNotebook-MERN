import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export const Home = () => {
    return (
        <>
            <div className="container">
            <h3>Add a Note</h3>
            <Form>
                <Row className="align-items-center">
                    <Col sm={3} className="my-1">
                    <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                        Name
                    </Form.Label>
                    <Form.Control id="inlineFormInputName" placeholder="Title" />
                    </Col>
                    <Col sm={3} className="my-1">
                    <Form.Label htmlFor="inlineFormInputGroupUsername" visuallyHidden>
                        Username
                    </Form.Label>
                    <InputGroup>
                        <Form.Control
                        id="inlineFormInputGroupUsername"
                        placeholder="Body"
                        />
                    </InputGroup>
                    </Col>
        
                    <Col xs="auto" className="my-1">
                    <Button type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form>
            </div>
            <div className="container">
                <h3>Your Notes</h3>
            </div>

        </>
    )
}

export default Home;