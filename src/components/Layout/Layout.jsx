import React from 'react'
import exportFromJSON from 'export-from-json'
import { Nav,Navbar,Container,NavDropdown } from 'react-bootstrap'

export default function Layout({time,handleModel,dark,data,step}) {
    const textStyle ={
        textAlign:"center"
    }
    
    const handleDownload=(data_format)=>{
        const data1 = data.filter((item,key)=>key <= step-1)
        data1.forEach((item,key) =>item.index=key);
        var exportType =undefined;
        switch(data_format){
            case "csv":
                exportType =  exportFromJSON.types.csv;
                break;
            case "xml":
                exportType =  exportFromJSON.types.xml;
                break;
            case "json":
                exportType =  exportFromJSON.types.json;
                break;
            default:
                alert("something wrong")
                break;
        }
        exportFromJSON({data:data1, fileName:'data', exportType })
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">React Json Analyze</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/ant_mode">Ant Design Mode</Nav.Link>
                    <Nav.Link href="/chart">Chart Mode</Nav.Link>
                    <NavDropdown title={dark?"Dark Theme":"Light Theme"} id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={handleModel}>{dark?"Light Theme":"Dark Theme"}</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className="me-auto">

                </Nav>
                <Nav className="justify-content-end">
                    <Nav.Link eventKey="disabled" disabled style={{color:"white"}}>
                        Json read time: {time}
                    </Nav.Link>
                    <NavDropdown title="Export Data" id="collasible-nav-dropdown"  >
                        <NavDropdown.Item onClick={()=>{handleDownload("xml")}} style={textStyle}>XML</NavDropdown.Item>
                        <NavDropdown.Item onClick={()=>{handleDownload("csv")}}  style={textStyle}>CSV</NavDropdown.Item>
                        <NavDropdown.Item onClick={()=>{handleDownload("json")}}  style={textStyle}>JSON</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}
