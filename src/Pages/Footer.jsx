import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import "./Footer.css";

const Footer = () => {
  return (
    <div
      className="container-fluid text-center"
      style={{
        textAlign: "center",
        // background: "white",
        // color: "crimson",
        fontWeight: "bolder",
      }}
    >
      <h3 className="footer">
        Created By <span>Mukul Dhiman</span> |{" "}
        <CopyrightIcon fontSize="larger" /> 2024 All rights reserved
      </h3>
    </div>
  );
};

export default Footer;
