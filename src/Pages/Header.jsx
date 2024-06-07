import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="row">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ backgroundColor: "black" }}>
            <Toolbar>
              <div className="logo">
                <NavLink to="/about">
                  <span style={{ color: "white" }}>Port</span>
                  <span style={{ color: "crimson" }}>folio.</span>
                </NavLink>
              </div>
              <div
                className="nav-items d-flex justify-content-end"
                style={{ width: "70vw" }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  p={2}
                  sx={{ fontWeight: "bolder" }}
                >
                  <NavLink to="/about" className="link">
                    About
                  </NavLink>
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  p={2}
                  sx={{ fontWeight: "bolder" }}
                >
                  <NavLink to="/skills" className="link">
                    Skills
                  </NavLink>
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  p={2}
                  sx={{ fontWeight: "bolder" }}
                >
                  <NavLink to="/projects" className="link">
                    Projects
                  </NavLink>
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  p={2}
                  sx={{ fontWeight: "bolder" }}
                >
                  <NavLink to="/contact" className="link">
                    Contact
                  </NavLink>
                </Typography>
              </div>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </>
  );
};

export default Header;
