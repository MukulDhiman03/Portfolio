import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          <h1>Contact Me</h1>
          <h2 style={{ color: "crimson" }}>
            <span style={{ color: "white" }}>--</span>
            get in touch
            <span style={{ color: "white" }}>--</span>
          </h2>
        </div>
        <div className="row d-flex justify-content-center mt-2">
          <div className="col-md-5">
            <div>
              <h3>React Out to me!</h3>
              <h5>
                Discuss a Project or just want to say Hi? My inbox is open for
                all.
              </h5>
            </div>
            <div className="d-flex">
              <div className="mt-4">
                <PersonIcon sx={{ color: "crimson", fontSize: "48px" }} />
              </div>
              <div className="m-3">
                <p style={{ fontWeight: "bolder", fontSize: "1.3rem" }}>Name</p>
                <p style={{ fontSize: "1.3rem" }}>Mukul Dhiman</p>
              </div>
            </div>
            <div className="d-flex">
              <div className="mt-4">
                <LocationOnIcon sx={{ color: "crimson", fontSize: "48px" }} />
              </div>
              <div className="m-3">
                <p style={{ fontWeight: "bolder", fontSize: "1.3rem" }}>
                  Address
                </p>
                <p style={{ fontSize: "1.3rem" }}>Roorkee , India</p>
              </div>
            </div>
            <div className="d-flex">
              <div className="m-2">
                <EmailIcon sx={{ color: "crimson", fontSize: "48px" }} />
              </div>
              <div className="m-2">
                <p style={{ fontWeight: "bolder", fontSize: "1.3rem" }}>
                  Email
                </p>
                <Link
                  to="mailto:dhimanmukul307@gmail.com"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    fontSize: "1.3rem",
                  }}
                >
                  dhimanmukul307@gmail.com
                </Link>
              </div>
            </div>
            <div className="d-flex text-center mt-3">
              <div className="col-md-1">
                <Link to="https://www.linkedin.com/in/mukuldhiman03/">
                  <LinkedInIcon sx={{ color: "white", fontSize: "48px" }} />
                </Link>
              </div>
              <div className="col-md-1">
                <Link to="https://github.com/MukulDhiman03">
                  <GitHubIcon sx={{ color: "white", fontSize: "48px" }} />
                </Link>
              </div>
              <div className="col-md-1">
                <InstagramIcon sx={{ color: "white", fontSize: "48px" }} />
              </div>
            </div>
          </div>
          <div className="col-md-5 mt-2">
            <div>
              <h3>Message Me</h3>
            </div>
            <div className="row">
              <div className="col-md-6 mt-3">
                <TextField
                  id="filled-basic"
                  label="Name"
                  variant="filled"
                  fullWidth
                  sx={{ background: "white" }}
                />
              </div>
              <div className="col-md-6 mt-3">
                <TextField
                  id="filled-basic"
                  label="Email"
                  variant="filled"
                  fullWidth
                  sx={{ background: "white", color: "black" }}
                />
              </div>
              <div className="col-12  mt-3">
                <TextField
                  id="filled-basic"
                  label="Subject"
                  variant="filled"
                  fullWidth
                  sx={{ background: "white", color: "black" }}
                />
              </div>
              <div className="col-12 mt-3">
                <TextField
                  id="filled-basic"
                  label="Describe Project"
                  variant="filled"
                  fullWidth
                  sx={{
                    background: "white",
                    color: "black",
                  }}
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-12">
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  sx={{
                    color: "white",
                    backgroundColor: "crimson",
                    fontSize: "1.5rem",
                  }}
                >
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-2">
        <Footer />
      </div> */}
    </>
  );
};

export default Contact;
