import React from 'react'
import { Spinner } from 'react-bootstrap';

export default function Loading() {
    return (
        <div style={{marginTop:"10px"}}>
            <Spinner animation="border" />
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}


