import React from 'react'

const App = () => {


function getData () {
  console.log("Get Data from Local Storage")
}
  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App
