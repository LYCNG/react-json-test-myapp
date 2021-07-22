import React from 'react'
import { Nav,Navbar,Container,NavDropdown } from 'react-bootstrap'

export default function Layout({time}) {

    const textStyle ={
        textAlign:"center"
    }
    
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">React-Json-Analyze</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                </Nav.Link>
                </Nav>
                <Nav>
                <NavDropdown title="Export Data" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1" style={textStyle}>XML</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" style={textStyle}>CSV</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" style={textStyle}>JSON</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}
