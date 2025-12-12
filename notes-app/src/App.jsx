import React from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("From submit ");
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

        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="font-medium px-5 w-full py-2 outline-none border-2 rounded"
        />
        <textarea
          type="text"
          placeholder="Write Details"
          className="font-medium px-5 w-full h-32  py-2 flex items-start border-2 outline-none rounded"
        />
        <button className="bg-green-700 px-5 w-full py-2 text-white rounded font-medium">
          Add note
        </button>

        {/* <img className='rotate-y-180 h-80' src="https://img.pikbest.com/png-images/20240703/a-graphic-designers-man-working-on-a-laptop-at-office-_10648497.png!bw700" alt="" /> */}
      </form>
      <div className=" p-10  lg:w-1/2 lg:border-l-2 border-gray-300">
        <h1 className=" text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 h-full overflow-auto">
          <div className="h-52 w-40 rounded-2xl bg-blue-200"></div>
          <div className="h-52 w-40 rounded-2xl bg-blue-200"></div>
          <div className="h-52 w-40 rounded-2xl bg-blue-200"></div>

          <div className="h-52 w-40 rounded-2xl bg-blue-200"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
