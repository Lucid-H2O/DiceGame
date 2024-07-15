import { useEffect, useState } from "react";
import axios from 'axios';
import Slider from "./Slider";
import Controls from "./Controls";
export default function App() {
  
  const [threshold,setThreshold]=useState(50)
  useEffect(()=>{
  },[threshold])

  const [result,setResult]=useState()

  useEffect(()=>{
  },[result])

  const [over, setOver]=useState(true)

  const [seeds,setSeeds]=useState([])
  const [results, setResults]=useState([])

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
      setResult(result.data)
      if(result.data < 50) {
          document.getElementById("dicePointer").style.marginLeft = (`${result.data* 4.84 + 8}px`);
      }
      else{
        document.getElementById("dicePointer").style.marginLeft = (`${result.data* 5.16 - 16}px`);
      }
      
      })
    })
  }

  const handleSliderChange = (event) => {
    if(event.target.value >= 2 && event.target.value <= 98){
      setThreshold(event.target.value);
      document.getElementById("under").style.width = (`${event.target.value}%`);
    }
    else if(event.target.value < 2){
      setThreshold(2);
      document.getElementById("under").style.width = (`2%`);
    }
    else if(event.target.value > 98){
      setThreshold(98);
      document.getElementById("under").style.width = (`98%`);
    }
  };


  return (
  <div className="mt-10 text-lg mx-auto grid grid-cols-1 w-[1000px] py-4 px-8 rounded-md bg-[#1f4057] shadow-lg">
    <Slider setCurrentThreshold={setThreshold} currentThreshold={threshold} result={result} change={handleSliderChange} over={over}/>
    <Controls onClickHandler={onClickHandler} setThreshold={setThreshold} threshold={threshold} result={result} over={over} setOver={setOver}/>
  </div>

    
  )

}

