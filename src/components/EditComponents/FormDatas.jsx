/* eslint-disable array-callback-return */

import React,{useState,useEffect} from 'react'
import {Form,Row,Col} from 'react-bootstrap'

export default function FormDatas({data}) {


    console.log(Object.keys(data))
    return (
        <div>
            <Row className="mb-4">
                {Object.keys(data).filter((item) => typeof data[item] === 'number').map((item,key)=>{
                    return (
                        <Form.Group
                            key={key}
                            as={Col}
                            md="3"
                            controlId={item}
                            className="position-relative"
                            >
                            <Form.Label>{item}</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                placeholder={data[item]}
                            />
                        </Form.Group>  
                    )
                })}
            </Row>
        </div>
    )
}
