/* eslint-disable array-callback-return */

import React from 'react'
import {Form,Row,Col} from 'react-bootstrap'

export default function FormDatas({data,handleOnChange}) {

    // `https://pcredivewiki.tw/static/images/unit/icon_unit_${props.data.id}.png`
    
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
                                type="number"
                                name="firstName"
                                placeholder={data[item]}
                                onChange={(e)=>{
                                    handleOnChange(e)
                                }}
                            />
                        </Form.Group>  
                    )
                })}
            </Row>
        </div>
    )
}
