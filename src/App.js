import React,{ useEffect, useState} from 'react'
import './App.css';
import DataTable from "./components/DataTable"
import Loading from "./components/Loading"
import Layout from "./components/Layout"
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
        var end = new Date().getTime();
        setSpendTime((end-start)/100)
        setDataExist(true)
    }

    const handleDelete=(e)=>{
      var index = e.currentTarget.getAttribute("data-id")
      const rows= [...jsonData]
      rows.splice(index,1)
      setJsonData(rows)
    }

    useEffect(()=>{
      jsonData ? (
        setDataExist(true)
      ):(
        getUrlToJson()
      )
    },[dataExist,jsonData,spendTime]);

  return (
    <div className="App">
      <Layout time={spendTime}/>
          {dataExist ? (
            <>
              <p>Json data read time: {spendTime}</p>
              <DataTable data={jsonData} handleDelete={handleDelete}/>
            </>
          ):(
            <Loading />
          )}
    </div>
  );
}

export default App;
