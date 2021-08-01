import React from 'react'
import {Line} from "react-chartjs-2"


export default function ChartStyle({data,dark}) {

    const step_data = data.filter((item,key)=>key <= 100-1)
    const ucl=  step_data.map(item=>item["UCL"])
    const value =  step_data.map(item=>item["VALUE"])
    const lcl =  step_data.map(item=>item["LCL"])
    const Labels =  step_data.map(item=>item["PIECEID"])
    const line_data={
        labels: Labels,
        datasets:[
            {
              label: "UCL",
              data: ucl,
              fill: false,
              borderColor: "orange",

            },
            {
              label: "Value",
              data:  value,
              fill: false,
              borderColor: dark?" yellow":"red"
            },
            {
                label: "LCL",
                data: lcl,
                fill: false,
                borderColor: "rgb(75,192,192)"
              },
          ],
    }
    return (
        <div>
            <Line 
                data={line_data} 
                options ={
                    {borderCapStyle:"square"}
                }
            />
        </div>
    )
}
