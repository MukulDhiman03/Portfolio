import React, { useEffect, useState } from "react";
import CardComp from "./CardComp";
import projectData from "../assets/ProjectData";
import Footer from "./Footer";

const Projects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(projectData);
  }, []);
  console.log(data);

  return (
    <>
      <div
        className="container mt-2"
        style={{
          minHeight: "calc(100vh - 100px)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="row text-center">
          <h1>My Projects</h1>
          <h2 style={{ color: "crimson" }}>
            <span style={{ color: "white" }}>--</span>
            check my work
            <span style={{ color: "white" }}>--</span>
          </h2>
        </div>
        <div className="row mt-4 flex-grow-1  align-items-center">
          {data.map((item, index) => {
            return (
              <div
                className="col-md-4 col-sm-12 mt-3 d-flex justify-content-center"
                key={index}
              >
                <CardComp data={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-3">
        <Footer />
      </div>
    </>
  );
};

export default Projects;
