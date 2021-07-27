import React ,{useEffect}from 'react'
import ChartStyle from './ChartStyle'
import {Container} from 'react-bootstrap'
import Loading from '../Loading/Loading'

export default function ChartPage({data,dark}) {

    if(!data) {return <Loading />}
    return (
        <Container>
            <ChartStyle data={data} dark={dark}/>
        </Container>
    )
}
