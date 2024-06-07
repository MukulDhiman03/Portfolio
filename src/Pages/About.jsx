import React from "react";
import { useEffect, useState } from "react";
import img from "../img/about.png";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import DownloadIcon from "@mui/icons-material/Download";
import Footer from "./Footer";

const About = () => {
  const myData = [
    "Front End Developer",
    "React Developer",
    "JavaScript Developer",
    "Python Developer",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  // to handle my data after every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % myData.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [myData.length]);

  // to remove the image
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="container-fluid" id="about">
        <div
          className="row d-flex justify-content-around align-items-center"
          // style={{ border: "2px solid red" }}
          id="image"
        >
          <div className="col-md-6 col-sm-12 text-start ">
            <p style={{ fontSize: "3.5rem", fontWeight: "bolder" }}>
              Nice To Meet You{" "}
              <WavingHandIcon fontSize="large" sx={{ color: "yellow" }} />
            </p>
            <h1 style={{ fontSize: "3.5rem", fontWeight: "bolder" }}>
              I'm Mukul Dhiman,
            </h1>
            <h1
              className="role"
              style={{ fontSize: "3.5rem", fontWeight: "bolder" }}
            >
              And I'm a{" "}
              <span
                style={{ color: "crimson", borderBottom: "2px solid crimson" }}
              >
                {myData[currentRoleIndex]}
              </span>
              <span style={{ color: "crimson" }}> |</span>
            </h1>
            <p style={{ fontSize: "2rem" }}>
              I'm dedicated Front-End Developer with a year of professional
              experience. My expertise lies in translating complex design
              concepts into seamless user experiences using technologies like
              React Js.
            </p>
            <div className="row">
              <div className="col-md-3 mt-2">
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  sx={{
                    color: "white",
                    backgroundColor: "crimson",
                    fontSize: "1rem",
                  }}
                >
                  Looking To Hire
                </Button>
              </div>

              <div className="col-md-3 mt-2">
                <Button
                  variant="contained"
                  endIcon={<DownloadIcon />}
                  sx={{
                    color: "white",
                    backgroundColor: "crimson",
                    fontSize: "1rem",
                  }}
                >
                  My Resume
                </Button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            {!isMobile && (
              <img className="img-fluid" src={img} alt="description" />
            )}
          </div>
          {/* <div className="mt-2">
            <Footer />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default About;
