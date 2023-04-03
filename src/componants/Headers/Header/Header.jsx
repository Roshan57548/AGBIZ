import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import './Style/Style.css';
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" >
      <Container>
        <Navbar.Brand >AGBIZ</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Header" id="collasible-nav-dropdown">
              <Link to="/Header-1" className="links">
                <NavDropdown.Item href="/Header-1">Header-1</NavDropdown.Item>
              </Link>
              <Link to="/Header-2" className="links">
                <NavDropdown.Item href="/Header-2">Header-2</NavDropdown.Item>
              </Link>
              <Link to="/Header-3" className="links">
                <NavDropdown.Item href="/Header-3">Header-3</NavDropdown.Item>
              </Link>
              <Link to="/Header-4" className="links">
                <NavDropdown.Item href="/Header-4">Header-4</NavDropdown.Item>
              </Link>
              <Link to="/Header-5" className="links">
                <NavDropdown.Item href="/Header-5">Header-5</NavDropdown.Item>
              </Link>
              <Link to="/Header-6" className="links">
                <NavDropdown.Item href="/Header-6">Header-6</NavDropdown.Item>
              </Link>
              <Link to="/Header-7" className="links">
                <NavDropdown.Item href="/Header-7">Header-7</NavDropdown.Item>
              </Link>
              <Link to="/Header-8" className="links">
                <NavDropdown.Item href="/Header-8">Header-8</NavDropdown.Item>
              </Link>
              <Link to="/Header-9" className="links">
                <NavDropdown.Item href="/Header-9">Header-9</NavDropdown.Item>
              </Link>
              <Link to="/Header-10" className="links">
                <NavDropdown.Item href="/Header-10">Header-10</NavDropdown.Item>
              </Link>
            </NavDropdown>
            {/* <NavDropdown title="Footers" id="collasible-nav-dropdown" color='black'>
              <Link to="/Footer-1" className="links">
                <NavDropdown.Item >Footer-1</NavDropdown.Item>
              </Link>
              <Link to="/Footer-2" className="links">
                <NavDropdown.Item >Footer-2</NavDropdown.Item>
              </Link>
              <Link to="/Footer-3" className="links">
                <NavDropdown.Item >Footer-3</NavDropdown.Item>
              </Link>
              <Link to="/Footer-4" className="links">
                <NavDropdown.Item >Footer-4</NavDropdown.Item>
              </Link>
              <Link to="/Footer-5" className="links">
                <NavDropdown.Item >Footer-5</NavDropdown.Item>
              </Link>
              <Link to="/Footer-6" className="links">
                <NavDropdown.Item >Footer-6</NavDropdown.Item>
              </Link>
              <Link to="/Footer-7" className="links">
                <NavDropdown.Item >Footer-7</NavDropdown.Item>
              </Link>
              <Link to="/Footer-8" className="links">
                <NavDropdown.Item >Footer-8</NavDropdown.Item>
              </Link>
              <Link to="/Footer-9" className="links">
                <NavDropdown.Item >Footer-9</NavDropdown.Item>
              </Link>
              <Link to="/Footer-10" className="links">
                <NavDropdown.Item>Footer-10</NavDropdown.Item>
              </Link>
                
              </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}


export default Header