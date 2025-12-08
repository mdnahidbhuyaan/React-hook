import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState({user:"Ankit", age:24  });
  const btnClick = () => {
setNum(prev=>({...prev,age:50}))
   
  }
  return (
    <div>
      <h1> {num.user},{num.age}</h1>
    <h2>Home</h2>
      <button onClick = {btnClick}
        >Increase</button>
    </div>
  )
}

export default App
