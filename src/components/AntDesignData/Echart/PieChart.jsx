/* eslint-disable no-loop-func */
import React, { useState,useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import Loading from '../../Loading/Loading';

function PieChart({data}) {

    const [chartObj,setChartObj]= useState()
    const [count, setCount] = useState(0);

    function onChartReady(echarts) {
      console.log('echarts is ready', echarts);
    }
    function onChartClick(param, echarts) {
      console.log(param, echarts);
      setCount(count + 1);
    };
    function onChartLegendselectchanged(param, echarts) {
      console.log(param, echarts);
    };

    const dataTitle = chartObj?Object.keys(chartObj):null

    //value={value:xxx,name:xxx}
    const dataValue = chartObj?Object.keys(chartObj).map((item) => {
        return {"value":chartObj[item],"name":item}
    }):null

    const option = {
        title : {
          text: '資料圓餅圖',
          subtext: '來源json',
          x:'center'
        },
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: dataTitle
        },
        series : [
          {
          name: '访问来源',
          type: 'pie',
          radius : '55%',
          center: ['50%', '60%'],
          data:dataValue,
          itemStyle: {
            emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
          }
        ]
      };

      useEffect(() => {
        //handle data function to object
        const handleSetData = (putData)=>{
                let arr = putData.map((item)=>{return item["CONTEXID"]})
                const setArr = arr.filter((e,i)=>{
                    return arr.indexOf(e) === i;
                })
                const stored={}
                for(let item of setArr){
                    var n = 0
                    for(var i=0;i<arr.length;i++){
                        if(arr[i] === item){n++}
                    }
                    stored[item]=n
                } 
                return stored
            }
        if(!chartObj&&data){
            const storedData = handleSetData(data)
            setChartObj(storedData)
        }
      },[data,chartObj])

    return (
      dataValue?(
        <div>
            <ReactECharts
                option={option}
                style={{ height: 400 }}
                onChartReady={onChartReady}
                onEvents={{
                'click': onChartClick,
                'legendselectchanged': onChartLegendselectchanged
                }}
            />
            <div>Click Count: {count}</div>
            <div>Open console, see the log detail.</div>
        </div>
      ):(
        <Loading />
      )
    )
}

export default PieChart
