import React from "react";
import { RotatingLines } from "react-loader-spinner";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      {/* Wrapper div for centering */}
      <RotatingLines
        visible={true}
        height={100}
        width={100}
        strokeColor="crimson"
        strokeWidth={5}
        animationDuration={0.75}
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Loader;
