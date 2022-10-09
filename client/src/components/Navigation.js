import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const styles = {
  nav: {
    background: "#2f1f2b",

    // "margin-left": "2%",
    // "margin-right": "2%",
  },
  brand: {
    color: "#deafdb",
    "font-size": "xx-large",
    "font-family": "Monoton, cursive",
  },
  link: {
    color: "#ad88ab",
    "font-size": "large",
    "font-family": "'Jura', sans-serif",
  },
  hamburger: {
    background: "#ad88ab",
  },
};

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" style={styles.nav}>
      <Navbar.Brand href="#home" style={styles.brand}>
        Kamary Gillespie
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        style={styles.hamburger}
      />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          <Nav.Link href="/" eventKey={1} style={styles.link}>
            ABOUT ME
          </Nav.Link>
          <Nav.Link href="/projects" eventKey={2} style={styles.link}>
            MY PROJECTS
          </Nav.Link>
          <Nav.Link href="/resume" eventKey={3} style={styles.link}>
            MY RESUME
          </Nav.Link>
          <Nav.Link href="/contact" eventKey={4} style={styles.link}>
            CONTACT ME
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navigation;
