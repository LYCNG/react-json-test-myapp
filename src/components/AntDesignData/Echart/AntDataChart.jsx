import React,{useState,useEffect} from 'react'
import ReactECharts from 'echarts-for-react';
import Loading from "../.././Loading/Loading"

function AntDataChart({data}) {
    
    const [chartData,setChartData] = useState();

    const MapValues =(string)=>{
        if(chartData){
            return chartData.map((item)=>{
                return item[string];
            })
        }
    }

    const title = ['UCL','VALUE','LCL']
    const label = MapValues("PIECEID") 
    const value = MapValues("VALUE")
    const ucl = MapValues("UCL")
    const lcl = MapValues("LCL")
    const maximum = ucl ? Math.max(...ucl):null
    const minimum = lcl ? Math.min(...lcl):null

    const option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        title: {
            left: 'center',
        },legend: {
            data: title
                },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {
                    type: 'restore'
                },
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: label
        },
        yAxis: {
            name:`Number( Max:${maximum}, Min:${minimum})`,
            type: 'value',
            min:minimum - 0.25,
            max:maximum + 0.25
        },
        dataZoom: [{
            type: 'inside',
            start: 5,
            end: 10
        }, {
            start: 0,
            end: 10
        }],
        series: [
            {
                name: 'UCL',
                type: 'line',
                stack: 'UCL',
                itemStyle: {
                    color: 'rgb(93, 185, 147)'
                },
                data: ucl
            },
            {
                name: 'VALUE',
                type: 'line',
                stack: 'VALUE',
                itemStyle: {
                    color: 'rgb(235, 160, 160)'
                },
                data: value
            },
            {
                name: 'LCL',
                type: 'line',
                stack: 'LCL',
                itemStyle: {
                    color: 'rgb(127, 155, 230)'
                },
                data: lcl
            },
        ]
    };
    useEffect(()=>{
        if(!chartData&&data){
            setChartData(data)
        }
    },[data,chartData]);

    if(!chartData){<Loading />}
    return (
        <div id='main-char' style={{marginTop:"5%",backgroundColor:"white"}}>
            <h2>The Data Chart</h2>
           <ReactECharts
                option={option}
                style={{ height: 600 }}
            />;
        </div>
    )
}

export default AntDataChart
