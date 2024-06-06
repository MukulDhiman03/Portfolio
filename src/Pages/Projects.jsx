import React, { useEffect, useState } from "react";
import CardComp from "./CardComp";
import projectData from "../assets/ProjectData";

const Projects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(projectData);
  }, []);
  console.log(data);

  return (
    <div className="container mt-2">
      <div className="row text-center">
        <h1>My Projects</h1>
        <h2 style={{ color: "crimson" }}>
          <span style={{ color: "white" }}>--</span>
          check my work
          <span style={{ color: "white" }}>--</span>
        </h2>
      </div>
      <div className="row mt-4">
        {data.map((item, index) => {
          return (
            <div className="col-md-4 mt-3" key={index}>
              <CardComp data={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
