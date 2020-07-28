import React from "react"
import { useDispatch, useSelector } from "react-redux"
// Actions
import allActions from "../../../actions"
// Styling
import { Button, Col, Form } from "react-bootstrap"
// Helpers
import states from "../../../helpers/states"

const LeadForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = event => {
    event.preventDefault()
    event.persist()
    let userObj = {}
    userObj["first_name"] = event.target[0].value
    userObj["last_name"] = event.target[1].value
    userObj["email"] = event.target[2].value
    userObj["phone_number"] = event.target[3].value
    userObj["address_1"] = event.target[5].value
    userObj["address_2"] = event.target[6].value
    userObj["city"] = event.target[7].value
    userObj["state"] = event.target[8].value
    userObj["zip_code"] = event.target[9].value
    console.log(userObj)
    dispatch(allActions.loginActions.thunkedSignUp(userObj))
  }

  return (
    <>
      <Form className="container" onSubmit={handleSubmit}>
        {/* dispatch(allActions.loginActions.signUp()) */}
        <Form.Row>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Name..." />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default LeadForm
