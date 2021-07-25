import React from 'react'
import {useState } from 'react'
import {Table,Container,Button} from 'react-bootstrap'
import Loading from './Loading/Loading'
import EditPopPage from './EditComponents/EditPopPage'

export default function DataTable({data,handleDelete}) {
   
    const [step,setStep] = useState(100)
    const [num,setNum] = useState(0)
    const [show, setShow] = useState(false);
    const [targetData, setTargetData] = useState({})
    const [dataID,setDataID] = useState()

    const handleEdit=(e)=>{
        var index = e.target.getAttribute("data-id")
        const row= [...data][index]
        setTargetData(row)
        setDataID(index)
        setShow(true)
    }

    const handleEditClose=()=>{
        setShow(false)
    }    

    const handleSaveEdit=(e)=>{
        e.preventDefault()
        data[dataID]=targetData
        setShow(false)
    }

    const handleKeyEnter=(e)=>{
        if(e.key==="Enter"){
            handleSearch()
        }
    }

    const handleSearch=()=>{   
        if(num<=0){
            alert("Please Check the Integer Greater than 0")
            setStep(100)
            document.getElementById("stepNum").value=''
        }else{
            setStep(num)
        }
    }

    if(!data) return <Loading />
    return (
        <Container>
            <div className="mb-2">
                <p>顯示資料筆數 ( 預設為100筆 )</p>
                <input id="stepNum" type="number" name="guild" placeholder="" onChange={(e)=>{setNum(parseInt(e.target.value))}} onKeyPress={handleKeyEnter}/>
                <Button style={{marginLeft:"10px"}} variant="success" size='sm' onClick={handleSearch}>Search</Button> 
            </div>

            <EditPopPage show={show} handleEditClose={handleEditClose} handleSaveEdit={handleSaveEdit} data={targetData}/>

            <Table striped bordered hover size="sm" variant="light"> 
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
                <tbody style={{verticalAlign:"middle"}} >
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
                                        <Button data-id={key} variant="primary" onClick={(e)=>{handleEdit(e)}}>Edit</Button>
                                        <Button style={{marginLeft:"1.5%"}} data-id={key} variant="danger" onClick={(e)=>{handleDelete(e)}}>Delete</Button>
                                    </td>
                                </tr>    
                            )
                        })
                    } 

                </tbody>
            </Table>
        </Container>
    )
}


