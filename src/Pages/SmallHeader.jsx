import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ReorderIcon from "@mui/icons-material/Reorder";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/system";

const SmallHeader = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const StyledNavLink = styled(NavLink)(({ theme }) => ({
    color: "crimson",
    textDecoration: "none",
    padding: "10px 15px",
    // borderRadius: "5px",
    "&:hover": {
      backgroundColor: "rgba(220, 20, 60, 0.1)",
    },
    "&.active": {
      fontWeight: "bold",
      borderBottom: "2px solid white",
    },
  }));

  const drawer = (
    <Box
      sx={{
        width: 250,
        backgroundColor: "black",
        color: "crimson",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        <div className="logo">
          <span style={{ color: "white" }}>Port</span>
          <span style={{ color: "crimson" }}>folio.</span>
        </div>
        <ListItem disablePadding>
          <div className="d-flex flex-column " style={{ height: "100vh" }}>
            <StyledNavLink
              to="/about"
              sx={{ color: "crimson", fontSize: "2rem" }}
            >
              About
            </StyledNavLink>
            <StyledNavLink
              to="/skills"
              sx={{ color: "crimson", fontSize: "2rem" }}
            >
              Skills
            </StyledNavLink>
            <StyledNavLink
              to="/projects"
              sx={{ color: "crimson", fontSize: "2rem" }}
            >
              Projects
            </StyledNavLink>
            <StyledNavLink
              to="/contact"
              sx={{ color: "crimson", fontSize: "2rem" }}
            >
              Contact
            </StyledNavLink>
          </div>
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <ReorderIcon sx={{ fontSize: "2rem", color: "crimson" }} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>
    </div>
  );
};

export default SmallHeader;
