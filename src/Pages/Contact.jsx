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
import "./Contact.css";
import emailjs from "emailjs-com";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

// emailjs.init("LCZ6GXJP544pbbC71");

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    console.log("Submitted");
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      // Display error message if any field is empty
      toast.error("Please fill in all fields.");
      return; // Exit early if any field is empty
    }

    // Email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      // Display error message if email is not valid
      toast.error("Please enter a valid email address.");
      return; // Exit early if email is not valid
    }

    emailjs
      .send(
        "service_9censyo",
        "template_pwadq3k",
        formData,
        "LCZ6GXJP544pbbC71"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message.");
        }
      );
  };

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          <p className="contact_page_content_heading">Contact Me</p>
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
            <div className="below_section">
              <h3>Message Me</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mt-3">
                  <TextField
                    id="name"
                    name="name"
                    label="Name"
                    variant="filled"
                    fullWidth
                    sx={{ background: "white" }}
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6 mt-3">
                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    variant="filled"
                    fullWidth
                    sx={{ background: "white", color: "black" }}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 mt-3">
                  <TextField
                    id="subject"
                    name="subject"
                    label="Subject"
                    variant="filled"
                    fullWidth
                    sx={{ background: "white", color: "black" }}
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 mt-3">
                  <TextField
                    id="message"
                    name="message"
                    label="Describe Your Message"
                    variant="filled"
                    fullWidth
                    sx={{ background: "white", color: "black" }}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="row my-2">
                <div className="col-md-12">
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<SendIcon sx={{ color: "white" }} />}
                    sx={{
                      backgroundColor: "crimson",
                      fontSize: "1.4rem",
                    }}
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Contact;
