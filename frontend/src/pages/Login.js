import React from 'react'
//import { useDispatch, useSelector } from "react-redux";
// Styling
import { Button, Col, Form } from 'react-bootstrap';

const Login = () => {
  return (
    <>
      <Form className="container">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          {/* something for "forgot passoword" */}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default Login;
