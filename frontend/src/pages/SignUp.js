import React from 'react'
import { useDispatch, useSelector } from "react-redux";
// Actions
import allActions from '../actions'
// Styling
import { Button, Col, Form } from 'react-bootstrap';
// Helpers
import states from '../helpers/states';

const SignUp = () => {

  const dispatch = useDispatch()

  const handleSubmit = event => {
    event.preventDefault();
    event.persist()
    let userObj = {}
    userObj['first_name'] = event.target[0].value
    userObj['last_name'] = event.target[1].value
    userObj['email'] = event.target[2].value
    userObj['phone_number'] = event.target[3].value
    userObj['password'] = event.target[4].value
    userObj['address_1'] = event.target[5].value
    userObj['address_2'] = event.target[6].value
    userObj['city'] = event.target[7].value
    userObj['state'] = event.target[8].value
    userObj['zip_code'] = event.target[9].value
    console.log(userObj)
    dispatch(allActions.loginActions.thunkedSignUp(userObj))
  }

  return (
    <>
      <Form className="container" onSubmit={handleSubmit}>
        {/* dispatch(allActions.loginActions.signUp()) */}
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="firstName" placeholder="John" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="lastName" placeholder="Doe" />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="phoneNumber" placeholder="555-555-5555" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              {Object.values(states).map((state, index) => (
                <option key={index}>{ state }</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default SignUp;
