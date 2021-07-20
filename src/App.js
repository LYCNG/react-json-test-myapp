import React,{ useEffect, useState} from 'react'
import './App.css';
import DataTable from "./components/DataTable"
import Loading from "./components/Loading"
const url = 'https://test.fs-technology.com/data-100k.json'

function App() {

  const [jsonData,setJsonData] = useState(null)
  const [dataExist,setDataExist] = useState(false)
  const [spendTime,setSpendTime] = useState(0)

  const getUrlToJson = async()=>{
      var start = new Date().getTime();
      const response = await fetch(url);
      const resJsonData = await response.json();
      setJsonData(resJsonData);
      setDataExist(true);
      var end = new Date().getTime();
      setSpendTime((end-start)/100)
  }
  useEffect(()=>{
    jsonData ? (
      setDataExist(true)
    ):(
      getUrlToJson()
      
    )
    console.log(spendTime)
  },[dataExist,jsonData,spendTime]);

  return (
    <div className="App">
  
          {dataExist ? (
            <>
            <p>Json data read time: {spendTime}</p>
            <DataTable data={jsonData} />
            </>
          ):(
            <Loading />
          )}

    </div>
  );
}

export default App;
