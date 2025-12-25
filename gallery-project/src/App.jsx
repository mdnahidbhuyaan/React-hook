import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
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
          <a href={elem.url} target="_blank">
            <div className="h-40 w-44 rounded-xl overflow-hidden ">
              <img
                className="h-full w-full  object-cover"
                src={elem.download_url}
                alt="img"
              />
            </div>
            <h2 className="font-bold text-lg">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }
  return (
    <div className="h-screen p-10 overflow-auto">
      <h1 className="fixed text-4xl">{index}</h1>

      <div className="flex flex-wrap gap-5 p-2">{prientUserData}</div>
      <div className="flex justify-center gap-6 items-center p-4">
        <button
          onClick={() => {
            if(index>1){
              setIndex(index - 1);
              setUserData([])
            }
          }}
          className="bg-blue-500 text-sm cursor-pointer active:scale-95 text-white px-4 py-2 rounded-md"
        >
          Prev
        </button>
        <button
          onClick={() => {
            setIndex(index + 1);
            setUserData([])
          }}
          className="bg-blue-500 text-sm cursor-pointer active:scale-95 text-white px-4 py-2 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
