import React from "react";
import { useEffect, useState } from "react";
// import img from "../img/bg.jpg";

const About = () => {
  const myData = [
    "Front End Developer",
    "React Developer",
    "JavaScript Developer",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % myData.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [myData.length]);

  return (
    <div className="container-fluid" id="about">
      <div
        className="row mt-5 justify-content-around"
        // style={{ border: "2px solid red" }}
        id="image"
      >
        <div className="col-8 text-start mt-5 ">
          <h1>Hello!</h1>
          <h1>I'm Mukul Dhiman</h1>
          <h1 className="role">
            And I'm a{" "}
            <span
              style={{ color: "crimson", borderBottom: "2px solid crimson" }}
            >
              {myData[currentRoleIndex]}
            </span>
            <span style={{ color: "crimson" }}> |</span>
          </h1>
          <p>
            I'm dedicated Front-End Developer with a year of professional
            experience. My expertise lies in translating complex design concepts
            into seamless user experiences using technologies like React Js.
          </p>
        </div>
        <div className="col-2">
          {/* <img className="img-fluid" src={img}></img> */}
        </div>
      </div>
    </div>
  );
};

export default About;
