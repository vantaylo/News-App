import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "../Navbar/navbar.css";

export default function index() {
  return (
    <Navbar className="navbar" expand="xx-lg" variant="dark">
      <Navbar.Toggle className="navbar-toggle" aria-controls="basic-navbar-nav" />
      
      <Navbar.Collapse className="navbar-collapse">
        <Nav className="nav">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#account">Account</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}