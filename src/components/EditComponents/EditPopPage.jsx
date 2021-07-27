import React from 'react'
import FormDatas from './FormDatas'
import {Modal,Button} from 'react-bootstrap'


export default function EditPopPage({data,show,handleEditClose,handleSaveEdit}) {

    const handleOnChange=(e)=>{
        e.preventDefault()
        var item = e.target.id
        var value = parseFloat(e.target.value)
        data[item] = value
    }

    return (
        <div>
            <Modal 
            
                show={show} 
                onHide={handleEditClose} 
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
            <Modal.Header closeButton >
                <Modal.Title>Data Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body >
            
                <FormDatas data={data} handleOnChange={handleOnChange} />

            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleEditClose}>Cancel</Button>
                <Button variant="primary" onClick={handleSaveEdit}>Save Changes</Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}
