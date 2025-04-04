import React from "react";

const Preview = () => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      {/* Original Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
          Uploaded image
        </h2>
        <img
          src="https://via.placeholder.com/400"
          alt="Uploaded"
          className="w-full h-full object-cover"
        />
        <div className="flex items-center justify-center bg-gray-200 h-80">
          No image uploaded yet.
        </div>
      </div>
      {/* Enhanced Image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
          Enhanced Image
        </h2>
        <img
          src="https://via.placeholder.com/400"
          alt="Uploaded"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Preview;
