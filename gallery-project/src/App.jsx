import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Card from "./Components/Card";
const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let prientUserData = (
    <h3 className="text-gray-800 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading...</h3>
  );

  if (userData.length > 0) {
    prientUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
      <Card elem={elem}/>
        </div>
      );
    });
  }
  return (
    <div className="h-screen p-10 overflow-auto">
      {/* <h1 className="fixed text-4xl">{index}</h1> */}

      <div className="flex flex-wrap gap-5 p-2">{prientUserData}</div>
      <div className="flex justify-center gap-6 items-center p-4">
    
        <button
        style={{opacity:index == 1 ? 0.5: 1}}
          onClick={() => {
            if(index>1){
              setIndex(index - 1);
              setUserData([])
            }
          }}
          className="bg-blue-500 text-sm cursor-pointer active:scale-95 text-white  px-5 py-2 rounded-md font-semibold"
        >
          Prev
        </button>
        <h4>{index}</h4>
        <button
          onClick={() => {
            setIndex(index + 1);
            setUserData([])
          }}
          className="bg-blue-500 text-sm cursor-pointer active:scale-95 text-white  px-5 py-2 rounded-md font-semibold"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
