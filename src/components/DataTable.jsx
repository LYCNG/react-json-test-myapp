import React from 'react'

import {Table,Container,Button} from 'react-bootstrap'

export default function DataTable({data}) {

    return (
        <div>
            <Container>
            {/* {data.map((item,key)=>{
                <RowTable key={key} />
            })
            } */}
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>index</th>
                        <th>ContexID</th>
                        <th>PieceID</th>
                        <th>TimeTag</th>
                        <th>UCL</th>
                        <th>LCL</th>
                        <th>Value</th>
                        <th>button</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item,key)=>{
                        return(
                            <tr key={key}>
                                <td>{item.IDX}</td>
                                <td>{item.CONTEXID}</td>
                                <td>{item.PIECEID}</td>
                                <td>{item.TIMETAG}</td>
                                <td>{item.UCL}</td>
                                <td>{item.LCL}</td>
                                <td>{item.VALUE}</td>
                                <td>
                                    <Button variant="primary">Edit</Button>{' '}
                                    <Button variant="danger">Delete</Button>{' '}
                                </td>
                            </tr>    
                        )
                        })
                    } 

                </tbody>
                </Table>
            </Container>
        </div>
    )
}


