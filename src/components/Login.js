import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem("token", json.authtoken);
      navigate("/");
    } else {
      alert("Invalid Credentials!");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
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
          />
        </Form.Group>
        <Button variant="light" className="button" onClick={handleSubmit}>
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
