import React from "react";
// import NavDropdown from "react-bootstrap/NavDropdown";
import "./nav.css";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
// import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
// import ReactBootstrapStyle from "react-bootstrap";
import { RiRecycleFill } from "react-icons/ri";

const NavbarGaia = () => {
  return (
    <>
      <Navbar expand="lg" className="gaiaNav" fixed="top">
        <Container className="pt-2 pb-2">
          <Navbar.Brand href="#home">
            <strong className="brandNav">
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                Gaia Creaciones <RiRecycleFill className="iconNav" />
              </Link>
            </strong>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ">
              <Nav.Link href="/" className="text-success">
                Incio
              </Nav.Link>
              <Nav.Link href="/" className="text-success">
                Ver productos
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Buscar producto"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarGaia;
