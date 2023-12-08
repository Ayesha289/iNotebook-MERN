import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import authContext from "../context/auth/AuthContext";

const Login = () => {
  const context = useContext(authContext);
  const { loginUser } = context;
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(credentials.email, credentials.password);
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLink = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <Container className="login">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
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
            Login
          </Button>
          <Button variant="link" className="text" onClick={handleLink}>
            New user? Create a new account here!
          </Button>
        </Stack>
      </Form>
    </Container>
  );
};

export default Login;
