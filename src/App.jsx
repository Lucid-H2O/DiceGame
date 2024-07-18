import { useEffect, useState } from "react";
import axios from 'axios';
import Slider from "./Slider";
import Controls from "./Controls";
import History from "./history";
export default function App() {
  
  const [threshold,setThreshold]=useState(50)
  const [result,setResult]=useState()

  useEffect(()=>{},[threshold, result])

  const [over, setOver]=useState(true)

  const [pastResults, setPastResults]=useState([])

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
    return promise.data.result.random.data[0];
  }

  async function getVal(seed) {
    var promise = await axios.get('http://localhost:5000/dice/'+ seed)
    return promise
  }
  function checkWin(result){
    if(over && result >= threshold){
      return true
    }
    if(!over && result <= threshold){
      return true
    }
    return false
  }
  
  function onClickHandler(){
    getSeed().then((seed)=>{

      getVal(seed)
      .then((result) => {
      setResult(result.data)
      var win = checkWin(result.data)
      setPastResults([{'seed':seed,'res':result.data, 'win': win}, ...pastResults])
      if(result.data < 50) {
          document.getElementById("dicePointer").style.marginLeft = (`${result.data* 7.84 + 8}px`);
      }
      else{
        document.getElementById("dicePointer").style.marginLeft = (`${result.data* 7.16 - 16}px`);
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
    <History pastResults={pastResults}/>
    <Slider setCurrentThreshold={setThreshold} currentThreshold={threshold} result={result} change={handleSliderChange} over={over}/>
    <Controls onClickHandler={onClickHandler} setThreshold={setThreshold} threshold={threshold} result={result} over={over} setOver={setOver}/>
  </div>

    
  )

}

