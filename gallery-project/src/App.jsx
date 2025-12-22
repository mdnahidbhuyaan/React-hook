import axios from "axios";

import React, { useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);

  const getdata = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=10"
    );
    setUserData(response.data);
    console.log(response.data);
 
  };


  let prientUserData = "No user available";

  if(userData.length){
    prientUserData = userData.map(function(elem, idx){
      return <div>
        <img className="h-40 " src={elem.download_url} alt="" />
      </div>
    })
  }

  return (
    <div className="p-10 h-screen overflow-auto">
      <button
        onClick={getdata}
        className="bg-cyan-400 rounded-sm px-5 py-2 active:scale-95 text-white"
      >
        Click
      </button>
      <div>{prientUserData}</div>
    </div>
  );
};

export default App;
