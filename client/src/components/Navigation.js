import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Dice Roller</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          <Nav.Link href="/" eventKey={1}>
            ABOUT ME
          </Nav.Link>
          <Nav.Link href="/projects" eventKey={2}>
            MY PROJECTS
          </Nav.Link>
          <Nav.Link href="/resume" eventKey={3}>
            MY RESUME
          </Nav.Link>
          <Nav.Link href="/contact" eventKey={4}>
            CONTACT ME
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navigation;
