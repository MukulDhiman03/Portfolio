import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="row">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ backgroundColor: "black" }}>
            <Toolbar>
              <div className="logo">
                <Link>
                  <span style={{ color: "white" }}>Port</span>
                  <span style={{ color: "crimson" }}>folio.</span>
                </Link>
              </div>
              <div className="nav-items">
                <Typography
                  variant="h5"
                  component="div"
                  p={2}
                  sx={{ fontWeight: "bolder" }}
                >
                  <Link to="/about" className="link">
                    About
                  </Link>
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  p={2}
                  sx={{ fontWeight: "bolder" }}
                >
                  <Link to="/skills" className="link">
                    Skills
                  </Link>
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  p={2}
                  sx={{ fontWeight: "bolder" }}
                >
                  <Link to="/projects" className="link">
                    Projects
                  </Link>
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  p={2}
                  sx={{ fontWeight: "bolder" }}
                >
                  <Link to="/contact" className="link">
                    Contact
                  </Link>
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
