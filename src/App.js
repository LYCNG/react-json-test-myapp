import React,{ useEffect, useState} from 'react'
import './App.css';
import { DataTable,Layout,ChartPage } from './components';
import {Container} from "react-bootstrap"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';



const url = 'https://test.fs-technology.com/data-100k.json'

function App() {
 
    const [jsonData,setJsonData] = useState(null)
    const [spendTime,setSpendTime] = useState(0)
    const [model, setModel] = useState("Light")

    const getUrlToJson = async()=>{
        var start = new Date().getTime();
        const response = await fetch(url);
        const resJsonData = await response.json();
        setJsonData(resJsonData);
        var end = new Date().getTime();
        setSpendTime((end-start)/1000)
    }


    const handleDelete=(e)=>{
      var index = e.currentTarget.getAttribute("data-id")
      const rows= [...jsonData]
      rows.splice(index,1)
      setJsonData(rows)
    }

    const handleModel=()=>{
      model ==="Light"? setModel("Dark"):setModel("Light")
    }

    useEffect(()=>{
      if(!jsonData){
        getUrlToJson()
      }
    },[jsonData,spendTime]);

  return (
    <Router>
      <div className="App" >
        <Layout time={spendTime} handleModel={handleModel} model={model} />
        <Container style={{marginTop:"10px"}} >
            <Switch>
              <Route exact path='/'>
                <DataTable data={jsonData} handleDelete={handleDelete} />
              </Route>
              <Route exact path='/chart'>
                <ChartPage data={jsonData}/>
              </Route>
            </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
