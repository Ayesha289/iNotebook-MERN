import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import authContext from "../context/auth/AuthContext";

const Signup = () => {
  const context = useContext(authContext);
  const { signupUser } = context;
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    signupUser(credentials.name, credentials.email, credentials.password);
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLink = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <Container className="login">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            name="name"
            value={credentials.name}
            type="text"
            onChange={onChange}
            placeholder="John Doe"
            minLength={3}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Your Email</Form.Label>
          <Form.Control
            name="email"
            value={credentials.email}
            type="email"
            onChange={onChange}
            placeholder="name@example.com"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            value={credentials.password}
            type="password"
            onChange={onChange}
            placeholder="Password"
            minLength={5}
            required
          />
        </Form.Group>
        <Stack className="col mx-auto">
          <Button variant="light" className="button" onClick={handleSubmit}>
            Signup
          </Button>
          <Button variant="link" className="text" onClick={handleLink}>
            Already an existing user? Login here!
          </Button>
        </Stack>
      </Form>
    </Container>
  );
};

export default Signup;
