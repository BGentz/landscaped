import React from 'react'
import { Link } from 'react-router-dom'
//  import { useDispatch, useSelector } from "react-redux";
// Styling
import { Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Link to="/">
        <Navbar.Brand>Landscaped</Navbar.Brand>
      </Link>
      <Nav className="mr-auto">
        <Link to="/login">
          <li>Login</li>
        </Link>
        <Link to="/sign-up">
          <li>Sign Up</li>
        </Link>
      </Nav>
    </Navbar>
    </>
  )
}

export default NavigationBar;
