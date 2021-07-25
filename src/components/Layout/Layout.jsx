import React from 'react'
import { Nav,Navbar,Container,NavDropdown,Form } from 'react-bootstrap'

export default function Layout({time,handleModel,model}) {
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
                    <Nav.Link eventKey={2}>
                        Dank memes
                    </Nav.Link>
                </Nav>
                <Nav className="me-auto">
                    <Nav.Link eventKey="disabled" disabled style={{color:"white"}}>
                        Json read time: {time}
                    </Nav.Link>
                </Nav>
                <Nav className="me-auto">
                    <Form.Check 
                        style={{marginTop:"5%"}}
                        type="switch"
                        id="custom-switch"
                        check={model}
                        onChange={()=>{handleModel()}}
                    />
                    <Nav.Link  disabled>
                        {model+" Mode"}
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
