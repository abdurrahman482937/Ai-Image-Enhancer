import React from "react";

const Upload = () => {
  const showImageFunc = (e) => {
    const file = e.target.files[0];
    if (file) {
      props.uploadImageHandler(file);
    }
  };
  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 w-full max-w-2xl">
      <label
        htmlFor="fileInput"
        className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-all duration-300"
      >
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={showImageFunc}
        />
        <span className="text-lg font-medium text-gray-600">
          click & drag to upload your image
        </span>
      </label>
    </div>
  );
};

export default Upload;
