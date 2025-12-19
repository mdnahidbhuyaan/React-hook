import React, { useEffect } from 'react'
import { useState } from 'react'
const App = () => {
  const [a , setA] =useState(0);
  const [b , setB] =useState(0);
  
  function aChanging(){
    console.log("A ke value change hocca");
    
  }
    function bChanging(){
    console.log("B ke value change hocca");
    
  }


  useEffect(()=>{
    bChanging();
  },[b])



  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={()=>{
        setA(a+1);
      }}>Change A</button>
      <button onClick={()=>{
        setB(b-1);
      }}>Change B</button>
    </div>
  )
}

export default App
