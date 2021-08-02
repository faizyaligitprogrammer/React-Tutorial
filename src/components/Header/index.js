import React from 'react'
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
              <Link to='/' style={{textDecoration:'none',color:'black',paddingLeft:'10px'}}>HOME</Link>
              <Link to='/Sign_in' style={{textDecoration:'none',color:'black', paddingLeft:'10px'}}>Sign in</Link>
        {/* <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Header
