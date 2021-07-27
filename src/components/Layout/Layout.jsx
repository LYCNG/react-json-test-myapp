import React from 'react'
import { Nav,Navbar,Container,NavDropdown,Form } from 'react-bootstrap'

export default function Layout({time,handleModel,dark}) {
    const textStyle ={
        textAlign:"center"
    }
    
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">React Json Analyze</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/chart">Chart Mode</Nav.Link>
                    <NavDropdown title={dark?"Dark Theme":"Light Theme"} id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={handleModel}>{dark?"Light Theme":"Dark Theme"}</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className="me-auto">
                    <Nav.Link eventKey="disabled" disabled style={{color:"white"}}>
                        Json read time: {time}
                    </Nav.Link>
                </Nav>
                <Nav className="me-auto">
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
