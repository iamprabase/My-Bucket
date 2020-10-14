import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">My Bucket</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/cart">
              <i className="fas fa-shopping-cart"></i>Cart
            </Nav.Link>
            <Nav.Link href="/signin">
              <i className="fas fa-user"></i>Sign In
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </header>
  )
}

export default Header
