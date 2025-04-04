import React from "react";
import Home from "./components/Home";

const App = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800">AI image enhancer.</h1>
        <h1 className="text-lg font-semibold font-mono tracking-tighter text-gray-600">
          Upload your image and let AI enhance to in seconds.
        </h1>
      </div>
      <Home></Home>
      <div>
        <p className="text-sm text-gray-600 mt-6">
          Powered by @abdurrahman482937
        </p>
      </div>
    </div>
  );
};

export default App;
