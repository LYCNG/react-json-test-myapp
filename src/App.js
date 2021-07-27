import React,{ useEffect, useState,useMemo} from 'react'
import './App.css';
import { DataTable,Layout,ChartPage } from './components';
import {Container} from "react-bootstrap"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

const url = 'https://test.fs-technology.com/data-100k.json'

function App() {
 
    const [jsonData,setJsonData] = useState(null)
    const [spendTime,setSpendTime] = useState(0)
    const [dark, setDark] = useState(Boolean(localStorage.getItem("dark")))//default false
    const themeStyle=useMemo(()=>{
      return{
        backgroundSize: "cover",
        backgroundColor:dark? "gray":"white"
      }
    },[dark])

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
      dark ? localStorage.clear():localStorage.setItem("dark",true)
      setDark(prevDark=>!prevDark)
    }

    useEffect(()=>{
      if(!jsonData){
        getUrlToJson()
      }
      document.body.style.backgroundColor = dark ? "gray" : "white"
    },[jsonData,spendTime,dark]);

  return (
    <Router>
      <div className="App" style={themeStyle}>
        <Layout time={spendTime} handleModel={handleModel} dark={dark} />
        <Container style={{marginTop:"10px"}} >
            <Switch>
              <Route exact path='/'>
                <DataTable data={jsonData} handleDelete={handleDelete} dark={dark}/>
              </Route>
              <Route exact path='/chart'>
                <ChartPage data={jsonData} dark={dark} />
              </Route>
            </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
