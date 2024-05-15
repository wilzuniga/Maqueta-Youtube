import React, { Component } from "react";
import img1 from "../img/utube_icon.ico";
import {
  Navbar,
  Container,
  NavDropdown,
  Form,
  Button,
  Nav,
  Offcanvas,
} from "react-bootstrap";
export default class NavBar extends Component {
  render() {
    return (
      <Navbar expand="xxl" className="navBar">
        <Container fluid>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxl`}  />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-xxl`}
            aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-xxl`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Brand href="#" className="me-auto">
            <img
              src={img1}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="YouTube Icon"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}
