import React from "react";

const Upload = () => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 w-full max-w-2xl">
      <label
        htmlFor="fileInput"
        className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition duration-200"
      >
        <input type="file" id="fileInput" className="hidden" />
        <p>click & drag to upload your image</p>
      </label>
    </div>
  );
};

export default Upload;
