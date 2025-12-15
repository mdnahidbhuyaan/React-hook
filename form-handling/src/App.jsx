import React, { useState } from 'react'

const App = () => {
  const [title,setTitle] = useState("");
  const formSubmit = (e)=>{
    e.preventDefault();
    console.log("Form submitted",title);
    setTitle("");
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        formSubmit(e)
      }}>
        <input type="text"
         placeholder='Enter your name' 
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value);
          }}

         />
        <button>Submit</button>
        <h1>hello</h1>
      </form>
    </div>
  )
}

export default App
