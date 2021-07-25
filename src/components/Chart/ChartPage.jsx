import React from 'react'
import ChartStyle from './ChartStyle'
import {Container} from 'react-bootstrap'
import Loading from '../Loading/Loading'

export default function ChartPage({data}) {


    // if(!data) {return <Loading />}
    return (
        <Container>
            <ChartStyle />
        </Container>
    )
}
