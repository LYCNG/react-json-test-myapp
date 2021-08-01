import React from 'react'
import ChartStyle from './ChartStyle'
import ChartSimple from './ChartSimple'
import DexChart from './DexChart'
import {Container} from 'react-bootstrap'
import Loading from '../Loading/Loading'

export default function ChartPage({data,dark}) {



    if(!data) {return <Loading />}
    return (
        <Container>
            <ChartStyle data={data} dark={dark}/>
            <ChartSimple data={data} />
            <DexChart dark={dark}/>
        </Container>
    )
}
