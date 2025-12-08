import React, { useState } from 'react'

const App = () => {
  const [num,setNum] = useState(10)

  function increaseNum(){
   setNum(num + 1);
  }
    function decreaseNum(){
    setNum(num - 1);
  }
      function jump5(){
    setNum(num + 5);
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={jump5}>Jump by 5</button>
    </div>
  )
}

export default App
