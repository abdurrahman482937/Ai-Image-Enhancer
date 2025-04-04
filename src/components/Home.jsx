import { useState } from "react";
import Upload from "./Upload";
import Preview from "./Preview";

const Home = () => {
  const [upload, setUpload] = useState(null);
  const [enhanced, setEnhanced] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Upload ></Upload>
      <Preview loading={loading} upload={upload} enhanced={enhanced}></Preview>
    </>
  );
};

export default Home;
