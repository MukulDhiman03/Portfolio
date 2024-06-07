import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import "./Certificates.css";

const ReactJs =
  "https://www.udemy.com/certificate/UC-e6282ca6-8629-4b87-916b-2382f610a1ba/";
const Django =
  "https://www.udemy.com/certificate/UC-013a0d66-050a-41e0-8279-db4dcdcb94a2/";
const Docker =
  "https://www.udemy.com/certificate/UC-70ac5768-ff44-46fc-8c8c-94eb1c331438/";

const Certificates = () => {
  return (
    <div className="accordion-root">
      <p className="certificate_page_heading_content">Certifications</p>
      <Accordion sx={{ backgroundColor: "black", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="accordion-summary"
        >
          React Js For FrontEnd Web Development
        </AccordionSummary>
        <AccordionDetails className="accordion-details">
          I have successfully completed certification in React.js, a highly
          popular JavaScript library for building user interfaces. I have gained
          comprehensive knowledge and practical experience in React Redux, React
          Router DOM, Hooks, API integration, and testing.
          <span>
            <a href={ReactJs} target="_blank" className="accordion-link">
              Verify
            </a>
          </span>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "black", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel2-content"
          id="panel2-header"
          className="accordion-summary"
        >
          Python, Django REST API For Beginners
        </AccordionSummary>
        <AccordionDetails className="accordion-details">
          Completed certification in Python and Django REST API for Beginners.
          These certifications have provided me with a solid foundation and
          practical skills in both Python programming and building RESTful APIs
          using Django.
          <span>
            <a href={Django} target="_blank" className="accordion-link">
              Verify
            </a>
          </span>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "black", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel3-content"
          id="panel3-header"
          className="accordion-summary"
        >
          Docker Containerization
        </AccordionSummary>
        <AccordionDetails className="accordion-details">
          I have successfully completed a certification in Docker, a leading
          containerization platform. This certification has equipped me with the
          knowledge and skills necessary to efficiently use Docker for
          developing, shipping, and running applications in containers.
          <span>
            <a href={Docker} target="_blank" className="accordion-link">
              Verify
            </a>
          </span>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Certificates;
