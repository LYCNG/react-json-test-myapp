import React from 'react'
import {useState } from 'react'
import {Table,Container,Button} from 'react-bootstrap'
import Loading from './Loading'
export default function DataTable({data,handleDelete}) {
   
    const [step,setStep] = useState(100)
    const [num,setNum] = useState(0)

    const btn1 ={
        marginLeft:"10px"
    }

    const handleClick=(e)=>{
        var index = e.currentTarget.getAttribute("data-id")

    }
    if(!data) return <Loading />
    return (
        <div>
            <Container>
                <div className="mb-2">
                <input type="value" name="guild" onChange={(e)=>{setNum(e.target.value)}}/>
                <Button style={btn1} variant="light" size='sm' onClick={()=>{setStep(num)}}>Search</Button> 
                </div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>IDX</th>
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
                    {data.filter((item,key)=>key <= step-1).map((items,key)=>{   
                            return(
                                <tr key={key}>
                                    <td>{items.IDX}</td>
                                    <td>{items.CONTEXID}</td>
                                    <td>{items.PIECEID}</td>
                                    <td>{items.TIMETAG}</td>
                                    <td>{items.UCL}</td>
                                    <td>{items.LCL}</td>
                                    <td>{items.VALUE}</td>
                                    <td>
                                        <Button data-id={key} variant="primary" onClick={(e)=>{handleClick(e)}}>Edit</Button>
                                        <Button data-id={key} variant="danger" onClick={(e)=>{handleDelete(e)}}>Delete</Button>
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


