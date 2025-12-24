import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
const App = () => {

const [userData, setUserData] = useState([])

  const getData =async ()=>{
   const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=30")
   setUserData(response.data)
  }

  useEffect(()=>{
getData()
  },[])

  let prientUserData = <h3 className='text-gray-800 text-xs'>NO user available</h3>






  if(userData.length>0){
    prientUserData = userData.map(function(elem,idx){
      return<div key={idx}>
      <a href={elem.url}>
        <div  className='h-40 w-44 rounded-xl overflow-hidden'>
          <img className='h-full w-full object-cover' src={elem.download_url} alt="img" />
        </div>
        <h2 className='font-bold text-lg'>{elem.author}</h2>
      </a>
      </div>
    })
  }
  return (
    <div className='h-screen p-10 overflow-auto'>
   
      <div className='flex flex-wrap '>
      {prientUserData}
      <h1>H</h1>
      </div>
    </div>
  )
}

export default App
