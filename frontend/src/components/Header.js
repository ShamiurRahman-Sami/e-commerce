import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <header>
      <div>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand>Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <LinkContainer to="/Login" className="justify-content-end">
                  <Nav.Link>
                    <i className="fas fa-user"></i>Login
                  </Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to="/Cart" className="justify-content-end">
                  <Nav.Link>
                    <i className="fas fa-shopping-cart"></i>Cart
                  </Nav.Link>
                </LinkContainer>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;
