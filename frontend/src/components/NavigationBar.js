import React from 'react'
//  import { useDispatch, useSelector } from "react-redux";
// Styling
import { Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Landscaped</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#login">Log In</Nav.Link>
        <Nav.Link href="#signup">Sign Up</Nav.Link>
      </Nav>
    </Navbar>
    </>
  )
}

export default NavigationBar;
