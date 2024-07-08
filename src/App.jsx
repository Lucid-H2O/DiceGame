import { useEffect, useState } from "react";
import axios from 'axios';

export default function App() {
  
  const [value,setValue]=useState()
  useEffect(()=>{
  },[value])
  const [seeds,setSeeds]=useState([])

  async function getSeed() {
    var promise = await axios.post('https://api.random.org/json-rpc/4/invoke',{
      "jsonrpc": "2.0",
      "method": "generateStrings",
      "params": {
          "apiKey": process.env.REACT_APP_KEY,
          "n": 1,
          "length": 16,
          "characters": "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
          "replacement": true
      },
      "id": 42
    });
    setSeeds(s => [...s,promise.data.result.random.data[0]]);
    return promise.data.result.random.data[0];
  }

  async function getVal(seed) {
    var promise = await axios.get('http://localhost:5000/dice/'+ seed)
    return promise
  }
  
  function onClickHandler(){
    getSeed().then((seed)=>{
      getVal(seed)
      .then((result) => {
      console.log(result.data);
      setValue(result.data)
      })
    })
  }


  return (
  <div className="app">
      <h2>{value}</h2>
      <button className="menu-btn" onClick={onClickHandler}>Get </button>
  </div>
  )

}

