import React from "react";
import JS from "../img/js.png";
import ReactJs from "../img/react.png";
import Python from "../img/python.jpg";
import ReduxJs from "../img/redux.png";
import MUI from "../img/mui.jpg";
import Tailwind from "../img/tailwind.jpg";
import Bootstrap from "../img/bootstrap.jpg";
import HTML from "../img/html.jpg";
import CSS from "../img/css.png";
import GIT from "../img/git.png";
import POSTMAN from "../img/postman.png";
import docker from "../img/docker.png";
import Certificates from "./Certificates";
import Footer from "./Footer";

const Skills = () => {
  return (
    <>
      <div className="container mt-1">
        <div className="row text-center">
          <h1>My Skills</h1>
          <h2 style={{ color: "crimson" }}>
            <span style={{ color: "white" }}>--</span>
            what i know
            <span style={{ color: "white" }}>--</span>
          </h2>
        </div>
        <div className="row ">
          <div className="col-md-6 col-sm-12 p-4">
            <h3 style={{ fontSize: "2.5rem", fontWeight: "bolder" }}>
              My creative skills & experiences
            </h3>
            <p style={{ fontSize: "1.5rem" }}>
              I am a Frontend Developer with a passion for learning and can work
              with estimation of future tasks and client feedback. I am
              highly-motivated, result oriented, self-driven, hard-working, fast
              learner and constantly seeking to improve my skills and am fully
              aware of the latest Front-end Development Tools. I have a firm
              knowledge of JavaScript, React.js, Python, Django Redux Toolkit,
              React Context, HTML5, CSS3, TailwindCSS, Bootstrap, Material UI,
              React Hook Form, React Testing Library, Webpack, Parcel.js, REST
              API, Axios, NPM, Git, Jira, and possess a good knowledge of
              computer frameworks and tools that are used in today’s technology.
            </p>
          </div>
          <div className="col-md-6 col-sm-12 p-4">
            <div className="skills-container">
              <div className="skill-item">
                <img src={JS} />
              </div>
              <div className="skill-item">
                <img src={ReactJs} />
              </div>
              <div className="skill-item">
                <img src={Python} />
              </div>
              <div className="skill-item">
                <img src={ReduxJs} />
              </div>
              <div className="skill-item">
                <img src={MUI} />
              </div>
              <div className="skill-item">
                <img src={Tailwind} />
              </div>
              <div className="skill-item">
                <img src={Bootstrap} />
              </div>
              <div className="skill-item">
                <img src={HTML} />
              </div>
              <div className="skill-item">
                <img src={CSS} />
              </div>
              <div className="skill-item">
                <img src={GIT} />
              </div>
              <div className="skill-item">
                <img src={POSTMAN} />
              </div>
              <div className="skill-item">
                <img src={docker} />
              </div>
            </div>
          </div>
        </div>
        <div className="row my-2">
          <Certificates />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Skills;
