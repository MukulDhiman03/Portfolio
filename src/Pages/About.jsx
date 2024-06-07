import React from "react";
import { useEffect, useState } from "react";
import img from "../img/about.png";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import DownloadIcon from "@mui/icons-material/Download";
import "./About.css";

const About = () => {
  const myData = [
    "Front End Developer",
    "React JS Developer",
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
          id="image"
        >
          <div className="col-md-6 col-sm-12 text-start ">
            <p className="about_page_content_heading">
              Nice To Meet You{" "}
              <WavingHandIcon fontSize="large" sx={{ color: "yellow" }} />
            </p>
            <p className="about_page_content_heading">I'm Mukul Dhiman,</p>
            <p className="role about_page_content_heading">
              And I'm a{" "}
              <span
                style={{ color: "crimson", borderBottom: "2px solid crimson" }}
              >
                {myData[currentRoleIndex]}
              </span>
              <span style={{ color: "crimson" }}> |</span>
            </p>
            <p className="about_page_content_para">
              I'm dedicated Front-End Developer with a year of professional
              experience. My expertise lies in translating complex design
              concepts into seamless user experiences using technologies like
              React Js.
            </p>
            <div className="row">
              <div className="col-md-4 mt-2">
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
