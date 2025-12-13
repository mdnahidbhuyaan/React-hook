import React from "react";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault();
     
    const copyTask = [...task]
   copyTask.push({title,details})
    setTask(copyTask)
  

    setTitle('')
    setDetails('')
  };

  return (
    <div className="h-screen lg:flex ">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-4 lg:w-1/2 p-10  items-start flex-col  "
      >
        <h1 className=" text-4xl font-bold">Add Notes</h1>
   {/* FIRST INPUT */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="font-medium px-5 w-full py-2 outline-none border-2 rounded"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />
        {/* DETAILS TEXTAREA */}
        <textarea
          type="text"
          placeholder="Write Details" 
          className="font-medium px-5 w-full h-32  py-2 flex items-start border-2 outline-none rounded"
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        />
        <button className="bg-green-700 active:bg-gray-600 px-5 w-full py-2 text-white rounded font-medium">
          Add note
        </button>

        {/* <img className='rotate-y-180 h-80' src="https://img.pikbest.com/png-images/20240703/a-graphic-designers-man-working-on-a-laptop-at-office-_10648497.png!bw700" alt="" /> */}
      </form>
      <div className=" p-10  lg:w-1/2 lg:border-l-2 border-gray-300">
        <h1 className=" text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 h-full overflow-auto">
          {task.map(function(){
            return "Hero"
              
            
          })}
 
        </div>
      </div>
    </div>
  );
};

export default App;
